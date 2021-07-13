#!/usr/bin/env python3

class Listmaker:
	def __init__(self, store_name, location):
		self.store_name = store_name
		self.location = location
		self.item_list = []
		
	def view_list(shopping_lists):
		for store in shopping_lists:
			print(f"\n- {store.store_name} located at {store.location}")
			for item_index in range(0, len(store.item_list)):
				item = store.item_list[item_index].title
				print(f"* {item}")
				
	def add_item(self, item):
		self.item_list.append(item)
		
class GroceryItem:
	def __init__(self):
		self.title = ""
		self.price = 0
		self.quantity = 0
		