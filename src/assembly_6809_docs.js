const asm_docs = {
    "ABX": {
        "instr_desc": "Add B accumulator to X (unsigned)",
        "description": "Add the 8-bit unsigned value in accumulator B into index register X.",
        "comment": null
    },
    "ADCA": {
        "instr_desc": "Add memory to accumulator with carry",
        "description": "Adds the contents of the C (carry) bit and the memory byte into an 8-bit accumulator.",
        "comment": null
    },
    "ADCB": {
        "instr_desc": "Add memory to accumulator with carry",
        "description": "Adds the contents of the C (carry) bit and the memory byte into an 8-bit accumulator.",
        "comment": null
    },
    "ADDA": {
        "instr_desc": "Add memory to accumulator",
        "description": "Adds the memory byte into an 8-bit accumulator.",
        "comment": null
    },
    "ADDB": {
        "instr_desc": "Add memory to accumulator",
        "description": "Adds the memory byte into an 8-bit accumulator.",
        "comment": null
    },
    "ADDD": {
        "instr_desc": "Add memory to accumulator",
        "description": "Adds the memory byte into an 8-bit accumulator.",
        "comment": null
    },
    "ANDA": {
        "instr_desc": "AND memory with accumulator",
        "description": "Performs the logical AND operation between the contents of an accumulator and the contents of memory location M and the result is stored in the accumulator.",
        "comment": null
    },
    "ANDB": {
        "instr_desc": "AND memory with accumulator",
        "description": "Performs the logical AND operation between the contents of an accumulator and the contents of memory location M and the result is stored in the accumulator.",
        "comment": null
    },
    "ANDCC": {
        "instr_desc": "AND memory with accumulator",
        "description": "Performs the logical AND operation between the contents of an accumulator and the contents of memory location M and the result is stored in the accumulator.",
        "comment": null
    },
    "ASR": {
        "instr_desc": "Arithmetic shift of accumulator or memory right",
        "description": "Shifts all bits of the operand one place to the right. Bit seven is held constant. Bit zero is shifted into the C (carry) bit.",
        "comment": null
    },
    "ASRA": {
        "instr_desc": "Arithmetic shift of accumulator or memory right",
        "description": "Shifts all bits of the operand one place to the right. Bit seven is held constant. Bit zero is shifted into the C (carry) bit.",
        "comment": null
    },
    "ASRB": {
        "instr_desc": "Arithmetic shift of accumulator or memory right",
        "description": "Shifts all bits of the operand one place to the right. Bit seven is held constant. Bit zero is shifted into the C (carry) bit.",
        "comment": null
    },
    "BEQ": {
        "instr_desc": "Branch if equal",
        "description": "Tests the state of the Z (zero) bit and causes a branch if it is set.\nWhen used after a subtract or compare operation, this instruction will branch if the compared values, signed or unsigned, were exactly the same.",
        "comment": null
    },
    "LBEQ": {
        "instr_desc": "Branch if equal",
        "description": "Tests the state of the Z (zero) bit and causes a branch if it is set.\nWhen used after a subtract or compare operation, this instruction will branch if the compared values, signed or unsigned, were exactly the same.",
        "comment": null
    },
    "BGE": {
        "instr_desc": "Branch if greater than or equal (signed)",
        "description": "Causes a branch if the N (negative) bit and the V (overflow) bit are either both set or both clear.\nThat is, branch if the sign of a valid twos complement result is, or would be, positive.\nWhen used after a subtract or compare operation on twos complement values, this instruction will branch if the register was greater than or equal to the memory operand.",
        "comment": null
    },
    "LBGE": {
        "instr_desc": "Branch if greater than or equal (signed)",
        "description": "Causes a branch if the N (negative) bit and the V (overflow) bit are either both set or both clear.\nThat is, branch if the sign of a valid twos complement result is, or would be, positive.\nWhen used after a subtract or compare operation on twos complement values, this instruction will branch if the register was greater than or equal to the memory operand.",
        "comment": null
    },
    "BGT": {
        "instr_desc": "Branch if greater (signed)",
        "description": "Causes a branch if the N (negative) bit and V (overflow) bit are either both set or both clear and the Z (zero) bit is clear.\nIn other words, branch if the sign of a valid twos complement result is, or would be, positive and not zero.\nWhen used after a subtract or compare operation on twos complement values, this instruction will branch if the register was greater than the memory operand.",
        "comment": null
    },
    "LBGT": {
        "instr_desc": "Branch if greater (signed)",
        "description": "Causes a branch if the N (negative) bit and V (overflow) bit are either both set or both clear and the Z (zero) bit is clear.\nIn other words, branch if the sign of a valid twos complement result is, or would be, positive and not zero.\nWhen used after a subtract or compare operation on twos complement values, this instruction will branch if the register was greater than the memory operand.",
        "comment": null
    },
    "BHI": {
        "instr_desc": "Branch if higher (unsigned)",
        "description": "Causes a branch if the previous operation caused neither a carry nor a zero result.\nWhen used after a subtract or compare operation on unsigned binary values, this instruction will branch if the register was higher than the memory operand.",
        "comment": "Generally not useful after INC/DEC, LD/TST, and TST/CLR/COM instructions."
    },
    "LBHI": {
        "instr_desc": "Branch if higher (unsigned)",
        "description": "Causes a branch if the previous operation caused neither a carry nor a zero result.\nWhen used after a subtract or compare operation on unsigned binary values, this instruction will branch if the register was higher than the memory operand.",
        "comment": "Generally not useful after INC/DEC, LD/TST, and TST/CLR/COM instructions."
    },
    "BCC": {
        "instr_desc": "Branch if higher or same (unsigned)",
        "description": "Tests the state of the C (carry) bit and causes a branch if it is clear.\nWhen used after a subtract or compare on unsigned binary values, this instruction will branch if the register was higher than or the same as the memory operand.",
        "comment": "This is a duplicate assembly-language mnemonic for the single machine instruction BCC.\nGenerally not useful after INC/DEC, LD/ST, and TST/CLR/COM instructions."
    },
    "LBCC": {
        "instr_desc": "Branch if higher or same (unsigned)",
        "description": "Tests the state of the C (carry) bit and causes a branch if it is clear.\nWhen used after a subtract or compare on unsigned binary values, this instruction will branch if the register was higher than or the same as the memory operand.",
        "comment": "This is a duplicate assembly-language mnemonic for the single machine instruction BCC.\nGenerally not useful after INC/DEC, LD/ST, and TST/CLR/COM instructions."
    },
    "BITA": {
        "instr_desc": "Bit test memory with accumulator",
        "description": "Performs the logical AND of the contents of accumulator A or B and the contents of memory location M and modifies the condition codes accordingly.\nThe contents of accumulator A or B and memory location M are not affected.",
        "comment": null
    },
    "BITB": {
        "instr_desc": "Bit test memory with accumulator",
        "description": "Performs the logical AND of the contents of accumulator A or B and the contents of memory location M and modifies the condition codes accordingly.\nThe contents of accumulator A or B and memory location M are not affected.",
        "comment": null
    },
    "BLE": {
        "instr_desc": "Branch if less than or equal (signed)",
        "description": "Causes a branch if the exclusive OR of the N (negative) and V (overflow) bits is 1 or if the Z (zero) bit is set.\nThat is, branch if the sign of a valid twos complement result is, or would be, negative.\nWhen used after a subtract or compare operation on twos complement values, this instruction will branch if the register was less than or equal to the memory operand.",
        "comment": null
    },
    "LBLE": {
        "instr_desc": "Branch if less than or equal (signed)",
        "description": "Causes a branch if the exclusive OR of the N (negative) and V (overflow) bits is 1 or if the Z (zero) bit is set.\nThat is, branch if the sign of a valid twos complement result is, or would be, negative.\nWhen used after a subtract or compare operation on twos complement values, this instruction will branch if the register was less than or equal to the memory operand.",
        "comment": null
    },
    "BLO": {
        "instr_desc": "Branch if lower (unsigned)",
        "description": "Tests the state of the C (carry) bit and causes a branch if it is set.\nWhen used after a subtract or compare on unsigned binary values, this instruction will branch if the register was lower than the memory operand.",
        "comment": "This is a duplicate assembly-language mnemonic for the single machine instruction BCS.\nGenerally not useful after INC/DEC, LD/ST, and TST/CLR/COM instructions."
    },
    "LBCS": {
        "instr_desc": "Branch if lower (unsigned)",
        "description": "Tests the state of the C (carry) bit and causes a branch if it is set.\nWhen used after a subtract or compare on unsigned binary values, this instruction will branch if the register was lower than the memory operand.",
        "comment": "This is a duplicate assembly-language mnemonic for the single machine instruction BCS.\nGenerally not useful after INC/DEC, LD/ST, and TST/CLR/COM instructions."
    },
    "BLS": {
        "instr_desc": "Branch if lower or same (unsigned)",
        "description": "Causes a branch if the previous operation caused either a carry or a zero result.\nWhen used after a subtract or compare operation on unsigned binary values, this instruction will branch if the register was lower than or the same as the memory operand.",
        "comment": "Generally not useful after INC/DEC, LD/ST, and TST/CLR/COM instructions."
    },
    "LBLS": {
        "instr_desc": "Branch if lower or same (unsigned)",
        "description": "Causes a branch if the previous operation caused either a carry or a zero result.\nWhen used after a subtract or compare operation on unsigned binary values, this instruction will branch if the register was lower than or the same as the memory operand.",
        "comment": "Generally not useful after INC/DEC, LD/ST, and TST/CLR/COM instructions."
    },
    "BLT": {
        "instr_desc": "Branch if less than (signed)",
        "description": "Causes a branch if either, but not both, of the N (negative) or V (overflow) bits is set.\nThat is, branch if the sign of a valid twos complement result is, or would be, negative.\nWhen used after a subtract or compare operation on twos complement binary values, this instruction will branch if the register was less than the memory operand.",
        "comment": null
    },
    "LBLT": {
        "instr_desc": "Branch if less than (signed)",
        "description": "Causes a branch if either, but not both, of the N (negative) or V (overflow) bits is set.\nThat is, branch if the sign of a valid twos complement result is, or would be, negative.\nWhen used after a subtract or compare operation on twos complement binary values, this instruction will branch if the register was less than the memory operand.",
        "comment": null
    },
    "BMI": {
        "instr_desc": "Branch if minus",
        "description": "Tests the state of the N (negative) bit and causes a branch if set.\nThat is, branch if the sign of the twos complement result is negative.",
        "comment": "When used after an operation on signed binary values, this instruction will branch if the result is minus.\nIt is generally preferred to use the LBLT instruction after signed operations."
    },
    "LBMI": {
        "instr_desc": "Branch if minus",
        "description": "Tests the state of the N (negative) bit and causes a branch if set.\nThat is, branch if the sign of the twos complement result is negative.",
        "comment": "When used after an operation on signed binary values, this instruction will branch if the result is minus.\nIt is generally preferred to use the LBLT instruction after signed operations."
    },
    "BNE": {
        "instr_desc": "Branch if not equal",
        "description": "Tests the state of the Z (zero) bit and causes a branch if it is clear.\nWhen used after a subtract or compare operation on any binary values, this instruction will branch if the register is, or would be, not equal to the memory operand.",
        "comment": null
    },
    "LBNE": {
        "instr_desc": "Branch if not equal",
        "description": "Tests the state of the Z (zero) bit and causes a branch if it is clear.\nWhen used after a subtract or compare operation on any binary values, this instruction will branch if the register is, or would be, not equal to the memory operand.",
        "comment": null
    },
    "BPL": {
        "instr_desc": "Branch if plus",
        "description": "Tests the state of the N (negative) bit and causes a branch if it is clear.\nThat is, branch if the sign of the twos complement result is positive.",
        "comment": "When used after an operation on signed binary values, this instruction will branch if the result (possibly invalid) is positive.\nIt is generally preferred to use the BGE instruction after signed operations."
    },
    "LBPL": {
        "instr_desc": "Branch if plus",
        "description": "Tests the state of the N (negative) bit and causes a branch if it is clear.\nThat is, branch if the sign of the twos complement result is positive.",
        "comment": "When used after an operation on signed binary values, this instruction will branch if the result (possibly invalid) is positive.\nIt is generally preferred to use the BGE instruction after signed operations."
    },
    "BRA": {
        "instr_desc": "Branch always",
        "description": "Causes an unconditional branch.",
        "comment": null
    },
    "LBRA": {
        "instr_desc": "Branch always",
        "description": "Causes an unconditional branch.",
        "comment": null
    },
    "BRN": {
        "instr_desc": "Branch never",
        "description": "Does not cause a branch.\nThis instruction is essentially a no operation, but has a bit pattern logically related to branch always.",
        "comment": null
    },
    "LBRN": {
        "instr_desc": "Branch never",
        "description": "Does not cause a branch.\nThis instruction is essentially a no operation, but has a bit pattern logically related to branch always.",
        "comment": null
    },
    "BSR": {
        "instr_desc": "Branch to subroutine",
        "description": "The program counter is pushed onto the stack.\nThe program counter is then loaded with the sum of the program counter and the offset.",
        "comment": "A return from subroutine (RTS) instruction is used to reverse this process and must be the last instruction executed in a subroutine."
    },
    "LBSR": {
        "instr_desc": "Branch to subroutine",
        "description": "The program counter is pushed onto the stack.\nThe program counter is then loaded with the sum of the program counter and the offset.",
        "comment": "A return from subroutine (RTS) instruction is used to reverse this process and must be the last instruction executed in a subroutine."
    },
    "BVC": {
        "instr_desc": "Branch if valid twos complement result",
        "description": "Tests the state of the V (overflow) bit and causes a branch if it is clear.\nThat is, branch if the twos complement result was valid.\nWhen used after an operation on twos complement binary values, this instruction will branch if there was no overflow.",
        "comment": null
    },
    "LBVC": {
        "instr_desc": "Branch if valid twos complement result",
        "description": "Tests the state of the V (overflow) bit and causes a branch if it is clear.\nThat is, branch if the twos complement result was valid.\nWhen used after an operation on twos complement binary values, this instruction will branch if there was no overflow.",
        "comment": null
    },
    "BVS": {
        "instr_desc": "Branch if invalid twos complement result",
        "description": "Tests the state of the V (overflow) bit and causes a branch if it is set.\nThat is, branch if the twos complement result was invalid.\nWhen used after an operation on twos complement binary values, this instruction will branch if there was an overflow.",
        "comment": null
    },
    "LBVS": {
        "instr_desc": "Branch if invalid twos complement result",
        "description": "Tests the state of the V (overflow) bit and causes a branch if it is set.\nThat is, branch if the twos complement result was invalid.\nWhen used after an operation on twos complement binary values, this instruction will branch if there was an overflow.",
        "comment": null
    },
    "CLR": {
        "instr_desc": "Clear accumulator or memory location",
        "description": "Accumulator A or B or memory location M is loaded with 00000000 2 .\nNote that the EA is read during this operation.",
        "comment": null
    },
    "CLRA": {
        "instr_desc": "Clear accumulator or memory location",
        "description": "Accumulator A or B or memory location M is loaded with 00000000 2 .\nNote that the EA is read during this operation.",
        "comment": null
    },
    "CLRB": {
        "instr_desc": "Clear accumulator or memory location",
        "description": "Accumulator A or B or memory location M is loaded with 00000000 2 .\nNote that the EA is read during this operation.",
        "comment": null
    },
    "CMPA": {
        "instr_desc": "Compare memory from accumulator",
        "description": "Compares the contents of memory location to the contents of the specified register and sets the appropriate condition codes.\nNeither memory location M nor the specified register is modified.\nThe carry flag represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "CMPB": {
        "instr_desc": "Compare memory from accumulator",
        "description": "Compares the contents of memory location to the contents of the specified register and sets the appropriate condition codes.\nNeither memory location M nor the specified register is modified.\nThe carry flag represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "CMPD": {
        "instr_desc": "Compare memory from accumulator",
        "description": "Compares the contents of memory location to the contents of the specified register and sets the appropriate condition codes.\nNeither memory location M nor the specified register is modified.\nThe carry flag represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "CMPS": {
        "instr_desc": "Compare memory from accumulator",
        "description": "Compares the contents of memory location to the contents of the specified register and sets the appropriate condition codes.\nNeither memory location M nor the specified register is modified.\nThe carry flag represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "CMPU": {
        "instr_desc": "Compare memory from accumulator",
        "description": "Compares the contents of memory location to the contents of the specified register and sets the appropriate condition codes.\nNeither memory location M nor the specified register is modified.\nThe carry flag represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "CMPX": {
        "instr_desc": "Compare memory from accumulator",
        "description": "Compares the contents of memory location to the contents of the specified register and sets the appropriate condition codes.\nNeither memory location M nor the specified register is modified.\nThe carry flag represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "CMPY": {
        "instr_desc": "Compare memory from accumulator",
        "description": "Compares the contents of memory location to the contents of the specified register and sets the appropriate condition codes.\nNeither memory location M nor the specified register is modified.\nThe carry flag represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "COM": {
        "instr_desc": "Complement accumulator or memory location",
        "description": "Replaces the contents of memory location M or accumulator A or B with its logical complement.\nWhen operating on unsigned values, only BEQ and BNE branches can be expected to behave properly following a COM instruction.\nWhen operating on twos complement values, all signed branches are available.",
        "comment": null
    },
    "COMA": {
        "instr_desc": "Complement accumulator or memory location",
        "description": "Replaces the contents of memory location M or accumulator A or B with its logical complement.\nWhen operating on unsigned values, only BEQ and BNE branches can be expected to behave properly following a COM instruction.\nWhen operating on twos complement values, all signed branches are available.",
        "comment": null
    },
    "COMB": {
        "instr_desc": "Complement accumulator or memory location",
        "description": "Replaces the contents of memory location M or accumulator A or B with its logical complement.\nWhen operating on unsigned values, only BEQ and BNE branches can be expected to behave properly following a COM instruction.\nWhen operating on twos complement values, all signed branches are available.",
        "comment": null
    },
    "CWAI": {
        "instr_desc": "AND condition code register, then wait for interrupt",
        "description": "This instruction ANDs an immediate byte with the condition code register which may clear the interrupt mask bits I and F, stacks the entire machine state on the hardware stack and then looks for an interrupt.\nWhen a non-masked interrupt occurs, no further machine state information need be saved before vectoring to the interrupt handling routine.\nThis instruction replaced the MC6800 CLI WAI sequence, but does not place the buses in a high-impedance state.\nA FIRQ (fast interrupt request) may enter its interrupt handler with its entire machine state saved.\nThe RTI (return from interrupt) instruction will automatically return the entire machine state after testing the E (entire) bit of the recovered condition code register.",
        "comment": "The following immediate values will have the following results: FF = enable neither EF = enable IRQ BF = enable FIRQ AF = enable both"
    },
    "DAA": {
        "instr_desc": "Decimal adjust A accumulator",
        "description": "The sequence of a single-byte add instruction on accumulator A (either ADDA or ADCA) and a following decimal addition adjust instruction results in a BCD addition with an appropriate carry bit.\nBoth values to be added must be in proper BCD form (each nibble such that: 0 <= nibble <= 9).\nMultiple-precision addition must add the carry generated by this decimal addition adjust into the next higher digit during the add operation (ADCA) immediately prior to the next decimal addition adjust.",
        "comment": null
    },
    "DEC": {
        "instr_desc": "Decrement accumulator or memory location",
        "description": "Subtract one from the operand.\nThe carry bit is not affected, thus allowing this instruction to be used as a loop counter in multiple-precision computations.\nWhen operating on unsigned values, only BEQ and BNE branches can be expected to behave consistently.\nWhen operating on twos complement values, all signed branches are available.",
        "comment": null
    },
    "DECA": {
        "instr_desc": "Decrement accumulator or memory location",
        "description": "Subtract one from the operand.\nThe carry bit is not affected, thus allowing this instruction to be used as a loop counter in multiple-precision computations.\nWhen operating on unsigned values, only BEQ and BNE branches can be expected to behave consistently.\nWhen operating on twos complement values, all signed branches are available.",
        "comment": null
    },
    "DECB": {
        "instr_desc": "Decrement accumulator or memory location",
        "description": "Subtract one from the operand.\nThe carry bit is not affected, thus allowing this instruction to be used as a loop counter in multiple-precision computations.\nWhen operating on unsigned values, only BEQ and BNE branches can be expected to behave consistently.\nWhen operating on twos complement values, all signed branches are available.",
        "comment": null
    },
    "EORA": {
        "instr_desc": "Exclusive OR memory with accumulator",
        "description": "The contents of memory location M is exclusive ORed into an 8-bit register.",
        "comment": null
    },
    "EORB": {
        "instr_desc": "Exclusive OR memory with accumulator",
        "description": "The contents of memory location M is exclusive ORed into an 8-bit register.",
        "comment": null
    },
    "EXG": {
        "instr_desc": "Exchange Rl with R2",
        "description": "0000 = A:B 1000 = A\n0001 = X 1001 = B\n0010 = Y 1010 = CCR\n0011 = US 1011 = DPR\n0100 = SP 1100 = Undefined\n0101 = PC 1101 = Undefined\n0110 = Undefined 1110 = Undefined\n0111 = Undefined 1111 = Undefined",
        "comment": null
    },
    "INC": {
        "instr_desc": "Increment accumulator or memory location",
        "description": "Adds to the operand.\nThe carry bit is not affected, thus allowing this instruction to be used as a loop counter in multiple-precision computations.\nWhen operating on unsigned values, only the BEQ and BNE branches can be expected to behave consistently.\nWhen operating on twos complement values, all signed branches are correctly available.",
        "comment": null
    },
    "INCA": {
        "instr_desc": "Increment accumulator or memory location",
        "description": "Adds to the operand.\nThe carry bit is not affected, thus allowing this instruction to be used as a loop counter in multiple-precision computations.\nWhen operating on unsigned values, only the BEQ and BNE branches can be expected to behave consistently.\nWhen operating on twos complement values, all signed branches are correctly available.",
        "comment": null
    },
    "INCB": {
        "instr_desc": "Increment accumulator or memory location",
        "description": "Adds to the operand.\nThe carry bit is not affected, thus allowing this instruction to be used as a loop counter in multiple-precision computations.\nWhen operating on unsigned values, only the BEQ and BNE branches can be expected to behave consistently.\nWhen operating on twos complement values, all signed branches are correctly available.",
        "comment": null
    },
    "JMP": {
        "instr_desc": "Jump",
        "description": "Program control is transferred to the effective address.",
        "comment": null
    },
    "JSR": {
        "instr_desc": "Jump to subroutine",
        "description": "Program control is transferred to the effective address after storing the return address on the hardware stack.\nA RTS instruction should be the last executed instruction of the subroutine.",
        "comment": null
    },
    "LDA": {
        "instr_desc": "Load accumulator from memory",
        "description": "Loads the contents of memory location M into the designated register.",
        "comment": null
    },
    "LDB": {
        "instr_desc": "Load accumulator from memory",
        "description": "Loads the contents of memory location M into the designated register.",
        "comment": null
    },
    "LDD": {
        "instr_desc": "Load accumulator from memory",
        "description": "Loads the contents of memory location M into the designated register.",
        "comment": null
    },
    "LDS": {
        "instr_desc": "Load accumulator from memory",
        "description": "Loads the contents of memory location M into the designated register.",
        "comment": null
    },
    "LDU": {
        "instr_desc": "Load accumulator from memory",
        "description": "Loads the contents of memory location M into the designated register.",
        "comment": null
    },
    "LDX": {
        "instr_desc": "Load accumulator from memory",
        "description": "Loads the contents of memory location M into the designated register.",
        "comment": null
    },
    "LDY": {
        "instr_desc": "Load accumulator from memory",
        "description": "Loads the contents of memory location M into the designated register.",
        "comment": null
    },
    "LEAS": {
        "instr_desc": "Load effective address into stack pointer",
        "description": "Calculates the effective address from the indexed addressing mode and places the address in an indexable register. LEAX and LEAY affect the Z (zero) bit to allow use of these registers as counters and for MC6800 INX/DEX compatibility. LEAU and LEAS do not affect the Z bit to allow cleaning up the stack while returning the Z bit as a parameter to a calling routine, and also for MC6800 INS/DES compatibility.",
        "comment": "Instruction Operation Comment\nInstruction\n\nOperation\n\nComment\nLEAX 10,X X+10 -> X Adds 5-bit constant 10 to X\nLEAX 500,X X+500 -> X Adds 16-bit constant 500 to X\nLEAY A,Y Y+A -> Y Adds 8-bit accumulator to Y\nLEAY D,Y Y+D -> Y Adds 16-bit D accumulator to Y\nLEAU -10,U U-10 -> U Subtracts 10 from U\nLEAS -10,S S-10 -> S Used to reserve area on stack\nLEAS 10,S S+10 -> S Used to 'clean up' stack\nLEAX 5,S S+5 -> X Transfers as well as adds"
    },
    "LEAU": {
        "instr_desc": "Load effective address into stack pointer",
        "description": "Calculates the effective address from the indexed addressing mode and places the address in an indexable register. LEAX and LEAY affect the Z (zero) bit to allow use of these registers as counters and for MC6800 INX/DEX compatibility. LEAU and LEAS do not affect the Z bit to allow cleaning up the stack while returning the Z bit as a parameter to a calling routine, and also for MC6800 INS/DES compatibility.",
        "comment": "Instruction Operation Comment\nInstruction\n\nOperation\n\nComment\nLEAX 10,X X+10 -> X Adds 5-bit constant 10 to X\nLEAX 500,X X+500 -> X Adds 16-bit constant 500 to X\nLEAY A,Y Y+A -> Y Adds 8-bit accumulator to Y\nLEAY D,Y Y+D -> Y Adds 16-bit D accumulator to Y\nLEAU -10,U U-10 -> U Subtracts 10 from U\nLEAS -10,S S-10 -> S Used to reserve area on stack\nLEAS 10,S S+10 -> S Used to 'clean up' stack\nLEAX 5,S S+5 -> X Transfers as well as adds"
    },
    "LEAX": {
        "instr_desc": "Load effective address into stack pointer",
        "description": "Calculates the effective address from the indexed addressing mode and places the address in an indexable register. LEAX and LEAY affect the Z (zero) bit to allow use of these registers as counters and for MC6800 INX/DEX compatibility. LEAU and LEAS do not affect the Z bit to allow cleaning up the stack while returning the Z bit as a parameter to a calling routine, and also for MC6800 INS/DES compatibility.",
        "comment": "Instruction Operation Comment\nInstruction\n\nOperation\n\nComment\nLEAX 10,X X+10 -> X Adds 5-bit constant 10 to X\nLEAX 500,X X+500 -> X Adds 16-bit constant 500 to X\nLEAY A,Y Y+A -> Y Adds 8-bit accumulator to Y\nLEAY D,Y Y+D -> Y Adds 16-bit D accumulator to Y\nLEAU -10,U U-10 -> U Subtracts 10 from U\nLEAS -10,S S-10 -> S Used to reserve area on stack\nLEAS 10,S S+10 -> S Used to 'clean up' stack\nLEAX 5,S S+5 -> X Transfers as well as adds"
    },
    "LEAY": {
        "instr_desc": "Load effective address into stack pointer",
        "description": "Calculates the effective address from the indexed addressing mode and places the address in an indexable register. LEAX and LEAY affect the Z (zero) bit to allow use of these registers as counters and for MC6800 INX/DEX compatibility. LEAU and LEAS do not affect the Z bit to allow cleaning up the stack while returning the Z bit as a parameter to a calling routine, and also for MC6800 INS/DES compatibility.",
        "comment": "Instruction Operation Comment\nInstruction\n\nOperation\n\nComment\nLEAX 10,X X+10 -> X Adds 5-bit constant 10 to X\nLEAX 500,X X+500 -> X Adds 16-bit constant 500 to X\nLEAY A,Y Y+A -> Y Adds 8-bit accumulator to Y\nLEAY D,Y Y+D -> Y Adds 16-bit D accumulator to Y\nLEAU -10,U U-10 -> U Subtracts 10 from U\nLEAS -10,S S-10 -> S Used to reserve area on stack\nLEAS 10,S S+10 -> S Used to 'clean up' stack\nLEAX 5,S S+5 -> X Transfers as well as adds"
    },
    "LSL": {
        "instr_desc": "Logical shift left accumulator or memory location",
        "description": "Shifts all bits of accumulator A or B or memory location M one place to the left.\nBit zero is loaded with a zero.\nBit seven of accumulator A or B or memory location M is shifted into the C (carry) bit.",
        "comment": "This is a duplicate assembly-language mnemonic for the single machine instruction ASL."
    },
    "LSLA": {
        "instr_desc": "Logical shift left accumulator or memory location",
        "description": "Shifts all bits of accumulator A or B or memory location M one place to the left.\nBit zero is loaded with a zero.\nBit seven of accumulator A or B or memory location M is shifted into the C (carry) bit.",
        "comment": "This is a duplicate assembly-language mnemonic for the single machine instruction ASL."
    },
    "LSLB": {
        "instr_desc": "Logical shift left accumulator or memory location",
        "description": "Shifts all bits of accumulator A or B or memory location M one place to the left.\nBit zero is loaded with a zero.\nBit seven of accumulator A or B or memory location M is shifted into the C (carry) bit.",
        "comment": "This is a duplicate assembly-language mnemonic for the single machine instruction ASL."
    },
    "LSR": {
        "instr_desc": "Logical shift right accumulator or memory location",
        "description": "Performs a logical shift right on the operand.\nShifts a zero into bit seven and bit zero into the C (carry) bit.",
        "comment": null
    },
    "LSRA": {
        "instr_desc": "Logical shift right accumulator or memory location",
        "description": "Performs a logical shift right on the operand.\nShifts a zero into bit seven and bit zero into the C (carry) bit.",
        "comment": null
    },
    "LSRB": {
        "instr_desc": "Logical shift right accumulator or memory location",
        "description": "Performs a logical shift right on the operand.\nShifts a zero into bit seven and bit zero into the C (carry) bit.",
        "comment": null
    },
    "MUL": {
        "instr_desc": "Unsigned multiply (A * B ? D)",
        "description": "Multiply the unsigned binary numbers in the accumulators and place the result in both accumulators (ACCA contains the most-significant byte of the result).\nUnsigned multiply allows multiple-precision operations.",
        "comment": "The C (carry) bit allows rounding the most-significant byte through the sequence: MUL, ADCA #0."
    },
    "NEG": {
        "instr_desc": "Negate accumulator or memory",
        "description": "Replaces the operand with its twos complement.\nThe C (carry) bit represents a borrow and is set to the inverse of the resulting binary carry.\nNote that 80 16 is replaced by itself and only in this case is the V (overflow) bit set.\nThe value 00 16 is also replaced by itself, and only in this case is the C (carry) bit cleared.",
        "comment": null
    },
    "NEGA": {
        "instr_desc": "Negate accumulator or memory",
        "description": "Replaces the operand with its twos complement.\nThe C (carry) bit represents a borrow and is set to the inverse of the resulting binary carry.\nNote that 80 16 is replaced by itself and only in this case is the V (overflow) bit set.\nThe value 00 16 is also replaced by itself, and only in this case is the C (carry) bit cleared.",
        "comment": null
    },
    "NEGB": {
        "instr_desc": "Negate accumulator or memory",
        "description": "Replaces the operand with its twos complement.\nThe C (carry) bit represents a borrow and is set to the inverse of the resulting binary carry.\nNote that 80 16 is replaced by itself and only in this case is the V (overflow) bit set.\nThe value 00 16 is also replaced by itself, and only in this case is the C (carry) bit cleared.",
        "comment": null
    },
    "NOP": {
        "instr_desc": "No operation",
        "description": "",
        "comment": null
    },
    "ORA": {
        "instr_desc": "OR memory with accumulator",
        "description": "Performs an inclusive OR operation between the contents of accumulator A or B and the contents of memory location M and the result is stored in accumulator A or B.",
        "comment": null
    },
    "ORB": {
        "instr_desc": "OR memory with accumulator",
        "description": "Performs an inclusive OR operation between the contents of accumulator A or B and the contents of memory location M and the result is stored in accumulator A or B.",
        "comment": null
    },
    "ORCC": {
        "instr_desc": "OR memory with accumulator",
        "description": "Performs an inclusive OR operation between the contents of accumulator A or B and the contents of memory location M and the result is stored in accumulator A or B.",
        "comment": null
    },
    "PAGE 1": {
        "instr_desc": "Page 2 Instructions prefix",
        "description": "Page 1/2 instructions",
        "comment": null
    },
    "PAGE 2": {
        "instr_desc": "Page 2 Instructions prefix",
        "description": "Page 1/2 instructions",
        "comment": null
    },
    "PSHS": {
        "instr_desc": "Push A, B, CC, DP, D, X, Y, U, or PC onto hardware stack",
        "description": "All, some, or none of the processor registers are pushed onto the hardware stack (with the exception of the hardware stack pointer itself).",
        "comment": "A single register may be placed on the stack with the condition codes set by doing an autodecrement store onto the stack (example: STX ,--S)."
    },
    "PSHU": {
        "instr_desc": "Push A, B, CC, DP, D, X, Y, U, or PC onto hardware stack",
        "description": "All, some, or none of the processor registers are pushed onto the hardware stack (with the exception of the hardware stack pointer itself).",
        "comment": "A single register may be placed on the stack with the condition codes set by doing an autodecrement store onto the stack (example: STX ,--S)."
    },
    "PULS": {
        "instr_desc": "Pull A, B, CC, DP, D, X, Y, U, or PC from hardware stack",
        "description": "All, some, or none of the processor registers are pulled from the hardware stack (with the exception of the hardware stack pointer itself).",
        "comment": "A single register may be pulled from the stack with condition codes set by doing an autoincrement load from the stack (example: LDX ,S++)."
    },
    "PULU": {
        "instr_desc": "Pull A, B, CC, DP, D, X, Y, U, or PC from hardware stack",
        "description": "All, some, or none of the processor registers are pulled from the hardware stack (with the exception of the hardware stack pointer itself).",
        "comment": "A single register may be pulled from the stack with condition codes set by doing an autoincrement load from the stack (example: LDX ,S++)."
    },
    "RESET": {
        "instr_desc": "",
        "description": "Build the ASSIST09 vector table and setup monitor defaults, then invoke the monitor startup routine.",
        "comment": null
    },
    "ROL": {
        "instr_desc": "Rotate accumulator or memory left",
        "description": "Rotates all bits of the operand one place left through the C (carry) bit.\nThis is a 9-bit rotation.",
        "comment": null
    },
    "ROLA": {
        "instr_desc": "Rotate accumulator or memory left",
        "description": "Rotates all bits of the operand one place left through the C (carry) bit.\nThis is a 9-bit rotation.",
        "comment": null
    },
    "ROLB": {
        "instr_desc": "Rotate accumulator or memory left",
        "description": "Rotates all bits of the operand one place left through the C (carry) bit.\nThis is a 9-bit rotation.",
        "comment": null
    },
    "ROR": {
        "instr_desc": "Rotate accumulator or memory right",
        "description": "Rotates all bits of the operand one place right through the C (carry) bit.\nThis is a 9-bit rotation.",
        "comment": null
    },
    "RORA": {
        "instr_desc": "Rotate accumulator or memory right",
        "description": "Rotates all bits of the operand one place right through the C (carry) bit.\nThis is a 9-bit rotation.",
        "comment": null
    },
    "RORB": {
        "instr_desc": "Rotate accumulator or memory right",
        "description": "Rotates all bits of the operand one place right through the C (carry) bit.\nThis is a 9-bit rotation.",
        "comment": null
    },
    "RTI": {
        "instr_desc": "Return from interrupt",
        "description": "The saved machine state is recovered from the hardware stack and control is returned to the interrupted program.\nIf the recovered E (entire) bit is clear, it indicates that only a subset of the machine state was saved (return address and condition codes) and only that subset is recovered.",
        "comment": null
    },
    "RTS": {
        "instr_desc": "Return from subroutine",
        "description": "Program control is returned from the subroutine to the calling program.\nThe return address is pulled from the stack.",
        "comment": null
    },
    "SBCA": {
        "instr_desc": "Subtract memory from accumulator with borrow",
        "description": "Subtracts the contents of memory location M and the borrow (in the C (carry) bit) from the contents of the designated 8-bit register, and places the result in that register.\nThe C bit represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "SBCB": {
        "instr_desc": "Subtract memory from accumulator with borrow",
        "description": "Subtracts the contents of memory location M and the borrow (in the C (carry) bit) from the contents of the designated 8-bit register, and places the result in that register.\nThe C bit represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "SEX": {
        "instr_desc": "Sign Extend B accumulator into A accumulator",
        "description": "This instruction transforms a twos complement 8-bit value in accumulator B into a twos complement 16-bit value in the D accumulator.",
        "comment": null
    },
    "STA": {
        "instr_desc": "Store accumulator to memroy",
        "description": "Writes the contents of an 8-bit register into a memory location.",
        "comment": null
    },
    "STB": {
        "instr_desc": "Store accumulator to memroy",
        "description": "Writes the contents of an 8-bit register into a memory location.",
        "comment": null
    },
    "STD": {
        "instr_desc": "Store accumulator to memroy",
        "description": "Writes the contents of an 8-bit register into a memory location.",
        "comment": null
    },
    "STS": {
        "instr_desc": "Store accumulator to memroy",
        "description": "Writes the contents of an 8-bit register into a memory location.",
        "comment": null
    },
    "STU": {
        "instr_desc": "Store accumulator to memroy",
        "description": "Writes the contents of an 8-bit register into a memory location.",
        "comment": null
    },
    "STX": {
        "instr_desc": "Store accumulator to memroy",
        "description": "Writes the contents of an 8-bit register into a memory location.",
        "comment": null
    },
    "STY": {
        "instr_desc": "Store accumulator to memroy",
        "description": "Writes the contents of an 8-bit register into a memory location.",
        "comment": null
    },
    "SUBA": {
        "instr_desc": "Subtract memory from accumulator",
        "description": "Subtracts the value in memory location M from the contents of a designated 8-bit register.\nThe C (carry) bit represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "SUBB": {
        "instr_desc": "Subtract memory from accumulator",
        "description": "Subtracts the value in memory location M from the contents of a designated 8-bit register.\nThe C (carry) bit represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "SUBD": {
        "instr_desc": "Subtract memory from accumulator",
        "description": "Subtracts the value in memory location M from the contents of a designated 8-bit register.\nThe C (carry) bit represents a borrow and is set to the inverse of the resulting binary carry.",
        "comment": null
    },
    "SWI": {
        "instr_desc": "Software interrupt (absolute indirect)",
        "description": "All of the processor registers are pushed onto the hardware stack (with the exception of the hardware stack pointer itself), and control is transferred through the software interrupt vector.\nBoth the normal and fast interrupts are masked (disabled).",
        "comment": null
    },
    "SWI2": {
        "instr_desc": "Software interrupt (absolute indirect)",
        "description": "All of the processor registers are pushed onto the hardware stack (with the exception of the hardware stack pointer itself), and control is transferred through the software interrupt vector.\nBoth the normal and fast interrupts are masked (disabled).",
        "comment": null
    },
    "SWI3": {
        "instr_desc": "Software interrupt (absolute indirect)",
        "description": "All of the processor registers are pushed onto the hardware stack (with the exception of the hardware stack pointer itself), and control is transferred through the software interrupt vector.\nBoth the normal and fast interrupts are masked (disabled).",
        "comment": null
    },
    "SYNC": {
        "instr_desc": "Synchronize with interrupt line",
        "description": "FAST SYNC WAIT FOR DATA\nInterrupt!\nLDA DISC DATA FROM DISC AND CLEAR INTERRUPT\nSTA ,X+ PUT IN BUFFER\nDECB COUNT IT, DONE?\nBNE FAST GO AGAIN IF NOT.",
        "comment": null
    },
    "TFR": {
        "instr_desc": "Transfer R1 to R2",
        "description": "0000 = A:B 1000 = A\n0001 = X 1001 = B\n0010 = Y 1010 = CCR\n0011 = US 1011 = DPR\n0100 = SP 1100 = Undefined\n0101 = PC 1101 = Undefined\n0110 = Undefined 1110 = Undefined\n0111 = Undefined 1111 = Undefined",
        "comment": null
    },
    "TST": {
        "instr_desc": "Test accumulator or memory location",
        "description": "Set the N (negative) and Z (zero) bits according to the contents of memory location M, and clear the V (overflow) bit.\nThe TST instruction provides only minimum information when testing unsigned values; since no unsigned value is less than zero, BLO and BLS have no utility.\nWhile BHI could be used after TST, it provides exactly the same control as BNE, which is preferred.\nThe signed branches are available.",
        "comment": "The MC6800 processor clears the C (carry) bit."
    },
    "TSTA": {
        "instr_desc": "Test accumulator or memory location",
        "description": "Set the N (negative) and Z (zero) bits according to the contents of memory location M, and clear the V (overflow) bit.\nThe TST instruction provides only minimum information when testing unsigned values; since no unsigned value is less than zero, BLO and BLS have no utility.\nWhile BHI could be used after TST, it provides exactly the same control as BNE, which is preferred.\nThe signed branches are available.",
        "comment": "The MC6800 processor clears the C (carry) bit."
    },
    "TSTB": {
        "instr_desc": "Test accumulator or memory location",
        "description": "Set the N (negative) and Z (zero) bits according to the contents of memory location M, and clear the V (overflow) bit.\nThe TST instruction provides only minimum information when testing unsigned values; since no unsigned value is less than zero, BLO and BLS have no utility.\nWhile BHI could be used after TST, it provides exactly the same control as BNE, which is preferred.\nThe signed branches are available.",
        "comment": "The MC6800 processor clears the C (carry) bit."
    }
};
const getDocumentation = (instr) => asm_docs[instr.toUpperCase()]