#!/usr/bin/env python3

def input_number():
	try:
		number = int(input("Enter number: "))
		input_number()
	except ValueError:
		print("Not a number, please try again.")
		input_number()
		
		
input_number()
