# Basic File IO
import sys
import os
wholeArray = []
with open("day5.txt", 'r') as f:
	for line in f:
		lineArray = line.rstrip("\n")
		wholeArray.append(int(float(lineArray)))

steps = 0
index = 0
while(index >= 0 and index < len(wholeArray)):
    wholeArray[index] += 1
    index += wholeArray[index]
    steps += 1

print(steps)
