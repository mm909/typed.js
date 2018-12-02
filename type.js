let firstType = true;
jQuery(document).ready(function() {
  var type = new Typed('#type', {
    strings: [
      ' <span class="genAddTextPadding genBlueHighlight typeBoxName">Who I am?<span>', // 1
      ' <span class="genAddTextPadding genBlueHighlight typeBoxName">I am ...!</span>', // 1
      ' <span class="genAddTextPadding genRedHighlight typeBoxName">I am a Leader.</span>', // 3
      ' <span class="genAddTextPadding genRedHighlight typeBoxName">I am a Code Central Member.</span>', // 3
      ' <span class="genAddTextPadding genRedHighlight typeBoxName">I am a Gamer.</span>', // 3
      ' <span class="genAddTextPadding genOrangeHighlight typeBoxName">I am a Programmer.</span>', // 3
      ' <span class="genAddTextPadding genOrangeHighlight typeBoxName">I am a Volunteer.</span>', // 3
      ' <span class="genAddTextPadding genOrangeHighlight typeBoxName">I am a Mentor.</span>', // 3
      ' <span class="genAddTextPadding genYellowHighlight typeBoxName">I am Mikian Musser.</span>',
      // ' <div class="genAddTextPadding genDarkYellowHighlight typeBoxName"><h1>Mikian Musser</h1><p>(702)540-4190</p><p>Bobar312@gmail.com</p></div>'
    ],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 30,
    startDelay: 0,
  });
});
