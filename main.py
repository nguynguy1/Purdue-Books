from flask import Flask, render_template, request
from flask_mysqldb import MySQL
from app import create_app

app = create_app()

app.secret_key = 'Purdue Books Secret Key'

if __name__ == '__main__':
    app.run(debug=True)

# Configure db
# db = yaml.load(open('db.yaml'))
# app.config['MYSQL_HOST'] = db['mysql_host']
# app.config['MYSQL_USER'] = db['mysql_user']
# app.config['MYSQL_PASSWORD'] = db['mysql_password']
# app.config['MYSQL_DB'] = db['mysql_db']

# mysql = MySQL(app)


# @app.route('/')
# @app.route('/index.html')
# def index():
#     return render_template('index.html')


# @app.route('/signUp.html', methods=['GET', 'POST'])
# def signUp():
#     if request.method == 'POST':
#         # Fetch form data
#         userDetails = request.form
#         username = userDetails['username']
#         pwd = userDetails['pwd']
#         role_type = userDetails['role_type']
#         cursor = mysql.connection.cursor()
#         cursor.execute("INSERT INTO User(username, pwd, role) VALUES(%s, %s)", (username, pwd, role_type,))
#         mysql.connection.commit()
#         cursor.close()
#         return 'Success'

#     return render_template('signUp.html')