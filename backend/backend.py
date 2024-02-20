from flask import Flask, jsonify
from flask_cors import CORS
import psutil
import pymongo

app = Flask(__name__)
CORS(app)

# Construct the MongoDB URI with the escaped username and password
mongo_uri = "mongodb+srv://nikhilkumarray5775:qlMXvfUuXVYQDkWl@cluster0.jfjpv8x.mongodb.net/?retryWrites=true&w=majority"

# Connect to MongoDB using the modified URI
client = pymongo.MongoClient(mongo_uri)
db = client["monitoring_db"]
collection = db["monitoring_data"]

@app.route('/api/usage')
def get_usage():
    try:
        cpu_percent = psutil.cpu_percent(interval=1)
        memory_percent = psutil.virtual_memory().percent
        print("CPU Percent:", cpu_percent)
        print("Memory Percent:", memory_percent)
        data = {"cpu_percent": cpu_percent, "memory_percent": memory_percent}
        collection.insert_one(data)
        
        return jsonify({"cpu_percent": cpu_percent, "memory_percent": memory_percent})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        client.close()

if __name__ == '__main__':
    app.run(debug=True)
