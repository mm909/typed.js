jQuery(document).ready(function() {
  var type1 = new Typed('#type1', {
    strings: [
      ' <span class="genAddTextPadding genBlueHighlight typeBoxName">This is an example of typed.js</span>',
      ' <span class="genAddTextPadding genBlueHighlight typeBoxName">It is a free and open source javascript library. </span>',
      ' <span class="genAddTextPadding genRedHighlight typeBoxName">That simulates typing on your website.</span>',
      ' <span class="genAddTextPadding genRedHighlight typeBoxName">You can <del>add some</del> <b>styles to your </b> text <i> as well. </i></span>',
      ' <span class="genAddTextPadding genRedHighlight typeBoxName">Want to learn how?</span>',
      ' <span class="genAddTextPadding genOrangeHighlight typeBoxName">Ask an instructor!</span>',
      ' <span class="genAddTextPadding genYellowHighlight typeBoxName">#Code{Central}</span>',
    ],
    typeSpeed: 0,
    backSpeed: 0,
    backDelay: 3000,
    loop: true,
    cursor: false
  });
  var type2 = new Typed('#type2', {
    strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
  var type3 = new Typed('#type3', {
    strings: ['My strings are: <i>strings</i> with', 'My strings are: <strong>HTML</strong>', 'My strings are: Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true
  });

  var type4 = new Typed('#type4', {
    strings: ['Some strings without', 'Some HTML', 'Chars'],
    typeSpeed: 0,
    backSpeed: 0,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true
  });
  var type5 = new Typed('#type5', {
    strings: [
      ' <span class="genAddTextPadding genRedHighlight typeBoxName">Want to learn how?</span>',
      ' <span class="genAddTextPadding genOrangeHighlight typeBoxName">Ask an instructor!</span>',
      ' <span class="genAddTextPadding genYellowHighlight typeBoxName">#Code{Central}</span>',
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 5000,
    loop: true
  });
  var type6 = new Typed('#type6', {
    strings: ['npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'],
    typeSpeed: 40,
    backSpeed: 0,
    loop: true
  });
});