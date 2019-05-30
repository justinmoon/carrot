import time

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    msg = {"time": int(time.time())}
    return jsonify(msg)
