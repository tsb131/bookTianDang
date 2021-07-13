from flask import Flask,request,make_response
from flask_cors import *
import json
import sqlite3
import time
import smtplib
import random
import math
import os
from email.mime.text import MIMEText
from email.utils import formataddr

app = Flask(__name__)

CORS(app,supports_credentials=True)

@app.route('/')
def index():
    return 'Hello,world'


@app.route('/register/confirm',methods=['POST'])
def send_confirm():
    #print(2)
    #ata=request.get_json()
    #print(request.json)
   # return 'hello'
    phone_number=request.json.get('phone_number')
    resp=make_response(json.dumps({'confirm':'112345'}),200)
    return resp


@app.route('/register/register',methods=['POST'])
def register():
    #print(1)
    phone_number = request.json.get('phone_number')
    password = request.json.get('password')
    account=request.json.get('account')
    email=request.json.get('email')

    conn=sqlite3.connect('bookTianDang.db')

    try:
        conn.execute('''create table users
        ( phone_number char(11),
        password varchar(20),
        account varchar(20),
        email varchar(30));
        ''')
    except:
        pass
    cursor=conn.execute("select * from users where account='{}'".format(account))
    result=cursor.fetchall()
    conn.commit()
    print(result)
    if len(result):
        resp=make_response(json.dumps({'message':'该账号名称已被使用,请重新输入！'}),200)
        return resp
    cursor=conn.execute("select * from users where phone_number='{}'".format(phone_number))
    result=cursor.fetchall()
    conn.commit()
    if len(result):
        resp=make_response(json.dumps({'message':'手机号已被注册，请重新输入或者登录'}),200)
        return resp
    conn.execute("insert into users values('{}','{}','{}','{}')".format(phone_number,password,account,email))
    #cursor=conn.execute("select * from users")
    #result=cursor.fetchall()
    #print(result)
    conn.commit()
    conn.close()
    resp=make_response(json.dumps({'message':'success'}),200)
    return resp

@app.route('/load/load',methods=['POST'])
def load():
    phone_number = request.json.get('phone_number')
    password = request.json.get('password')
    conn=sqlite3.connect('bookTianDang.db')
    #cursor=conn.execute("select * from users")
    cursor=conn.execute("select phone_number,password from users where (phone_number='{}' or account='{}' or email='{}')and password='{}' ".format(phone_number,phone_number,phone_number,password))
    result=cursor.fetchall()
   # print(result)
    conn.commit()
    conn.close()
    if len(result):
        resp=make_response(json.dumps({'message':'success'}),200)
    else:
        resp=make_response(json.dumps({'message':'您输入的手机号或者邮箱或者账号名称或密码有误，请重新输入！'}),200)
    return resp

@app.route('/login/Code',methods=['POST'])
def Code():
   # print(request.data)
    code=request.json.get('str')
    conn=sqlite3.connect('bookTianDang.db')
    try:
        conn.execute('''create table Code(
                     code varchar(26),
                     account varchar(30)
        );
        ''')
    except:
        pass
    conn.commit()
    #conn.execute("insert into Code values('{}','{}')".format(code,''))
    ticks=time.time()
    while time.time()-ticks<=180:
        cursor=conn.execute("select * from Code where code='{}'".format(code))
        result=cursor.fetchall()
        conn.commit()

        if len(result):
            resp=make_response(json.dumps({'message':'success','account':result[0][1]}),200)
            conn.close()
            return resp
    conn.close()
    resp=make_response(json.dumps({'message':'由于3分钟没有客户端扫描本二维码，该二维码失效'}),200)
    return resp

@app.route('/login/Code_confirm',methods=['POST'])
def confirm():
    account_info=request.json.get('account_info')
    str=request.json.get('str')
    conn=sqlite3.connect('bookTianDang')
    conn.execute("insert into Code values('{}','{}')".format(account_info,str))
    conn.commit()
    conn.close()
    resp=make_response(json.dumps({'message':'登录成功！'}),200)
    return resp

@app.route('/login/email_code',methods=['POST'])
def send_code():
    #print(request)
    email=request.json.get('email')

    str1=""
    while len(str1)<6:
        str1=str1+str(math.floor(random.random()*10))
    print(str1)
    msg=MIMEText('亲爱的用户您好，您正在修改密码，验证码为：{},如果不是您正在操作，请无视本条信息，谢谢！'.format(str1),"plain","utf-8")
    msg['From']=formataddr(['bookTianDang','tsb13187246069@qq.com'])
    msg['To']=formataddr(['亲爱的用户',email])
    msg['Subject']='验证码'
    server = smtplib.SMTP_SSL("smtp.qq.com", 465)
    server.login('tsb13187246069@qq.com', 'sfemfpffprjacege')
    try:
        server.sendmail('tsb13187246069@qq.com', email, msg.as_string())
        server.quit()
    except:
        resp=make_response(json.dumps({'message':'发送失败，请重新请求发送！'}),200)
        return resp

    resp=make_response(json.dumps({'message':'success','confirm_code':str1}),200)
    return resp

@app.route('/login/change_password',methods=['POST'])
def change_password():
    email=request.json.get('email')
    password=request.json.get('password')
    conn=sqlite3.connect('bookTianDang.db')
    try:
        conn.execute("update users set password='{}'where email='{}'")
        conn.commit()
        conn.close()
        resp=make_response(json.dumps({'message':'success'}),200)
        return resp
    except:
        resp=make_resposne(json.dumps({'message':'修改密码失败，请重新尝试！'},200))
        return resp

@app.route('/book/bookself',methods=['POST'])
def send_bookself():
    account_info=request.json.get('account_info')
    conn=sqlite3.connect('bookTianDang.db')

    datas=[]
    cursor=conn.execute("select book_id,book_pointer from bookself where account_info='{}'".format(account_info))
    result=cursor.fetchall()
    for item in result:
        data={}
        data['id']=item[0]
        data['pointer']=item[1]
        cursor=conn.execute("select * from books where book_id='{}'".format(item[0]))
        result=cursor.fetchall()[0]

        data['title']=result[1]
        data['cover']=result[4]
        datas.append(data)
    resp=make_response(json.dumps({'message':'success','info':datas}),200)
    return resp

@app.route('/book/book_info',methods=['POST'])
def book_info():
    book_id=request.json.get('book_id')
    conn=sqlite3.connect("bookTianDang.db")
    cursor=conn.execute("select * from books where book_id='{}'".format(book_id))
    result=cursor.fetchall()[0]
    resp=make_response(json.dumps({'message':'success','book_title':result[1],'book_author':result[2],'book_description':result[5],'book_address':result[3]}),200)
    return resp

@app.route('/read/read',methods=['POST'])
def send_charpter():
    book_id=request.json.get('book_id')
    #print(book_id)
    book_pointer=int(request.json.get('book_pointer'))
    conn=sqlite3.connect('bookTianDang.db')
    cursor=conn.execute("select * from books where book_id='{}'".format(book_id))
    result=cursor.fetchall()[0]
    book_title=result[1]
    book_address=result[3]
    current=os.getcwd()
    dirs=os.listdir(book_address)
    dirs.sort(key=lambda fn:os.path.getmtime(book_address+'\\'+fn))
    os.chdir(book_address)
    f=open(dirs[book_pointer],"r",encoding="utf-8")
    book_content=f.read()
    f.close()
    page_length=len(dirs)
    os.chdir(current)
    resp=make_response(json.dumps({'book_title':book_title,'book_content':book_content,'page_length':page_length}),200)
    return resp
    
if __name__ == '__main__':
    #print(3)
    app.run()
