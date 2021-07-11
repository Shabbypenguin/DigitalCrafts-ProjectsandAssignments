#!/usr/bin/env python3
values = []
product = 0
base = 7
total_sum = 0

def find_multiples(temp_value, base, product):
	n=1
	while product < 1000:
		product = base * n
		if product < 1000:
			temp_value.append(int(product))
			n+=1

while True:
	if base == 7:
		find_multiples(values, base, product)
		base+=4
	else:
		base = 11
		find_multiples(values, base, product)
		break
	
	
	
print("here are all the multiples under 1000 of 7 and 11:")
i=0
while i < len(values):
	total_sum += values[i]
	i+=1
values.sort()
print(values)
print(f"\n\nThe sum of all these multiples is {total_sum}")