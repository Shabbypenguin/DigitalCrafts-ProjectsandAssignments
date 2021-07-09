#!/usr/bin/env python3
database={}
a = True
i = 0
x = 0
variable = []
needed_info=["Name", "Email", "Street", "Suite Number", "City", " Zipcode", "Latitude", "Longitude", "Phone number", "Website", "Company name", "Company catchphrase", "Company bs"]
while a == True:
	print("Enter Q to quit.")
	for x in range(len(needed_info)):
		variable.append(input(f"Please type your {needed_info[x]}: "))
		if variable[x].upper() == "Q":
			a = False
			break
		else:
			x+=1
			
	if a == True:		
		database[i]={}
		database[i]["id"] = i
		database[i]["name"] = variable[0]
		database[i]["email"] = variable[1]
		database[i]["address"] = {}
		database[i]["address"]["street"] = variable[2]
		database[i]["address"]["suite"] = variable[3]
		database[i]["address"]["city"] = variable[4]
		database[i]["address"]["zipcode"] = variable[5]
		database[i]["address"]["geo"] = {}
		database[i]["address"]["geo"]["lat"] = variable[6]
		database[i]["address"]["geo"]["lng"]= variable[7]
		database[i]["phone"] = variable[8]
		database[i]["website"] = variable[9]
		database[i]["company"] = {}
		database[i]["company"]["name"] = variable[10]
		database[i]["company"]["catchPhrase"] = variable[11]
		database[i]["company"]["bs"] = variable[12]
		i += 1
	variable.clear()
	print(database)