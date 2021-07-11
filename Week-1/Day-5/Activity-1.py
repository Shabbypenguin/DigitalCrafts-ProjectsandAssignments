#!/usr/bin/env python3
import random

numbers = []
reverse_numbers = []
i=0
c=0
n=0

def sort_numbers(c,n,sorted_array):
	while c == 0:
		if n > -1:
			if numbers[n] > numbers[(n+1)]:
				temp_value = numbers[(n+1)]
				numbers[(n+1)] = numbers[n]
				numbers[n] = temp_value
				temp_value=0
			else:
				n+=1
			if (n-array_size == 0):
				n = 0
				if numbers == sorted_array:
					c+=1
def reverse_sort_numbers(c,n,reverse_sorted_array):
	while c == 0:
		if n > -1:
			if reverse_numbers[n+1] > reverse_numbers[(n)]:
				temp_value = reverse_numbers[(n)]
				reverse_numbers[(n)] = reverse_numbers[n+1]
				reverse_numbers[n+1] = temp_value
			else:
				n+=1
			if (n-array_size == 0):
				n = 0
				if reverse_numbers == reverse_sorted_array:
					c+=1
while True:
	print("How many numbers would you like to include in your sorted array?")
	array_size = int(input(""))
	while i <= array_size:
		numbers.append(random.randint(0, 99))
		i+=1
	sorted_array = numbers.copy()
	reverse_sorted_array = numbers.copy()
	sorted_array.sort()
	reverse_sorted_array.sort(reverse=True)
	reverse_numbers = numbers.copy()
	print(f"\n\nThe numbers started with: {numbers}")
	
	sort_numbers(c,n,sorted_array)
	reverse_sort_numbers(c,n,reverse_sorted_array)

	print(f"The numbers all sorted :  {numbers} ")
	print(f"The numbers in reverse :  {reverse_numbers} ")
	exit()