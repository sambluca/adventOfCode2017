# Basic File IO
import sys
import os
def read_file():
    wholeArray = []
    with open("day4Data.txt", 'r') as f:
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

def exercise2():
    valid = True
    validCount = 0
    phraseArray = orderAlphabetically(read_file())
    for phrase in phraseArray:
        for word in phrase:
            if phrase.count(word) != 1:
                valid = False
                break
        if valid:
            validCount = validCount + 1
        valid = True
    print validCount




def orderAlphabetically(phraseArray):
    for idx, phrase in enumerate(phraseArray):
        for i, word in enumerate(phrase):
            phrase[i] = ''.join(sorted(word))
        phraseArray[idx] = phrase
    return phraseArray


exercise1()
exercise2()