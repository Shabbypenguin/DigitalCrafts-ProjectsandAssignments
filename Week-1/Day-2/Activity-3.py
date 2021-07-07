#!/usr/bin/env python3

subtotal = float(input("Please enter the bills subtotal: "))
tip_amount = int(input("what percentage do you want to tip? "))

tip_value = float(tip_amount/100 * subtotal)
total = subtotal + tip_value
print(f"The amount you should tip then is {tip_value:.2f} and your grand total will be {total:.2f}")