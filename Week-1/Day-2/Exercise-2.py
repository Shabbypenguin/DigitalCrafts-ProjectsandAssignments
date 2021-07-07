#!/usr/bin/env python3

number = int(input("Enter in your whole number: "))

if ((number / 2).is_integer() == True):
	print(f"The number {number} is even!")
elif ((number / 2).is_integer() == False):
	print(f"The number {number} is odd!")