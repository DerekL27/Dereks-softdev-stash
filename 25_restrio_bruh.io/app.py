#Derek Leung + Connor Oh
#SoftDev1 PD 9
#K25
#2019-11-14

from flask import *
import urllib.request as urllib2
import json

text1 = "Hello World!"

app = Flask(__name__)
@app.route("/1")
def something():
    thing = urllib2.urlopen("https://www.purgomalum.com/service/json?text={}".format(text1.replace(' ','_')))
    thing2 = thing.read()
    thing3 = json.loads(thing2)
    return render_template('bruh1.html', text = thing3["result"])

@app.route("/input")
def authenticate():
    global text1
    text1 = request.args["stuff"]
    return redirect("/1")


if __name__ == "__main__":
  app.debug = True
  app.run()
