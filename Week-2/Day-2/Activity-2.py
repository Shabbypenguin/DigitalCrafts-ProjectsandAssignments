#!/usr/bin/env python3

import unittest
import random
import operator

class CalculatorTests(unittest.TestCase):
	def __init__(self, input_1, input_2, operator):
		self.number1 = input_1
		self.number2 = input_2
		self.operator = operator
		self.total = 0
		
	def solve(self):
		self.total = self.operator(self.number1, self.number2)
		print(self.total)
		print("test")
		self.assertEqual(calculation.total, calculation.total)


while True:
	first_number = random.randint(1, 999)
	second_number = random.randint(1, 999)
	operating_choices = [operator.add, operator.sub, operator.mul, operator.truediv]
	random_operator = random.choice(operating_choices)
	print(random_operator)
	print(first_number)
	print(second_number)
	
	calculation = Calculator(first_number, second_number, random_operator)
	calculation.solve()
	input("")
	print(calculation.total)