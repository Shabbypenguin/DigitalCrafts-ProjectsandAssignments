#!/usr/bin/env python3

class Palindrome:
	def __init__(self, input):
		self.word = input
		self.length = len(input)
		self.reversed = ""
	
	def reverse_word(self):
		for letter in range (0, self.length):
			self.reversed += self.word[letter]
			

is_palindrome = Palindrome(input("Please enter a word: "))
print(f"The word is {is_palindrome.word}")
is_palindrome.reverse_word()
print(is_palindrome.reversed)
if (is_palindrome.reversed == is_palindrome.word):
	print("This word is a palindrome!")
else:
	print("This word is not a palindrome")