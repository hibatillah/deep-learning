from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
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
            return jsonify({"error": "Review is required"}), 400

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
            return jsonify({"error": "Audio is required"}), 400

        try:
            predicted_class, accuracy = predict_audio(audio)

            response = jsonify({"prediction": predicted_class, "accuracy": accuracy})

            return response
        except Exception as e:
            return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
