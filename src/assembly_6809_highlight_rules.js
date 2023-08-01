/* This file was modified from from Assembly_x86 */
/****************************************************
 * IT MIGHT NOT BE PERFECT ...But it's a good start *
 * fileTypes                                        *
 ****************************************************/

"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var Assembly6809HighlightRules = function () {
  // regexp must not have capturing parentheses. Use (?:) instead.
  // regexps are ordered -> the first match is used

  this.$rules = {
    start:
      [
        // { // special directives
        //   token: 'keyword.control.assembly',
        //   regex: '\\b(end|start|org)\\b',
        //   caseInsensitive: true
        // },
      { // opcodes
        token: 'keyword.control.assembly',
        regex: '\\b(?:ABX|ADCA|ADCB|ADDA|ADDB|ADDD|ANDA|ANDB|ASL|ASLA|ASLB|ASR|ASRA|ASRB|BCC|BCS|BEQ|BGE|BGT|BHI|BHS|BITA|BITB|BLE|BLO|BMI|BNE|BPL|BRA|BRN|BSR|BVC|BVS|CLR|CLRA|CLRB|CMPA|CMPB|CMPD|CMPS|CMPU|CMPX|CMPY|COM|COMA|COMB|CWAI|DAA|DECA|DECB|DEC|DES|DEX|EORA|EORB|EXG|INC|INCA|INCB|JMP|JSR|LBCC|LBCS|LBEQ|LBGE|LBGT|LBHI|LBHS|LBLE|LBLO|LBMI|LBNE|LBPL|LBRA|LBRN|LBVC|LBVS|LDA|LDB|LDD|LDS|LDU|LDX|LDY|LEAS|LEAU|LEAX|LEAY|LSL|LSLA|LSLB|LSR|LSRA|LSRB|MUL|NEG|NEGA|NEGB|NOP|ORA|ORAB|ORCC|PSHS|PSHU|PULS|PULU|ROL|ROLA|ROLB|ROR|RORA|RORB|RTI|RTS|SBCA|SBCB|SEX|STA|STB|STD|STS|STU|STX|STY|SUBA|SUBB|SUBD|SWI|SWI2|SWI3|SYNC|TFR|TST|TSTA|TSTB)\\b',
        caseInsensitive: true
      },
      { // registers
        token: 'variable.parameter.register.assembly',
        regex: '\\b(?:A|B|D|CC|DP|S|U|X|Y|PC)\\b',
        caseInsensitive: true
      },
      { // immediate hex
        token: 'string.assembly',
        regex: '\\s#[\$][0-9A-F]+\\b',
        caseInsensitive: true
      },
      { // immediate LABEL
        token: 'entity.name.function.assembly',
        regex: '\\s#[A-Z0-9_-]+\\b',
        caseInsensitive: true
      },
      { // address hex
        token: 'constant.numeric.address.assembly',
        regex: '\\s[\$][0-9A-F]+\\b',
        caseInsensitive: true
      },
      { // decimal
        token: 'support.constant.assembly',
        regex: '\\b[0-9]+\\b'
      },
      { // chars
        token: 'string.assembly', regex: /'([0-9]+)*'/
      },
      { // strings
        token: 'string.assembly', regex: /"([^\\"]|\\.)*"/ },
      { // directives
        token: 'support.function.directive.assembly',
        regex: '\\b(const|equ|rmb|ds|byte|dw|db|fcb|fcc|setdp|direct|var|org)\\b',
        caseInsensitive: true
      },
      {
        token: 'entity.name.function.assembly', regex: '^[\\w.]+?:'
      },
      {
        token: 'comment.assembly', regex: ';.*$'
      },
      {
        // token: 'invalid', regex: '\\b*\\b'
      }
    ]
  };

  this.normalizeRules();
};

Assembly6809HighlightRules.metaData = {
  fileTypes: ['asm'],
  name: 'Assembly 6809',
  scopeName: 'source.assembly'
};


oop.inherits(Assembly6809HighlightRules, TextHighlightRules);

exports.Assembly6809HighlightRules = Assembly6809HighlightRules;
