#!/usr/bin/env python3
import sys

first_number = None
second_number = None
operation = None

def addition(value1, value2):
	print("Add some numbers")
	sum = value1 + value2
	return sum

def subtraction(value1, value2):
	print("Subtract some numbers")
	difference = value1 - value2
	return difference

def multiplcation(value1, value2):
	print("Multiply some numbers")
	product = value1 * value2
	return product

def division(value1, value2):
	print("Divide some numbers")
	remainder = value1 / value2
	return remainder

total = 0

if (first_number== None):
	first_number = float(input("Enter your first value: "))
if (second_number == None):
	second_number = float(input("Enter your second value: "))
if (operation == None):
	operation = input("Enter your what operation you want to use (+, -, *, /): ")


if (operation == "+"):
	total = addition(first_number, second_number)
elif (operation == "-"):
	total = subtraction(first_number, second_number)
elif (operation == "*"):
	total = multiplcation(first_number, second_number)
elif (operation == "/"):
	total = division(first_number, second_number)
	
print(total)