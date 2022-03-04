from contextlib import redirect_stderr
import email
from flask import Flask,render_template,request,jsonify,redirect
from flask import session
from flask_sqlalchemy import SQLAlchemy
import pickle
import numpy as np

app = Flask(__name__)
model=pickle.load(open('model.pkl','rb'))
app.secret_key = "supersecretkey"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/vita'
db = SQLAlchemy(app)

class vitalog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    password = db.Column(db.String(100))
    email_id = db.Column(db.String(100))
    py = db.Column(db.Integer,default=0)
    pyc = db.Column(db.Integer,default=0)
    os = db.Column(db.Integer,default=0)
    osc = db.Column(db.Integer,default=0)
    dbms = db.Column(db.Integer,default=0)
    dbmsc = db.Column(db.Integer,default=0)
    cn = db.Column(db.Integer,default=0)
    cnc = db.Column(db.Integer,default=0)

@app.route("/")
def home():
    return render_template('landing.html')

@app.route('/login',methods = ['POST', 'GET'])
def login():
   msg = ''
   if 'user' in session and session['user']=='admin':
        return render_template('afterlogin.html')

   if request.method=='POST':
      email=request.form.get('email_id')
      userpass=request.form.get('password')
      log=vitalog.query.filter_by(email_id=email,password=userpass).first()
      if log is not None:
         session['email_id']=email
         msg='Logged in successfully !!'
         return render_template('afterlogin.html',msg=msg)

   return render_template('index.html')


@app.route('/register',methods = ['POST','GET'])
def register():
   if(request.method=='POST'):
      username = request.form.get('username')
      password = request.form.get('password')
      email_id = request.form.get('email_id')
      entry=vitalog(username=username,password=password,email_id=email_id)
      db.session.add(entry)
      db.session.commit()

   return render_template('index.html')

@app.route('/resume')
def resume():
   return render_template('resume.html')

@app.route('/job')
def job():
    return render_template('job.html')

@app.route('/predict',methods=["POST"])
def predict():

    feature=[int(x) for x in request.form.values()]
    feature_final=[np.array(feature)]
    prediction=model.predict(feature_final)
    output = prediction[0]
    sb = [" be placed" if output == 1 else "not be placed"]
    s=""
    if(output==1):
        s="placed"
        return render_template('index1.html',prediction_text='Congratulations! You have high chances of getting  {}'.format(s))
    else:
        s="not be placed"
        return render_template('index2.html',prediction_text='Work hard! You may  {}'.format(s))


@app.route("/sub")
def sub():
    return render_template('sub.html')
@app.route("/chat")
def chat():
    return render_template('chat.html')
@app.route("/python",methods = ['POST', 'GET'])
def python():
    return render_template('python.html')
@app.route("/dbms")
def dbms():
    return render_template('dbms.html')
@app.route("/os")
def os():
    return render_template('os.html')
@app.route("/cn")
def cn():
    return render_template('cn.html')

@app.route("/pscore",methods = ['POST', 'GET'])
def pscore():
    if request.method == "POST":
        s = request.get_json()
        user = vitalog.query.filter_by(email_id=session['email_id']).first()
        user.pyc+=1
        user.py+=int(s)
        print(s)
        user.py//=user.pyc
        db.session.commit()
        
    return render_template('python.html')

@app.route("/oscore",methods = ['POST', 'GET'])
def oscore():
    if request.method == "POST":
        s = request.get_json()
        user = vitalog.query.filter_by(email_id=session['email_id']).first()
        user.osc+=1
        user.os+=int(s)
        user.os//=user.osc
        db.session.commit()
        # entry=vitalog(username=username,password=password,email_id=email_id)
        # db.session.add(entry)
        # db.session.commit()
        
    return render_template('os.html')

@app.route("/dscore",methods = ['POST', 'GET'])
def dscore():
    if request.method == "POST":
        s = request.get_json()
        user = vitalog.query.filter_by(email_id=session['email_id']).first()
        user.dbmsc+=1
        user.dbms+=int(s)
        user.dbms//=user.dbmsc
        db.session.commit()
        # entry=vitalog(username=username,password=password,email_id=email_id)
        # db.session.add(entry)
        # db.session.commit()
        
    return render_template('dbms.html')

@app.route("/cscore",methods = ['POST', 'GET'])
def cscore():
    if request.method == "POST":
        s = request.get_json()
        user = vitalog.query.filter_by(email_id=session['email_id']).first()
        user.cnc+=1
        user.cn+=int(s)
        user.cn//=user.cnc
        db.session.commit()
        # entry=vitalog(username=username,password=password,email_id=email_id)
        # db.session.add(entry)
        # db.session.commit()
        
    return render_template('cn.html')

@app.route("/dashboard")
def dash():
    user=vitalog.query.filter_by(email_id=session['email_id']).first()
    p1=user.py
    o1=user.os
    d1=user.dbms
    c1=user.cn
    if(p1<=o1 and p1<=d1 and p1<=c1):
        return render_template('py1.html',useri=user)
    elif(o1<=p1 and o1<=d1 and o1<=c1):
        return render_template('os1.html',useri=user)
    elif(d1<=p1 and d1<=o1 and d1<=c1):
        return render_template('db1.html',useri=user)
    elif(c1<=p1 and c1<=d1 and c1<=o1):
        return render_template('cn1.html',useri=user)

def logout():
    session.pop('email_id')
    return redirect('/login')

app.run(debug=True)