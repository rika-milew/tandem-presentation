import Reveal from 'https://unpkg.com/reveal.js@4.4.0/dist/reveal.esm.js';
import Markdown from 'https://unpkg.com/reveal.js@4.4.0/plugin/markdown/markdown.esm.js';
import Notes from 'https://unpkg.com/reveal.js@4.4.0/plugin/notes/notes.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import '/shared/style.css';

const deck = new Reveal();

deck.initialize({
  hash: true,
  slideNumber: true,
  plugins: [Markdown, Notes],
  transition: 'fade',
  controls: true,
  progress: true,
});