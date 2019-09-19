#Derek Leung
#Softdev pd 9
#K08 -- Lemme Flask You Sump'n
#2019-09/18

from flask import Flask
app = Flask(__name__)

@app.route("/")

def hello_world():
  #print(__name__)
  print("bruh")
  return "No hablo queso!"

@app.route("/2")

def hello_world2():
    print("bruh2")
    return "it was so good they had to make a second one"

@app.route("/3")

def hello_world3():
    print("bruh3")
    return "now it's a trilogy"
    
if __name__ == "__main__":
  app.debug = True
  app.run()
