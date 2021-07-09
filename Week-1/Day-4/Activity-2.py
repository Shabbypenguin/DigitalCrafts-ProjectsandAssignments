#!/usr/bin/env python3
database = {}
a = True
i = 0
while a == True:
	first_name_input = input("Please type your first name: ")
	last_name_input = input("Please type in your last name: ")
	database["First Name"] = first_name_input
	database["Last Name"] = last_name_input
	database["Addresses"] = {}

	while a == True:
		address_input = input("Please enter a known address or enter Q to quit: ")
		if address_input.upper() == "Q":
			a = False
			break
		else:
			database["Addresses"][i] = address_input
			i += 1
			
print(database)