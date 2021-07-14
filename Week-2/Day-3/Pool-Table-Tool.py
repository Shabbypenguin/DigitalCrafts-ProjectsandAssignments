#!/usr/bin/env python3
from datetime import datetime
import json
import os.path
from Pool_Classes import PoolTables
file_name = "Pool_tables.json"
with open(file_name) as json_in:
	pool_tables = json.load(json_in)
	
while True:
	print("\nHello to Bonanza Billards!")
	print("Would you like reserve a table, or close out your play time?")
	print("1* Claim a table")
	print("2* See what tables are available")
	print("3* Close out a table")
	print("Q* Quit this application")
	menu_choice = input("\n")
	
	
	if menu_choice.upper() == "Q":
		with open(file_name, 'w') as json_output:
			json.dump(pool_tables, json_output, indent=2)
		exit()
	elif menu_choice == "1":
		print("Which of our 12 pool tables would you like to reserve? ")
		table_choice = int(input(""))
		if PoolTables.available_tables(pool_tables, table_choice) == False:
			PoolTables.occupy_table(pool_tables, table_choice)
			print("Enjoy your time!")
	elif menu_choice == "2":
		for i in range (0,12):
			PoolTables.available_tables(pool_tables, i)
		print("\n")
	elif menu_choice == "3":
		print("Which table where you on? ")
		table_choice = int(input(""))
		PoolTables.clear_table(pool_tables, table_choice)
		time_spent = PoolTables.calculate_cost(pool_tables, table_choice)
		print(f"You spent {time_spent} minutes at {table_choice}")
	
	
		