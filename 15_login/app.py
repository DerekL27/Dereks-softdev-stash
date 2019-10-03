#Derek Leung and Lauren Pehlivanian
#SoftDev1 pd 9
#K#15 -- Do I Know You?
#2019-10-04

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def something():
    return redirect("/login")

@app.route("/login")
def something2():
    # print(url_for("something2"))
    # print(url_for("something"))
    # print(url_for("something3"))
    # print(url_for("something4"))
    return render_template("login.html")

@app.route("/error")
def something3():
    return render_template("error.html")

@app.route("/welcome")
def something4():
    return render_template("welcome.html")

username = "hi"

@app.route("/auth")
def something5():
    print(request.headers)
    print(request.args)
    if (request.args['user']==username):
        return render_template("welcome.html")
    return render_template("error.html")

if __name__ == "__main__":
    app.debug = True;
    app.run()
