jQuery(document).ready(function() {
  var type = new Typed('#type', {
    strings: [
      ' <span class="genAddTextPadding genBlueHighlight typeBoxName">This is an example of Typed.js</span>', // 1
      ' <span class="genAddTextPadding genBlueHighlight typeBoxName">It is a free and open source JS library. </span>', // 1
      ' <span class="genAddTextPadding genRedHighlight typeBoxName">That simulates typing on your website.</span>', // 3
      ' <span class="genAddTextPadding genRedHighlight typeBoxName">You can <del>add some</del> <b>styles to your </b> text <i> as well. </i></span>', // 3
      ' <span class="genAddTextPadding genRedHighlight typeBoxName">Want to learn how?</span>', // 3
      ' <span class="genAddTextPadding genOrangeHighlight typeBoxName">Ask an instructor!</span>', // 3
      ' <span class="genAddTextPadding genYellowHighlight typeBoxName">#Code{Central}</span>',
    ],
    typeSpeed: 30,
    backSpeed: 20,
    backDelay: 1000,
    loop: true
  });
});
