# Basic File IO
import sys
import os


wholeArray = []
# Open a file for reading and assign it the a file object named f
with open("../data/day2.txt", 'r') as f:
	# for each line in the file, print the line
	for line in f:
		#print line
		lineArray = line.rstrip("\n").split("\t")
		wholeArray.append(lineArray)

print(wholeArray)
# sys.stdout.flush()

