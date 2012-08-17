// Vex Flow Notation
// Implements clefs
//
// Requires vex.js.

/** 
 * @constructor 
 */
Vex.Flow.Clef = function(clef) { 
  if (arguments.length > 0) this.init(clef); 
}

Vex.Flow.Clef.types = {
  "treble": {
    code: "v83",
    point: 40,
    line: 3
  },
  "bass": {
    code: "v79",
    point: 40,
    line: 1
  },
  "alto": {
    code: "vad",
    point: 40,
    line: 2
  },
  "tenor": {
    code: "vad",
    point: 40,
    line: 1
  },
  "percussion": {
    code: "v59",
    point: 40,
    line: 2
  },
  "soprano": {
    code: "vad",
    point: 40,
    line: 4
  },
  "octave": {
    code: "v83",
    point: 40,
    line:3,
    octave: true
  }
};

Vex.Flow.Clef.prototype = new Vex.Flow.StaveModifier();
Vex.Flow.Clef.prototype.constructor = Vex.Flow.Clef;
Vex.Flow.Clef.superclass = Vex.Flow.StaveModifier.prototype;

Vex.Flow.Clef.prototype.init = function(clef) {
  var superclass = Vex.Flow.Clef.superclass;
  superclass.init.call(this);

  this.clef = Vex.Flow.Clef.types[clef];
}

Vex.Flow.Clef.prototype.addModifier = function(stave) {
  var glyph = new Vex.Flow.Glyph(this.clef.code, this.clef.point);
  this.placeGlyphOnLine(glyph, stave, this.clef.line);
  
  if (this.clef.octave) {
    var glyph2 = new Vex.Flow.Glyph('v8', 20);
    this.placeGlyphOnLine(glyph2, stave, 6.5);
    glyph2.setXShift(12);
    stave.addGlyph(glyph2);
  }
  
  stave.addGlyph(glyph);
  
}
