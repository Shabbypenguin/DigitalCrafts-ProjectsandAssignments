#!/usr/bin/env python3

class Stacks:
	def __init__(self):
		self.items = []	
	
	def push(self, value):
		self.items.append(value)
	
	def pop(self):
		try:
			deleted_item = self.items.pop()
		except:
			print("Sorry there isn't any remaining stack")
			

new_stack = Stacks()
i=0
while i <5:
	new_stack.push(i)
	i+=1
	
print(new_stack.items)
new_stack.pop()
print(new_stack.items)
