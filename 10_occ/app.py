#
#
#
#

from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "No hablo queso!"

coll = [0,1,1,2,3,5,8]

@app.route("/my_foist_template")
def test_tmplt():
    return render_template(
    'thing.html',
    foo = "fooooo",
    collection = coll
    )
