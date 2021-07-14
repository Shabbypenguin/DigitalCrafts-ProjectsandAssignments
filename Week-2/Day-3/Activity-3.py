#!/usr/bin/env python3

def openfile(mode):
	file = open("favorite_dishes.txt", mode)
	return file
	
while True:
	file = openfile("a")
	print("What is your favorite dish? " )
	favorite_dish = input("Or enter q to quit\n")
	
	if favorite_dish.lower() == "q":
		file.close()
		file = openfile("r")
		dishes = file.readlines()
		for dish in dishes:
			print(dish)
		file.close()
		exit()
	else:
		file.write(favorite_dish+ "\n")