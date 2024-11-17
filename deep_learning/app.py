from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model

# Set the default encoding to UTF-8
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding="utf-8")
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding="utf-8")
os.environ["PYTHONIOENCODING"] = "utf-8"

model = load_model("model/imdb_sentiment_model.h5")
tokenizer = Tokenizer(num_words=10000)

def predict_sentiment(review: str):
    MIN_POSITIVE = 0.55

    review = tokenizer.texts_to_sequences([review])
    review = pad_sequences(review, maxlen=200)

    prediction = model.predict(review)

    sentiment = "Positive" if prediction[0] >= MIN_POSITIVE else "Negative"
    score = float(prediction[0])

    return sentiment, score


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


@app.route("/predict", methods=["GET", "POST"])
def predict():
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


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
