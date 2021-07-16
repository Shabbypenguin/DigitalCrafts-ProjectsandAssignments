#!/usr/bin/env python3

class Queue:
	def __init__(self):
		self.order = []	
		
	def enqueue(self, value):
		self.order.append(value)
		
	def dequeue(self):
		try:
			deleted_item = self.order.pop(0)
		except:
			print("Sorry there isn't any remaining stack")
			
			
new_queue = Queue()
i=0
while i <5:
	new_queue.enqueue(i)
	i+=1
	
print(new_queue.order)
new_queue.dequeue()
print(new_queue.order)
