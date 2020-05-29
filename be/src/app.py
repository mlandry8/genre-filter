from flask import Flask, make_response
app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/login', methods=['POST', 'GET'])
def login():

    return make_response({}, 200)