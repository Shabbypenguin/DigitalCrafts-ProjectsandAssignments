#!/usr/bin/env python3
number = None
if (number == None):
	number = float(input("Enter your number: "))
	if (((number / 3).is_integer() == True and (number / 5).is_integer() == False)):
		print("Fizz")
	elif (((number / 3).is_integer() == False and (number / 5).is_integer() == True)):
		print("Buzz")
	elif (((number / 3).is_integer() == True and (number / 5).is_integer() == True)):
		print("Fizz Buzz")
	else:
		print("Nothing to see here")
