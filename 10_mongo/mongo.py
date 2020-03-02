#Derek Leung, Alex Thompson
#Softdeb pd 2
#K10 -- Import/Export Bank
#2020-03-04

import json
from pymongo import MongoClient

client = MongoClient()
db = client.teamName
collection = db.events
if(collection.count() == 0):
    file = open("englishEvents.json", "r")
    content = file.readlines()
    for line in content:
        collection.insert_one(loads(line))

def findBetweenYears()
