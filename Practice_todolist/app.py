# app.py
from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'

# Dummy user authentication (accept any username/password combination)
def authenticate_user(username, password):
    return True

@app.route('/')
def index():
    if 'username' in session:
        return render_template('index.html', tasks=[])
    return redirect(url_for('login'))

@app.route('/add', methods=['POST'])
def add_task():
    if 'username' in session:
        task = request.form['task']
        # Add task processing
        return redirect(url_for('index'))
    return redirect(url_for('login'))

@app.route('/complete/<int:task_id>')
def complete_task(task_id):
    if 'username' in session:
        # Complete task processing
        return redirect(url_for('index'))
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if authenticate_user(username, password):
            session['username'] = username
            return redirect(url_for('index'))
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
