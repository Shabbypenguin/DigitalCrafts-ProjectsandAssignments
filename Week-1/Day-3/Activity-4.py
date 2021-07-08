#!/usr/bin/env python3
x = 0
friends = []
while(x == 0):
	add_friend = input("Please enter a friends name: ")
	if add_friend.lower() =="q" :
		x=1
	else:
		friends.append(add_friend)
		print(friends)