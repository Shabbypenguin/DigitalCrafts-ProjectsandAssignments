#!/usr/bin/env python3

number = int(input("Please enter a number you wish to check if it is prime: "))
x=1
factors = []
while x <= number:
	remainder = number % x
	if (remainder == 0):
		factors.append(x)
	x += 1
print(f"These are all the factors {number} is divisible by")
print(factors)
if len(factors) > 2:
	print(f"{number} is not prime!")
else:
	print(f"{number} is prime!")
	