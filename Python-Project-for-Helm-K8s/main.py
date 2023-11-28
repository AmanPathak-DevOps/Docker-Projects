# # save this as app.py
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/main', methods=['GET'])
def helloworld():
    if(request.method=='GET'):
        data = {"Message": "Hello World!!!"}
        return jsonify(data)
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9001)