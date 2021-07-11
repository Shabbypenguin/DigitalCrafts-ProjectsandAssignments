#!/usr/bin/env python3

vowels = ["a","e","i","o","u"]
print("Lets count vowels, please enter a sentence:")
sentence = input("")

for i in vowels:
	count = sentence.count(i)
	print(f"The letter {i} has {count} occurrences in your sentence")