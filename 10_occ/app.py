#Derek Leung
#SoftDev1 pd9
#K10 -- Jinja Tuning
#2019-09-21

from flask import Flask
from flask import render_template
from flask import current_app
import csv
import random

app = Flask(__name__)
coll = [1,2,3,4,7,6,8]
occupations = {}
def read_input():
    with open('occupations.csv', mode='r') as file:
        reader = csv.DictReader(file,delimiter=',')
        for row in reader:
            occupations.update({row['Job Class']: float(row['Percentage'])})
def get_random_occupation():
    i = occupations["Total"];
    for j in occupations:
        if random.random() < occupations[j]/i:
            return j;
        i-= occupations[j];


#######  HOME PAGE #################################
@app.route("/")
def home_dir():
    return current_app.send_static_file('main.html')

######## LOAD CSV #################################



@app.route("/occupyflaskst")
def occupyflaskst():
    print("loading occupyflaskst");
    read_input();
    return render_template(
    'occupyflaskst.html',
    rand = get_random_occupation(),
    collection = occupations
    )

if __name__ == "__main__":
  app.debug = True
  app.run()
