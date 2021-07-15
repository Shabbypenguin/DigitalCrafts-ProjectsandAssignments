#!/usr/bin/env python3
from datetime import datetime

class PoolTables:
	def __init__(self):
		self.table_number = 0
		self.occupied = False
		self.start_time = datetime.now().strftime("%H:%M")
		self.end_time = datetime.now().strftime("%H:%M")
		
	def occupy_table(self, table_number):
		self[table_number]['table_number'] = table_number
		self[table_number]['occupied']= True
		self[table_number]['start_time'] = datetime.now().strftime("%H:%M")
		
	def clear_table(self, table_number):
		self[table_number]['table_number'] = table_number
		self[table_number]['occupied']= False
		self[table_number]['end_time'] = datetime.now().strftime("%H:%M")
		
	def calculate_cost(self, table_number):
		time_delta = datetime.strptime(self[table_number]['end_time'], "%H:%M") - datetime.strptime(self[table_number]['start_time'], "%H:%M")
		time_spent = (time_delta.total_seconds()/60)
		return int(time_spent)
	
	def available_tables(self, table_number):
		if self[table_number]['occupied']==False:
			print(f"Table {table_number} is available!")
			return 	False
		elif self[table_number]['occupied'] == True:
			print(f"Sorry, table {table_number}  is taken!")
			return True