#!/usr/bin/env python3

file = open("guest.txt", "w")

first_name = input("Please enter your first name: ")
last_name = input("Please enter your last name: ")

file.write(f"\nGood news, {first_name} {last_name} made it to your party!")

file.close()