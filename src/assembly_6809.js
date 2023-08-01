"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var Assembly6809HighlightRules = require("./assembly_6809_highlight_rules").Assembly6809HighlightRules;
var FoldMode = require("./folding/coffee").FoldMode;

var Mode = function() {
    this.HighlightRules = Assembly6809HighlightRules;
    this.foldingRules = new FoldMode();
    this.$behaviour = this.$defaultBehaviour;
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = [";"];
    this.$id = "ace/mode/assembly_6809";
}).call(Mode.prototype);

exports.Mode = Mode;
