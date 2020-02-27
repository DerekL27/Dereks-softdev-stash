from bson import json_util
from pymongo import MongoClient
client = MongoClient()
db = client.test
collection = db.info

