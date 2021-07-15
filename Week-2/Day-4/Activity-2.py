#!/usr/bin/env python3
import json
with open("user_info.json") as incoming:
	user_data = json.load(incoming)
	
for i in range(0, len(user_data)):
	print(f"The user {user_data[i]['name']} is {user_data[i]['age']} years old")