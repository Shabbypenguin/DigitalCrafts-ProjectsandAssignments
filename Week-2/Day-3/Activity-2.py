#!/usr/bin/env python3
while True:
	file = open("reasons_to_program.txt", "a")
	print("Why do you enjoy being a developer?" )
	reason = input("Or enter q to quit\n")
	if reason.lower == "q":
		file.close()
		exit()
	else:
		file.write(reason+ "\n")