#
#
#
#

from flask import Flask, render_template
app = Flask(__name__)

if __name__ == "__main__":
  app.debug = True
  app.run()

@app.route("/")
def hello_world():
    return "No hablo queso!"

coll = [0,1,1,2,3,5,8]
coll2= []

@app.route("/my_foist_template")
def test_tmplt():
    return render_template(
    'thing.html',
    foo = "fooooo",
    collection = coll
    )

@app.route("/occupyflaskst")
def test_tmplt2():
    return render_template(
    'thing2.html',
    foo = "fooooo",
    collection = coll
    )
