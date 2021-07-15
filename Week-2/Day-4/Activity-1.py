#!/usr/bin/env python3

import json
users = []
while True:
	print("Please answer the following questions, or enter q to quit.")
	print("What is your name?")
	user_name =input("")
	if user_name.lower() == "q":
		with open("user_info.json", "w") as file:
			json.dump(users, file, indent=2)
		exit()
	print("What is your age")
	try:
		user_age = int(input(""))
	except ValueError:
		print("Whoops, age is a number, please try again.")
	user_info = {"name" : user_name, "age" : user_age }
	users.append(user_info)