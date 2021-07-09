#!/usr/bin/env python3
tasks = {}
task_index = 0
menu_choice =""

def main_menu(menu_choice, task_index):
	if (menu_choice == "1"):
		tasks[task_index] = {}
		task_index = add_menu(task_index)
		main_list(task_index)
	elif menu_choice == "2":
		task_index = delete_menu(task_index)
		main_list(task_index)
	elif menu_choice == "3":
		view_tasks_menu(task_index)
	elif menu_choice.upper() == "Q":
		exit()

def add_menu(task_index):
	tasks[task_index]["Title"] = input("\n\nWhat task would you like to add? ")
	
	task_priority = input("What priority should this task be? ")
	if task_priority.lower() == "high":
		tasks[task_index]["priority"] = "High"
	elif task_priority.lower() == "medium":
		tasks[task_index]["priority"] = "Medium"
	else:
		tasks[task_index]["priority"] = "Low"
	task_index += 1
	return task_index
	
def delete_menu(task_index):
	print("\n\nHere is all your current tasks, which one do you wish to delete?")
	i=0
	for i in range(0, task_index):
		print(str(i) +") " + tasks[i]["Title"] + " which is a " + tasks[i]["priority"] + " priority task")
		i+=1
	delete_key = int(input())
	removed_task = tasks[delete_key]["Title"]
	tasks.pop(delete_key)
	task_index -= 1
	print(f"Task {removed_task} was successfully removed!")
	input("Press Enter to continue.")
	return task_index

def view_tasks_menu(task_index):
	print("\n\nHere is all your current tasks:\n")
	i=0
	for i in range(0, len(tasks)):
		if tasks[i]["Title"]:
			print(tasks[i]["Title"] + " which is a " + tasks[i]["priority"] + " priority task \n")
		else:
			print("unused key")
		i+=1
	input("Press Enter to continue. ")
	return

def main_list(task_index):
	while True:
		print("\n\n\n\nWelcome to ToMaybeDo\n\n")
		print("Please select an option to continue using this app, or enter Q to quit: \n")
		print("1) Add a task")
		print("2) Delete a task")
		print("3) View all tasks \n")
		menu_choice = input("Please make your selection: " )
		print("\n\n\n")	
		main_menu(menu_choice, task_index)
		
main_list(task_index)
	