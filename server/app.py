from flask import Flask, request, jsonify
import pickle  # Assuming your model is saved in pickle format

# Load your pickled model (replace 'model.pkl' with your actual filename)
vectorizer = pickle.load(open('./vectorizer.pkl', 'rb'))
model_lr = pickle.load(open('./log_reg_model.pkl', 'rb'))
model_dt = pickle.load(open('./dec_tree_model.pkl', 'rb'))

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():

    data = request.get_json()
    print(data['inputData'])
    if not data or 'inputData' not in data:
        return jsonify({'error': 'Missing input data'}), 400

    vectorized_input = vectorizer.transform([data['inputData']])
    prediction_lr = model_lr.predict(vectorized_input)[0]
    pred_lr = int(prediction_lr)

    prediction_dt = model_dt.predict(vectorized_input)[0] 
    pred_dt = int(prediction_dt)

    return jsonify({
        'prediction_lr': pred_lr,
        'prediction_dt': pred_dt
    })

if __name__ == '__main__':
    app.run(debug=True)
