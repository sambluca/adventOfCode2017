# Basic File IO
import sys
import os
import operator
def readfile():
    registerDict = {}
    instructionDict = {}
    with open("day8.txt", 'r') as f:
        operations = []
        for index, line in enumerate(f):
            instructionDict[index] = {}
            lineArray = line.rstrip("\n")
            if 'inc' in lineArray:
                lineArray = lineArray.split(' inc ')
                operations.append(operator.add)
            else:
                lineArray = lineArray.split(' dec ')
                operations.append(operator.sub)
            instruction = lineArray
            if instruction[0] not in registerDict:
                registerDict[instruction[0]] = 0
            i = instruction[1].split(' if ')
            instructionDict[index]['modifyBy'] = i[0]
            instructionDict[index]['instruction'] = i[1]
            instructionDict[index]['instructionToMod'] = instruction[0]
            instructionDict[index]['operation'] = operations[index]
    return registerDict, instructionDict

def modifyCheckValue(instruction, registerDict):
    ops = {'>': operator.gt, '<': operator.lt, '>=': operator.ge, '<=': operator.le, '==': operator.eq, '!=': operator.ne}
    splitInstruction = instruction.split(' ')
    valueOfCheck = registerDict[splitInstruction[0]]
    comparison = splitInstruction[1]
    comparator = splitInstruction[2]
    return ops[comparison](int(valueOfCheck), int(comparator))

def runInstruction():
    registerNInstruction = readfile()
    registerDict = registerNInstruction[0]
    instructionDict = registerNInstruction[1]
    highestValue = 0
    for instruction in instructionDict:
        modify = modifyCheckValue(instructionDict[instruction]['instruction'], registerDict)
        if modify:
            registerValue = int(registerDict[instructionDict[instruction]['instructionToMod']])
            modifier = int(instructionDict[instruction]['modifyBy'])
            operation = instructionDict[instruction]['operation']
            modifiedValue = operation(registerValue, modifier)
            registerDict[instructionDict[instruction]['instructionToMod']] = modifiedValue
        highestValue = modifiedValue if modifiedValue > highestValue else highestValue #exercise 2
    maxValue = registerDict[max(registerDict, key=registerDict.get)]
    print 'exercise1: ' + str(maxValue)
    print 'exericise2: ' + str(highestValue)

runInstruction()