#!/usr/bin/env python3

number = int(input("Please input the number you would like as a factorial: "))
factorial = number
x = 1
while x < number:
	factorial = factorial * (number-x)
	x+=1
print(factorial)