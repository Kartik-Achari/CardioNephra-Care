from flask import Flask, render_template, request
import pickle
import numpy as np

from database_operations import database_operations



app = Flask(__name__)
db_obj = database_operations()

@app.route('/')
def dashboard_page():
    return render_template('front.html')

@app.route('/login')
def login_page():
    return render_template('login.html')

@app.route('/base')
def base_page():
    return render_template('base.html')

@app.route('/user_login', methods=['POST','GET'])
def user_login():
    user_name=request.form['username']
    pwd=request.form['password']
    
    db_obj.connect_db()
    result = db_obj.validate_user(user_name,pwd)
    db_obj.conn.close()
    
    if result[0]:
        return render_template('home.html',name=result[1])
    else:
        return render_template('login.html',info="Invalid Login Credentials!!")

@app.route('/signup')
def signup_page():
    return render_template('signup.html')

@app.route('/user_signup', methods=['POST','GET'])
def user_signup():
    
    db_obj.connect_db()
    result = db_obj.is_user_exit(request.form)
    if(result[0]):
        return render_template('signup.html',info=result[1])
    
    res = db_obj.add_user(request.form)
    db_obj.conn.close()

    return render_template('signup.html',info=res)


def predictHeart(values):

    if len(values) == 13:
        to_predictHeart = np.array(values).reshape(1, 13)
        loaded_model = pickle.load(open("models/heart.pkl", "rb"))
        result = loaded_model.predict(to_predictHeart)
        return result[0]


def predictKidney(values):
    if len(values) == 18:
        to_predictKidney = np.array(values).reshape(1, 18)
        loaded_model = pickle.load(open("models/kidney.pkl", "rb"))
        result = loaded_model.predict(to_predictKidney)
        return result[0]


@ app.route("/")
def home():
    return render_template('home.html')


@ app.route("/heart", methods=['GET', 'POST'])
def heartPage():
    return render_template('heart.html')

@ app.route("/home", methods=['GET', 'POST'])
def homePage():
    return render_template('home.html')


@ app.route("/front", methods=['GET', 'POST'])
def frontPage():
    return render_template('front.html')


@ app.route("/kidney", methods=['GET', 'POST'])
def kidneyPage():
    return render_template('kidney.html')


@ app.route("/predictHeart", methods=['GET', 'POST'])
def predictHeartPage():

    if request.method == 'POST':
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(float, to_predict_list))
        pred = predictHeart(to_predict_list)

        return render_template('predictHeart.html', pred=pred)
    
@ app.route("/predictKidney", methods=['GET', 'POST'])
def predictHeratPage():

    if request.method == 'POST':
        to_predict_list = request.form.to_dict()
        to_predict_list = list(to_predict_list.values())
        to_predict_list = list(map(float, to_predict_list))
        pred = predictKidney(to_predict_list)

        return render_template('predictKidney.html', pred=pred)


if __name__ == '__main__':
       app.run(host='localhost', port=5000, debug=True)

