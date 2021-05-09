from flask import Flask,Response, request
import logging

app = Flask(__name__)

@app.route('/api/user' , methods=['GET', 'POST'])
def user():
    if request.method == 'GET':
        print('insidee gett')
        return {'user1':{'id':'122','name':'iiss'}}
    elif request.method == 'POST':
        print('#######inside post######')
        print(request.data)
        return 'post method found'
    else:
        return 'hellow'


if __name__ == '__name__':
    app.run(debug=True)