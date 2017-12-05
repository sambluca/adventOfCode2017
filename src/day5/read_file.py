# Basic File IO
import sys
import os
wholeArray = []
with open("day5.txt", 'r') as f:
	for line in f:
		lineArray = line.rstrip("\n")
		wholeArray.append(lineArray)
print(wholeArray)
