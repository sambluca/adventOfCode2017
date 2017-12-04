# Basic File IO
import sys
import os
def read_file():
    wholeArray = []
    with open("day3Data.txt", 'r') as f:
        for line in f:
            lineArray = line.rstrip("\n").split(" ")
            wholeArray.append(lineArray)
    return wholeArray

def exercise1():
    valid = True
    validCount = 0
    phraseArray = read_file()
    for phrase in phraseArray:
        for word in phrase:
            if phrase.count(word) != 1:
                valid = False
                break
        if valid:
            validCount = validCount + 1
        valid = True
    print validCount

exercise1()