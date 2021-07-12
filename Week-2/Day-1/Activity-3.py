#!/usr/bin/env python3

class BankAccount:
	def __init__(self):
		self.balance = 0
		self.account_number = ""
		
	def deposit(self, amount):
		self.balance += amount
		
	def withdraw(self, amount):
		self.balance -= amount
		
	def transfer_funds(self, account2, amount):
		self.balance -= amount
		account2.balance += amount
		
		
toms_bank = BankAccount()
toms_bank.balance = 600
toms_bank.account_number = "AB5539020"

davids_bank = BankAccount()
davids_bank.account_number = "cd9382323"
davids_bank.balance = 1500


toms_bank.deposit(3000)
print(toms_bank.balance)

toms_bank.transfer_funds(davids_bank, 600)
print(toms_bank.balance)
print(davids_bank.balance)