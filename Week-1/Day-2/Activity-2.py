#!/usr/bin/env python3

letter= input("Please enter the letter you want checked: ")

if (letter.lower() == "a" or letter.lower() == "e" or letter.lower() == "i" or letter.lower() == "o" or letter.lower() == "u"):
	print(f"{letter} is a vowel")
else:
	print(f"{letter} is not a vowel")