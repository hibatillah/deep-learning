from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.image import resize
import librosa
import numpy as np
import tensorflow as tf

# Set the default encoding to UTF-8
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding="utf-8")
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding="utf-8")
os.environ["PYTHONIOENCODING"] = "utf-8"

# Load the models
audio_model = load_model("model/gun_audio_model.h5")
text_model = load_model("model/imdb_sentiment_model.h5")
image_model = load_model("model/landscape_images_model.h5")

# Load dependencies
tokenizer = Tokenizer(num_words=10000)


def predict_sentiment(review: str):
    MIN_POSITIVE = 0.55

    review = tokenizer.texts_to_sequences([review])
    review = pad_sequences(review, maxlen=200)

    prediction = text_model.predict(review)

    sentiment = "Positive" if prediction[0] >= MIN_POSITIVE else "Negative"
    score = float(prediction[0])

    return sentiment, score


def predict_audio(file_path):
    target_shape = (128, 128)
    classes = ["AK12", "M16", "M249"]

    audio_data, sample_rate = librosa.load(file_path, sr=None)
    mel_spectrogram = librosa.feature.melspectrogram(y=audio_data, sr=sample_rate)
    mel_spectrogram = resize(np.expand_dims(mel_spectrogram, axis=-1), target_shape)
    mel_spectrogram = tf.reshape(mel_spectrogram, (1,) + target_shape + (1,))

    # make prediction
    prediction = audio_model.predict(mel_spectrogram)

    # get class probabilities
    class_probabilities = prediction[0]

    # get predicted class index
    predicted_class_index = np.argmax(class_probabilities)

    for i, class_label in enumerate(classes):
        probability = class_probabilities[i]
        print(f"Class: {class_label}, Probability: {probability: .4f}")

    predicted_class = classes[predicted_class_index]
    accuracy = float(class_probabilities[predicted_class_index])

    return predicted_class, accuracy


def predict_image(image_file, target_size=(144, 144)):
    # class order must match the order in the dataset for model creation
    classes = ["forest", "glacier", "mountain", "sea"]

    try:
        # Read image file and decode it
        img = tf.io.decode_image(image_file.read(), channels=3, expand_animations=False)
        img = tf.image.resize(img, target_size)
        img = img / 255.0  # Normalize to [0,1]
        img_array = tf.expand_dims(img, axis=0)

        # Predict with model
        predictions = image_model.predict(img_array)
        predicted_class = np.argmax(predictions, axis=1)

        predicted_label = classes[predicted_class[0]]
        predicted_accuracy = predictions[0][predicted_class[0]]
        accuracy = round(float(predicted_accuracy), 2)

        return predicted_label, accuracy
    except Exception as e:
        raise ValueError(f"Failed to process image: {e}")


app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return """
        <h3>Deep Learning Project API</h3>
        <p>
            Use the following endpoints for prediction.
        </p>
        <ul>
            <li>
                <code style="background: lightgray;">/predict/text</code> for sentiment analysis.
            </li>
            <li>
                <code style="background: lightgray;">/predict/audio</code> for audio classification.
            </li>
            <li>
                <code style="background: lightgray;">/predict/image</code> for image classification.
            </li>
        </ul>"""


@app.route("/predict/text", methods=["GET", "POST"])
def text():
    if request.method == "GET":
        return """
            <p>
                Post json data with a key
                <code style="background: lightgray;">review</code>
                to get the sentiment prediction.
            </p>"""

    if request.method == "POST":
        data = request.get_json()
        review = data.get("review")

        if not review:
            return jsonify({"error": "review is required"}), 400

        try:
            sentiment, score = predict_sentiment(review)
            response = jsonify(
                {"prediction": sentiment, "score": score, "review": review}
            )
            response.headers["Content-Type"] = "application/json; charset=utf-8"
            return response
        
        except Exception as e:
            return jsonify({"error": str(e)}), 500


@app.route("/predict/audio", methods=["GET", "POST"])
def audio():
    if request.method == "GET":
        return """
            <p>
                Post files data with a key
                <code style="background: lightgray;">audio</code>
                to get the classification prediction.
            </p>"""

    if request.method == "POST":
        audio = request.files.get("audio")

        if not audio:
            return jsonify({"error": "audio is required"}), 400

        try:
            predicted_class, accuracy = predict_audio(audio)
            response = jsonify({"prediction": predicted_class, "accuracy": accuracy})
            return response

        except Exception as e:
            return jsonify({"error": str(e)}), 500


@app.route("/predict/image", methods=["GET", "POST"])
def image():
    if request.method == "GET":
        return """
            <p>
                Post files data with a key
                <code style="background: lightgray;">image</code>
                to get the classification prediction.
            </p>"""

    if request.method == "POST":
        image = request.files.get("image")

        if not image:
            return jsonify({"error": "image is required"}), 400

        if image.mimetype not in ["image/jpeg", "image/png"]:
            return jsonify({"error": "Only `.jpg` and `.png` images are allowed"}), 400

        try:
            if not image:
                raise ValueError("No image provided")

            predicted_label, accuracy = predict_image(image)
            response = jsonify({"prediction": predicted_label, "accuracy": accuracy})
            return response

        except ValueError as ve:
            return jsonify({"error": str(ve)}), 400

        except Exception as e:
            import traceback
            print(traceback.format_exc())
            return jsonify({"error": "Internal Server Error", "details": str(e)}), 500



if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
