# Basic File IO
import sys
import os
wholeArray = []
with open("day2.txt", 'r') as f:
	for line in f:
		lineArray = line.rstrip("\n").split("\t")
		wholeArray.append(lineArray)
print(wholeArray)
