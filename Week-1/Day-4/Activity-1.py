#!/usr/bin/env python3
i=0
n=0
first_name_input=""
names_of_students={}
while True:
	print("Enter your name or enter Q to quit")
	first_name_input=input("Please enter your first name: ")
	if first_name_input.upper() == "Q":
		break
	else:
		last_name_input=input("Please enter your last name: ")
		names_of_students["Student"+str(i)]= {}
		names_of_students["Student"+str(i)]['First Name'] = first_name_input
		names_of_students["Student"+str(i)]['Last Name'] = last_name_input
		i+=1

print(names_of_students)