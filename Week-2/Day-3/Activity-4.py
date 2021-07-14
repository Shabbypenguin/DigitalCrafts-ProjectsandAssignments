#!/usr/bin/env python3
duplicate = []
email_input = open("input_emails.txt", "r")
email_list = email_input.readlines()
email_output = open("output_email.txt", "a")

for email in email_list:
	if email not in duplicate:
		duplicate.append(email)
		email_output.write(email)
