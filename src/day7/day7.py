def readfile():
    wholeArray=[]
    with open("day7.txt", 'r') as f: # actual data
    # with open("day7example.txt", 'r') as f: # test file    
        for line in f:
            lineArray = line.rstrip("\n")
            wholeArray.append(lineArray)
    return wholeArray

def buildPrograms(programTree):
    programs = []
    for program in programTree:
        if '->' in program:
            p = program.split(' -> ')[0]
        else:
            p = program
        programs.append(p.split(' ')[0])
    return programs

def buildProgramTreeObject(data):
    programTree = {}
    for program in data:
        if '->' in program:
            programData = program.split(' -> ')
            programsSupported = programData[1].split(', ')
            programName = programData[0].split(' ')[0]
            programTree[programName] = programsSupported
    return programTree


def exercise1():
    data =  readfile()
    programs = buildPrograms(data)
    programTreeObject = buildProgramTreeObject(data)

    for program in programs:
        programAppears = 0
        for key in programTreeObject:
            if program not in programTreeObject[key]:
                programAppears += 1
        if programAppears == len(programTreeObject):
            print program

exercise1()