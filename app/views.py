from flask import Blueprint, render_template, request, redirect, url_for
from .models import Professor, User, Student, Author, School_Administrator
from . import database
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user

views = Blueprint('views', __name__)


@views.route('/administratorHome.html')
@login_required
def admin_home():
    return render_template('administratorHome.html')

@views.route('/authorHome.html')
@login_required
def author_home():
    return render_template('authorHome.html')

@views.route('/professorHome.html')
@login_required
def professor_home():
    return render_template('professorHome.html')

@views.route('/studentHome.html')
@login_required
def student_home():
    return render_template('studentHome.html')

@views.route('/administratorProfile.html', methods=['GET', 'POST'])
@login_required
def admin_profile():
    if request.method == 'POST':
        sch_id = current_user.get_id()
        firstname = request.form.get("firstname")
        lastname = request.form.get('lastname')
        email = request.form.get('email')

        new_admin = School_Administrator(
            sch_id=sch_id, first_name=firstname, last_name=lastname, email=email)
        database.session.add(new_admin)
        database.session.commit()

    return render_template('administratorProfile.html')


@views.route('/authorProfile.html', methods=['GET', 'POST'])
@login_required
def author_profile():
    if request.method == 'POST':
        prof_id = current_user.get_id()
        firstname = request.form.get("firstname")
        lastname = request.form.get('lastname')
        biography = request.form.get('biography')
        email = request.form.get('email')
        image = request.form.get('fileToUpload')

        new_auth = Author(author_id=prof_id, first_name=firstname,
                          last_name=lastname, biography=biography, email=email, image=image)
        database.session.add(new_auth)
        database.session.commit()

    return render_template('authorProfile.html')


@views.route('/professorProfile.html', methods=['GET', 'POST'])
@login_required
def professor_profile():
    if request.method == 'POST':
        prof_id = current_user.get_id()
        firstname = request.form.get("firstname")
        lastname = request.form.get('lastname')
        biography = request.form.get('biography')
        email = request.form.get('email')
        image = request.form.get('fileToUpload')

        new_prof = Professor(prof_id=prof_id, first_name=firstname,
                             last_name=lastname, biography=biography, email=email, image=image)
        database.session.add(new_prof)
        database.session.commit()

    return render_template('professorProfile.html')


@views.route('/studentProfile.html', methods=['GET', 'POST'])
@login_required
def student_profile():
    if request.method == 'POST':
        stud_id = current_user.get_id()
        firstname = request.form.get("firstname")
        lastname = request.form.get('lastname')
        major = request.form.get('major')
        email = request.form.get('email')
        gradeyear = request.form.get('gradeyear')

        new_stud = Student(stud_id=stud_id, first_name=firstname,
                           last_name=lastname, major=major, email=email, grade_year=gradeyear)
        database.session.add(new_stud)
        database.session.commit()

    return render_template('studentProfile.html')


@views.route('/', methods=['GET', 'POST'])
@views.route('/index.html', methods=['GET', 'POST'])
def login():
    logout_user()
    if request.method == 'POST':
        username = request.form.get('username')
        pwd = request.form.get('pwd')

        user = User.query.filter_by(username=username).first()

        if user:
            if check_password_hash(user.pwd, pwd):
                print("SUCCESS")
                login_user(user, remember=True)
                if user.role == "student":
                    return redirect(url_for('views.student_home'))
                if user.role == "professor":
                    return redirect(url_for('views.professor_home'))
                if user.role == "author":
                    return redirect(url_for('views.author_home'))
                else:
                    return redirect(url_for('views.admin_home'))
            else:
                print("FAILED TO LOGIN")
        else:
            print("FAILURE")

    return render_template('index.html')


@views.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('views.login'))


@views.route('/signUp.html', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        username = request.form.get('username')
        pwd = request.form.get('pwd')
        role_type = request.form.get('role_type')

        user = User.query.filter_by(username=username).first()
        if user:
            print("USERNAME EXISTS")

        else:
            new_user = User(username=username, pwd=generate_password_hash(
                pwd, method='sha256'), role=role_type)
            database.session.add(new_user)
            database.session.commit()
            login_user(new_user, remember=True)
            if user.role == "student":
                return redirect(url_for('views.student_profile'))
            if user.role == "professor":
                return redirect(url_for('views.professor_profile'))
            if user.role == "author":
                return redirect(url_for('views.author_profile'))
            else:
                return redirect(url_for('views.admin_profile'))

    return render_template('signUp.html')
