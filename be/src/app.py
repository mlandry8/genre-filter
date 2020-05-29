import os
import requests
import base64

from flask import Flask, make_response, request
app = Flask(__name__)

CLIENT_SECRET = os.environ.get('SECRET_KEY')
CLIENT_ID = '69bb29ca8dfd409c8e267eaddff523cf'

@app.route('/')
def index():
    return make_response({'status':'success'}, 200)

@app.route('/login', methods=['POST', 'OPTIONS', 'GET'])
def login():
    encoded_keys = base64.standard_b64encode(f'{CLIENT_ID}:{CLIENT_SECRET}'.encode('utf-8')).decode()

    headers = {
        'Authorization': f'Basic {encoded_keys}'
    }

    response = requests.post(
        'https://accounts.spotify.com/api/token',
        data={
            'grant_type': 'authorization_code',
            'code': request.json.get('code'),
            'redirect_uri': request.json.get('redirectUri')
        },
        headers=headers
    )

    if response.status_code == 200:
        return make_response({
                'status':'success',
                'accessToken': response.json().get('access_token')
            },
            200
        )
    else:
        return make_response({
                'status':'failure',
                'error': response.json()
            },
            response.status_code
        )
