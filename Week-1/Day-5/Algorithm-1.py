#!/usr/bin/env python3

a=0
b=0
n=0
perfect_squares = []	

def get_squares(a,b,n,perfect_squares):
	while True:
		if b >= (n*n) and a <= (n*n) :
			perfect_squares.append(n*n)
			n+=1
		else:
			if n > b:
				break
			else:
				n+=1

def get_input(a,b,n,perfect_squares):
	if b<=0:
		print("Please input the 2 numbers you would like to search for perfect squares from")
		a = int(input("First number? "))
		b = int(input("Second number? "))
		if (a >= b):
			print("I'm sorry that isn't a valid entry, the second number must be larger")
			get_input(a, b, n, perfect_squares)
		else:
			get_squares(a,b,n,perfect_squares)


			
get_input(a,b,n,perfect_squares)
print(f"These are the perfect squares in between the two numbers you input {perfect_squares}")
			
			