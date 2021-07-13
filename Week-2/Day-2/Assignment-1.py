#!/usr/bin/env python3
shopping_lists = []
from list_maker import Listmaker, GroceryItem

while True:
	i=0
	print("\n\nEnter your Choice or enter Q to quit")
	print("1* Create a new shopping list")
	print("2* Add items to a list")
	print("3* Remove items from the app")
	print("4* View your current lists\n")
	menu_input=input("Please enter your choice: \n")
	
	
	if menu_input.upper() == "Q":
		break
	
	
	elif menu_input == "1":
		print("\n\nWhere would you like to shop at? ")
		store_name = input("")
		print("Where is this store located? ")
		location = input("")
		shopping_lists.append(Listmaker(store_name, location))
		
	elif menu_input == "2":
		for i in range(0, len(shopping_lists)):
			if len(shopping_lists) == 0:
				break
			else:
				print(f"{i}* {shopping_lists[i].store_name}")
			try:
				list_number = int(input("\nWhich store would you like to add an item to? "))
				item_to_add = GroceryItem()
				print("What would you like to add to the list?")
				item_to_add.title = input("")
				try:
					print("How much does it cost?")
					item_to_add.price = float(input(""))
					print(f"How much {item_to_add.title} do you want to buy?")
					item_to_add.quantity = input("")
				except:
					print("These are prices and quantity, they need to be numbers, not letters")
				Listmaker.add_item(shopping_lists[list_number], item_to_add)
			except ValueError:
				print("You didn't pick a store number")
				break
		
	elif menu_input == "3":
		try:
			if len(shopping_lists) == 0:
				break
			else:
				delete_choice = input("Do you want to want to delete a store or an item? ")
				for i in range(0, len(shopping_lists)):
					print(f"{i}* {shopping_lists[i].store_name}")
				
				if delete_choice.lower() == "store":
					store_choice = int(input("Which store would you like to remove? "))
					shopping_lists.pop(store_choice)
				elif delete_choice.lower() == "item":
					list_number = int(input("\nWhich store would you like to remove an item from? "))
					for item_index in range(0, len(shopping_lists[list_number].item_list)):
						item = shopping_lists[list_number].item_list[item_index].title
						print(f"{item_index}* {item}")
						item_number = int(input("\nWhich item would you like to remove? "))
						removed_item = shopping_lists[list_number].item_list.pop(item_number)
						print(f"{removed_item.title} removed!")
						print(f"{item_index}* {item}")
		except:
			print("You didn't enter the right input")
			exit()
		
		
		
	elif menu_input == "4":
		Listmaker.view_list(shopping_lists)
		
	else:
		print("Sorry that wasn't a valid choice")