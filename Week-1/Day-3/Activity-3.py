#!/usr/bin/env python3

word = input("Please enter a word: ")
word_length = len(word)
temp_word = ""
x = -1
print(f"The word is {word}")
while -x <= word_length:
	temp_word += word[x]
	print(word[x])
	x -= 1
print(f"The word in reverse is {temp_word}")