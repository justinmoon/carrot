import time
import random
from flask import Flask, jsonify

app = Flask(__name__)

txns = [{"id": 1, "amount": 1}]

@app.route('/')
def hello_world():
    if random.random() < .5:
        txns.append({"amount": random.randint(1, 1000), "id": random.randint(0, 1000000)})
    return jsonify({"txns": txns})
