from bson import json_util
from pymongo import MongoClient
client = MongoClient()
db = client.test
collection = db.restaurants
if(collection.count() == 0):
    file = open('primer-dataset.json','r')
    bruh = file.readlines()
	for line in bruh:
        collection.insert_one(loads(line))

def getBorough(borough):
    bruh = collection.find({"borough": borough})
    print(bruh)
