import numpy as np

def readfile():
    with open("day6.txt", 'r') as f: # actual data
    # with open("day6test.txt", 'r') as f: # test file    
        for line in f:
            bank = line.split("\t") #for actual
            # bank = line.split(" ") #for test file
            for index, block in enumerate(bank):
                bank[index] = int(float(block))
    return bank

def exercise1():
    dataBlock = readfile()
    seenBlocks = []
    noDuplicates = True

    while noDuplicates:
         seenBlocks.append(dataBlock[:])
         index = dataBlock.index(max(dataBlock))
         distribute = max(dataBlock)
         dataBlock[index] = 0
         while distribute > 0:
             index = (index + 1) % len(dataBlock) # Took me a while to figure this out BUT this makes index loop to start when it gets to the end
             dataBlock[index] += 1
             distribute -= 1         
         if dataBlock in seenBlocks:
             noDuplicates = False
    print len(seenBlocks)
         
exercise1()