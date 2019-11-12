#Derek Leung + Connor Oh
#SoftDev1 PD 9
#K24
#2019-11-13

from flask import *
import json 

app = Flask(__name__)
@app.route("/")
def something():
    return render_template('bruh.html')


if __name__ == "__main__":
  app.debug = True
  app.run()
