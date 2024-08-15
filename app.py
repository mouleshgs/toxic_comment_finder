from flask import Flask, request, jsonify, render_template
from markupsafe import escape

import toxic_comment

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    comment = request.form.get('comment')
    comment = escape(comment)
    if comment:
        prediction = toxic_comment.checking(comment)
        print(prediction)
        if prediction is not None:
            return jsonify({'prediction': prediction})
        else:
            return jsonify({'prediction': 'Unable to predict'}), 200
    return jsonify({'error': 'No comment provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)
