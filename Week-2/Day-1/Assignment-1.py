#!/usr/bin/env python3
list_index = 0
lists_of_lists = []


class Listmaker:
	def __init__(self, store_name, location):
		self.store_name = store_name
		self.location = location
		self.item_list = []
		
	def view_list(list_index, lists_of_lists, i):
		for store in range(0, len(lists_of_lists)):
			print("What list would you like to view?\n\n")
			print(f"{i} {lists_of_lists[i].store_name} located at {lists_of_lists[i].location}")
		
		if list_index == 0:
			print("No lists found")
		else:
			print("What list would you like to view?\n\n")
			while i < list_index:
				print(f"{i} {lists_of_lists[i].store_name} located at {lists_of_lists[i].location}")
				i+=1
			list_choice_view = int(input())
			if list_choice_view <= list_index:
				for n in lists_of_lists[list_choice_view].item_list:
					print(f"You need to buy {n.quantity} of {n.title} priced at {n.price} ")
				return list_choice_view
			else:
				print("Sorry that wasn't a valid choice, try again")
				return False
			
	def add_item(lists_of_lists, output, item):
		lists_of_lists[output].item_list.append(item)
		
class GroceryItem:
	def __init__(self):
		self.title = ""
		self.price = 0
		self.quantity = 0
		
		
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
		print("\n\nWhere would you like to shop at? ")
		store_name = input("")
		print("Where is this store located? ")
		location = input("")
		lists_of_lists.append(Listmaker(store_name, location))
		print(lists_of_lists[list_index].store_name)
		list_index+=1
		
		
	elif menu_input == "2":
		output = Listmaker.view_list(list_index, lists_of_lists, i)
		if output >= list_index:
			break
		item_to_add = GroceryItem()
		print("What would you like to add to the list?")
		item_to_add.title = input("")
		print("How much does it cost?")
		item_to_add.price = float(input(""))
		print(f"How much {item_to_add.title} do you want to buy?")
		item_to_add.quantity = input("")
		Listmaker.add_item(lists_of_lists, output, item_to_add)
		
		
	elif menu_input == "3":
		Listmaker.view_list(list_index, lists_of_lists, i)
		
	else:
		print("Sorry that wasn't a valid choice")