#!/usr/bin/env python3

class BankAccount:
	def __init__(self):
		self.balance = 0
		self.account_number = ""
		
	def deposit(account, amount):
		account.balance += amount
		
	def withdraw(account, amount):
		account.balance -= amount
		
	def transfer_funds(account1, account2, amount):
		account1.balance -= amount
		account2.balance += amount
		
		
toms_bank = BankAccount()
toms_bank.balance = 600
toms_bank.account_number = "AB5539020"

davids_bank = BankAccount()
davids_bank.account_number = "cd9382323"
davids_bank.balance = 1500



BankAccount.deposit(toms_bank, 3000)
print(toms_bank.balance)

BankAccount.transfer_funds(toms_bank, davids_bank, 400)
print(toms_bank.balance)
print(davids_bank.balance)