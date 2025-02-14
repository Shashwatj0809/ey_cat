from flask import Flask, request, jsonify
from flask_mongoengine import MongoEngine

app = Flask(__name__)

# Initialize MongoDB
db = MongoEngine()

@app.route('/api/risk-data', methods=['GET'])
def get_risk_data():
    try:
        risk_data = list(db.risk_data.find())
        # Convert ObjectId to string for JSON serialization
        for data in risk_data:
            data['_id'] = str(data['_id'])
        return jsonify(risk_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500 