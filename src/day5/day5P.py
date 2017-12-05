# Basic File IO
import sys
import os
def readfile():
    wholeArray = []
    with open("day5.txt", 'r') as f:
        for line in f:
            lineArray = line.rstrip("\n")
            wholeArray.append(int(float(lineArray)))
    return wholeArray

def exercise1():
    wholeArray = readfile()    
    steps = 0
    index = 0
    while(index >= 0 and index < len(wholeArray)):
        wholeArray[index] += 1
        index += wholeArray[index]
        steps += 1
    print(steps)

def exercise2():
    wholeArray = readfile()    
    steps = 0
    index = 0
    while(index >= 0 and index < len(wholeArray)):
        last = wholeArray[index]
        wholeArray[index] += 1 if last < 3 else -1
        index += last
        steps += 1
    print(steps)

exercise1()
exercise2()