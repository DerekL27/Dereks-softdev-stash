#Derek Leung + Connor Oh
#SoftDev1 PD 9
#K24
#2019-11-13

from flask import *
import urllib.request as urllib2
import json

app = Flask(__name__)
@app.route("/")
def something():
    thing = urllib2.urlopen("https://api.nasa.gov/planetary/apod?api_key=aSE5zbVk8IZbPt51EYgzq2itWhMyusUCKlu4KfQc")
    thing2 = thing.read()
    thing3 = json.loads(thing2)
    return render_template('bruh.html', picture = thing3['url'], words = thing3['explanation'])


if __name__ == "__main__":
  app.debug = True
  app.run()
