#!/usr/bin/env python3
class Calculator:
	def __init__(self, input_1, input_2, operator):
		self.number1 = input_1
		self.number2 = input_2
		self.operator = operator
		self.total = 0
		
	def solve(self):
		self.total = eval(self.number1 + self.operator + self.number2)


while True:

	try:
		first_number = input("Enter your first value: ")
	except:
		print("Please enter an integer.")
	try:
		second_number = input("Enter your second value: ")
	except:
		print("Please enter an integer.")
	print("If you would like to quit, type q")
	operation = input("Enter your what operation you want to use (+, -, *, /): ")
	
	
		
	if (operation.lower() == "q"):
		exit()
	else:
		calulation = Calculator(first_number, second_number, operation)
		try:
			calulation.solve()
		except:
			print("invalid math problem")
		print(calulation.total)