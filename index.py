from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('inicio.html')

@app.route('/user')
def user():
    return render_template('user.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

if __name__=='__main__':
    app.run(debug=True)

    