echo "1. Combining Javascript"

cat src/vex.js src/flow.js src/fonts/vexflow_font.js src/glyph.js src/tables.js src/stave.js src/staveconnector.js src/tabstave.js src/voice.js src/modifier.js src/modifiercontext.js src/accidental.js src/dot.js src/tickcontext.js src/tickable.js src/note.js src/bend.js src/stavenote.js src/tabnote.js src/barnote.js src/ghostnote.js src/formatter.js src/stavetie.js src/tabtie.js src/tabslide.js src/beam.js src/vibrato.js src/annotation.js src/tuning.js src/stavemodifier.js src/keysignature.js src/timesignature.js src/clef.js src/music.js src/keymanager.js src/renderer.js src/stavebarline.js src/stavevolta.js src/staverepetition.js src/stavesection.js src/articulation.js src/raphaelcontext.js > build/vexflow/tmp.js

echo "2. Compressing with YUI"
java -jar support/yuicompressor.jar --type js -o build/vexflow/vexflow-free.js build/vexflow/tmp.js

rm build/vexflow/tmp.js
