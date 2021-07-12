#!/usr/bin/env python3

class User:
	def __init__(self,first_name, last_name):
		self.first_name = first_name
		self.last_name = last_name
		self.address = []
		
	def add_address(self,location):
		self.address.append(location)
		pass
		
		
class Address:
	def __init__(self, street, city, state, zipcode,):
		self.street = street
		self.city = city
		self.state = state
		self.zipcode =zipcode
		
		
user1 = User("foo", "bar")
address1 = Address("123 lewis ave", "fort drum", "NY", "13602")
user1.address.append(address1)

print(user1.first_name)
print(user1.last_name)
print(user1.address[0].street)
print(user1.address[0].city)
print(user1.address[0].state)
print(user1.address[0].zipcode)