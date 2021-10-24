# Midi Editor/Piano Roll for Max Msp

### Installation

#### download dependencies and third-party utility

- XPianoRoll uses nw.js for the editor. It's preferable to use the sdk version to see the commands exchanged between pd and nw.
Console can be opened by F12. nw.js can be downloaded from here:
https://nwjs.io/

- To open nwjs the [shell] object is needed:
https://github.com/jeremybernstein/shell/releases/tag/1.0b3

- For the tcp connection the saddam library is needed. Install it inside of Max.

Download the XPianoRoll folder to your Max library folder.

Open xpianoroll.maxpat and adjust the path to nw.js inside [p open_gui] 


### Shortcuts and Controls

For a description and a list of available shortcuts click on the faces in the upper left corner of the editor.

- ITEMS
	- created and deleted by clicking and drawing
	- can be moved and resized by dragging
- SELECTIONS
	- selections of a row or by dragging
	- selections can be extended or deleted
	- selections can be moved on x an y-axis
- SNAPSHOTS
	- up to 10 snapshots can be taken and recalled
- TRANSPORT
	- possibility of defining an inner loop region
- PARAMETERS
	- custom parameters with custom settings (start, scope, step)
- SOLO/MUTE
	- usefull for replay and editing
- MIDI
	- imports midi files of type 1


Tested with Max 8.2.0 on win10.

pd vanilla needs following libraries: zexy, moocow, mrpeach and hcs. moonlib is needed for the synth in the example.

The handling of the editor is done with pd. The editor might be controlled by any other program using tcp ports 8150 (server) / 8151 (client) for communication.
 


![alt tag](XPianoRoll/gui/buttons/seq1.png)
![alt tag](XPianoRoll/gui/buttons/seq2.png)
![alt tag](XPianoRoll/gui/buttons/seq3.png)



The code of the midi import filter was taken from:

https://github.com/gasman/jasmid and https://github.com/NHQ/midi-file-parser

Thanks to the authors!
