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
audio_model = load_model("model/model_music_yaman.h5")


def predict_audio(file_path):
    target_shape = (128, 128)
    classes = ["adeni", "hadrami", "lahji"]

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
        <h3>Text Sentiment Analysis API</h3>
        <p>
            Use <code style="background: lightgray;">/predict</code>
            endpoint for predictions.
        </p>"""

# flask
@app.route("/predict/audio", methods=["GET", "POST"])
def audio():
    if request.method == "GET":
        return """
            <p>
                Post files data with a key
                <code style="background: lightgray;">audio</code>
                to get the sentiment prediction.
            </p>"""

    if request.method == "POST":
        audio = request.files.get("audio")

        if not audio:
            return jsonify({"error": "Audio is required"}), 400

        try:
            predicted_class, accuracy = predict_audio(audio)    # predict_audio
            response = jsonify({"prediction": predicted_class, "accuracy": accuracy})
            return response

        except Exception as e:
            return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
