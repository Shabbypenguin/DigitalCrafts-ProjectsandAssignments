#!/usr/bin/env python3
list_index = 0

class List_Maker:
	def __init__(self, location, name_of_list):
		self.location = location
		self.title = name_of_list
		self.items = []
		
while True:
	print("Enter your Choice or enter Q to quit")
	print("1* Create a new shopping list")
	print("2* Add items to a list")
	print("3* View your current lists")
	menu_input=input("Please enter your choice: ")
	if menu_input.upper() == "Q":
		break
	elif menu_input == "1":
		print("Where would you like to shop at?")
		location = input("")
		print("What would you like to call this list?")
		list_tite = input("")
		shopping_list = List_Maker(location, list_tite)
		list_index+=1
		print(shopping_list)
	elif menu_input == "2":
		print("temp")
	else:
		print("Sorry that wasn't a valid choice")