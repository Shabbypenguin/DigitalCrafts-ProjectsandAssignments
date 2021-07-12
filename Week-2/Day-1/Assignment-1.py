#!/usr/bin/env python3
list_index = 0
lists_of_lists = {}
class List_Maker:
	def __init__(self, location, name_of_list):
		self.location = location
		self.title = name_of_list
		self.items = []
		
def view_list(list_index, lists_of_lists, i):
	if list_index == 0:
		print("No lists found")
	else:
		print("What list would you like to view?\n\n")
		while i < list_index:
			print(f"{i} {lists_of_lists[i].location}")
			i+=1
		list_choice_view = int(input())
		if list_choice_view <= list_index:
			print(lists_of_lists[list_choice_view].items)
			return list_choice_view
		else:
			print("Sorry that wasn't a valid choice, try again")
			return False
		
while True:
	i=0
	print("\n\nEnter your Choice or enter Q to quit")
	print("1* Create a new shopping list")
	print("2* Add items to a list")
	print("3* View your current lists\n")
	menu_input=input("Please enter your choice: \n")
	if menu_input.upper() == "Q":
		break
	elif menu_input == "1":
		print("\n\nWhere would you like to shop at?")
		location = input("")
		print("What would you like to call this list?")
		list_tite = input("")
		shopping_list = List_Maker(location, list_tite)
		lists_of_lists[list_index] = shopping_list
		print(lists_of_lists[list_index].location)
		list_index+=1
	elif menu_input == "2":
		output = view_list(list_index, lists_of_lists, i)
		if output >= list_index:
			break
		print("What would you like to add to the list?")
		add_items = input("")
		lists_of_lists[output].items.append(add_items)
	elif menu_input == "3":
		view_list(list_index, lists_of_lists, i)
	else:
		print("Sorry that wasn't a valid choice")