<div align="center">
  <img height="110" src="https://imgur.com/rkJ1irF.png">
</div>

&nbsp;

[![David](https://img.shields.io/david/Lattice-Automation/seqviz)](https://david-dm.org/Lattice-Automation/seqviz)
[![GitHub](https://img.shields.io/github/license/Lattice-Automation/seqviz)](https://github.com/Lattice-Automation/seqviz/blob/master/LICENSE)
[![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/Lattice-Automation/seqviz?color=green)](https://github.com/Lattice-Automation/seqviz/blob/master/package.json)

**Latest Production Build:** <!-- exec-bash(cmd:echo `date`) -->Mon Dec 16 15:49:01 EST 2019<!-- /exec-bash -->

**Maintained by:** <!-- pkg-author(cmd:) -->[Lattice Automation](https://latticeautomation.com/)<!-- /pkg-author -->

<!-- pkg-description(cmd:) -->DNA sequence viewer supporting custom, GenBank, FASTA, NCBI accession, and iGEM part input<!-- /pkg-description -->

<br>

---

<div align="center">
  <img width="600" src="https://media.giphy.com/media/KH8oxeI0eeu4rpAi0O/giphy.gif">
</div>

---

- [Features](#features)
- [Usage](#usage)
  - [Installation](#installation)
  - [Instantiation](#instantiation)
  - [Viewer](#viewer)
  - [Options](#options)
- [Demo](#demo)
- [Contact Us](#contact-us)

---

## Features

`SeqViz` aims to be a DNA sequence viewer with a simple API and easy customizability. It currently provides:

- **Multiple input formats**:

  - Sequence
  - Accession (NCBI or iGEM)
  - File (FASTA, GenBank, SBOL, SnapGene)

- **Circular Plasmid viewer** :

  - Annotations with names and colors
  - Index of sequence
  - Name of plasmid
  - Base pair length of sequence

- **Linear Sequence viewer** :

  - Annotations with names and colors
  - Amino acid translations
  - Sequence and complement nucleotide bases
  - Index of sequence
  - Enzyme cut sites
  - Highlighted sequence search results

- **Selections**:

  - Clicking on an `annotation`, `translation`, `enzyme` or `searchElement`, or dragging over the sequence, will create a selection
  - Information about selections is available via `options.onSelection()` (see [viewer options](#options))

## Usage

### Installation

#### npm

```bash
npm install seqviz
```

#### CDN

<!-- cdn-example(cmd:) -->

```html
<script src="https://cdn.latticeautomation.com/libs/seqviz/2.0.2/seqviz.min.js"></script>
```

<!-- /cdn-example -->

### Instantiation

#### React

```jsx
import { SeqViz } from "seqviz";

export default () => (
  <SeqViz
    name="J23100"
    seq="TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC"
    annotations={[{ name: "promoter", start: 0, end: 34, direction: 1 }]}
  />
);
```

#### Vanilla-JS

```html
<script>
  window.seqviz
    .Viewer("root", {
      name: "L09136",
      seq: "tcgcgcgtttcggtgatgacggtgaaaacctctgacacatgca"
    })
    .render();
</script>
```

### Viewer

The viewer's constructor (Vanilla-JS) accepts two arguments.

#### `seqviz.Viewer(${element}, ${options})`

- `element` -- either a string id attribute like `"root"` or `"app-root"` or an element; e.g. from `document.getElementById()`
- `options` -- options as documented in greater detail [below](#options)

#### `viewer.render()`

Renders the viewer to the DOM at the node passed in `${element}`.

#### `viewer.renderToString()`

Renders the viewer and returns as an HTML string.

#### `viewer.setState(options)`

Update the viewer's configuration and re-renders.

### Options

All the following are usable as props via the React component (`seqviz.SeqViz`) or as properties of an `options` object via the JS implementation (`seqviz.Viewer()`).

#### Required (one of)

#### `options.seq (='')`

The DNA sequence to render.

#### `options.accession (='')`

An NCBI accession ID or iGEM part ID. Populates `options.name`, `options.seq`, and `options.annotations`.

#### `options.file (=null)`

A [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object from a FASTA, Genbank, SnapGene, or SBOL file. Populates `options.name`, `options.seq`, and `options.annotations`.

#### Optional

#### `options.viewer (='both')`

One of _\["linear", "circular", "both"\]_) the type of viewer to show. "both" by default.

#### `options.name (='')`

The name of the sequence/plasmid.

#### `options.compSeq (='')`

The complement sequence. Inferred from `seq` by default.

#### `options.showComplement (=true)`

Whether to show the complement sequence.

#### `options.showIndex (=true)`

Whether to show the index line and ticks below the sequence.

#### `options.annotations (=[])`

An array of `annotation` objects for the viewer. Each `annotation` object requires 0-based start and end indexes. For forward arrows, set the annotation's direction to `1` and `-1` for reverse arrows (optional). Names (optional) are rendered on top the annotation.

```js
[
  { start: 0, end: 22, name: "Strong promoter", direction: 1 },
  { start: 300, end: 325, name: "Weak promoter", direction: -1 }
];
```

#### `options.translations (=[])`

An array of `translation` objects for rendering ranges of amino acids beneath the DNA sequence. Like `annotation`'s, `translation` objects requires 0-based start and end indexes, relative the DNA sequence, and a direction is required (1 (FWD) or -1 (REV)).

```js
[
  { start: 0, end: 89, direction: 1 },
  { start: 191, end: 521, direction: -1 }
];
```

#### `options.enzymes (=[])`

An array of restriction enzyme names whose recognition sites should be shown. Example: `["PstI", "EcoRI"]`. This is case-insensitive. The list of supported enzymes is in [src/utils/digest/enzymes.js](src/utils/digest/enzymes.js).

#### `options.zoom (={ linear: 50, circular: 0 })`

How zoomed the viewer(s) should be `0-100`. Keyed by viewer type (`options.viewer`).

#### `options.bpColors (={})`

An object mapping bp to color. Example:

```js
{ "A": "#FF0000", "T": "#00FFFF" }
```

#### `options.colors (=[])`

An array of color hex codes for annotation coloring. Defaults to:

```js
[
  "#9DEAED", // cyan
  "#8FDE8C", // green
  "#CFF283", // light green
  "#8CDEBD", // teal
  "#F0A3CE", // pink
  "#F7C672", // orange
  "#F07F7F", // red
  "#FAA887", // red-orange
  "#F099F7", // magenta
  "#C59CFF", // purple
  "#6B81FF", // blue
  "#85A6FF" // light blue
];
```

#### `options.onSelection (=null)`

Callback function executed after selection events. Accepts a single `selection` argument: `(selection) => {}`.

This occurs after drag/drop selection and clicks. If an `annotation`, `translation`, `enzyme` or `searchElement` was clicked, the `selection` object will have an `element` property with info on the selected element. The example below is of a `selection` object following an `annotation` click.

```js
{
  // selection
  "sequenceMeta": {
    "seq": "ctatgcggcatcagagcagattgtactgagagtgcaccatatgcggtgtgaaataccgcacagatgcgtaaggagaaaataccgcatcaggcgccattcgccattcaggctgcgcaactgttgggaagggcgatcggtgcgggcctcttcgctattacgccagctggcgaaagggggatgtgctgcaaggcgattaagttgggtaacgccagggttttcccagtcacgacgttgtaaaacgacggccagtgccaagcttgcatgcctgcaggtcgactctagaggatccccgggtaccgagctcgaattcgtaatcatggtcat",
    "GC": 55.3,
    "Tm": 85
  },
  "selectionMeta": {
    "type": "ANNOTATION",
    "start": 133,
    "end": 457,
    "selectionLength": 324,
    "clockwise": true
  },
  "element": {
    "id": "lxcC1L3M4z",
    "color": "#8FDE8C",
    "name": "lacZ fragment",
    "type": "CDS",
    "start": 133,
    "end": 457,
    "direction": -1
  }
}
```

#### `options.searchQuery (=null)`

A `searchQuery` object for specifying search results to highlight on the viewer.

```js
{ "query": "", "mismatch": 0 }
```

Searching supports the following nucleotide wildcards within the `query`.

```js
{
  "y": ["c", "t"],
  "r": ["a", "g"],
  "w": ["a", "t"],
  "s": ["c", "g"],
  "k": ["g", "t"],
  "m": ["a", "c"],
  "d": ["a", "g", "t"],
  "v": ["a", "c", "g"],
  "h": ["a", "c", "t"],
  "b": ["c", "g", "t"],
  "x": ["a", "c", "g", "t"],
  "n": ["a", "c", "g", "t"]
}
```

`mismatch` is an `int` denoting the maximum allowable mismatch between the query and a match within the viewer's sequence (see: [edit distance](https://en.wikipedia.org/wiki/Edit_distance)).

#### `options.onSearch (=null)`

Callback executed after a search event. Called once on initial render and again after each KeyboardEvent specified within `options.searchNext`. Accepts a single `searchResults` argument: `(searchResults) => {}`. An example of a `searchResults` object is below.

```js
{
  // searchResults
  "searchResults": [
    {
      "start": 728,
      "end": 733,
      "direction": 1,
      "index": 0
    },
    {
      "start": 1788,
      "end": 1793,
      "direction": -1,
      "index": 1
    }
  ],
  "searchIndex": 0
}
```

#### `options.searchNext (={})`

`object` used to set key binding for incrementing through search results. Incrementing scrolls the viewer to the next search result.

You can use any key that is not `ArrowLeft`, `ArrowRight`, `ArrowUp`, or `ArrowDown`. Find the key name for your key press at [keycode.info](https://keycode.info/). If you want to make `searchNext` a special key binding, e.g. `shift + a`, or `alt + .`, you can specify the special key by settings it to `true`.

Defaults to:

```js
{
  "key": "",
  "meta": false,
  "ctrl": false,
  "shift": false,
  "alt": false
}
```

#### `options.copySeq (={})`

`object` used to set the key binding for copying the template strand sequence of your current selection. See `options.searchNext` for more details. After a copy-event, the copied sequence is written to the [user's clipboard](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard).

Defaults to:

```js
{
  "key": "",
  "meta": false,
  "ctrl": false,
  "shift": false,
  "alt": false
}
```

#### `options.backbone (='')`

This is a feature specific to [BioBricks](https://parts.igem.org/Plasmid_backbones/Assembly) (`options.accession`). The library currently supports `BBa_K1362091`, `BBa_K823055`, `pSB1A3`, `pSB1A7`, `pSB1AC3`, `pSB1AK3`, `pSB1AT3`, `pSB1C3`, `pSB1K3`, and `pSB1T3`.

Custom backbones, as DNA strings, are also supported (for example: `ATGATATAGAT`).

## Demo

You can see a demonstration with iGEM BioBricks at: [tools.latticeautomation.com/seqviz](https://tools.latticeautomation.com/seqviz).

For developers, the demo source code is at [seqviz/demo](https://github.com/Lattice-Automation/seqviz/tree/master/demo/README.md).

You can also check out an example of using SeqViz to view NCBI GenBank entries in our [Medium post](https://medium.com/lattice-automation/visualize-your-dna-sequences-with-seqviz-b1d945eb9684).

## Contact Us

This library is currently being maintained by <!-- pkg-author(cmd:) -->[Lattice Automation](https://latticeautomation.com/)<!-- /pkg-author -->.

You can report bugs at <!-- pkg-bug-url(cmd:) -->[Issues](https://github.com/Lattice-Automation/seqviz/issues)<!-- /pkg-bug-url --> or contact us directly at <!-- pkg-bug-email(cmd:) -->[contact@latticeautomation.com](contact@latticeautomation.com)<!-- /pkg-bug-email -->
