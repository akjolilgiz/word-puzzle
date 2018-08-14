$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentence = $("#sentenceInput").val();
    var letters = sentence.split("");
    var vowel = ['a','e','i','o','u']

    for(var index = 0; index < letters.length; index +=1){
      if (vowel.includes(letters[index])) {letters.splice(index, 1, "-")
    }
    }
    var joinSentence = letters.join("");

    alert(joinSentence);

    // for (var index = 0; index < blanks.length; index +=1){
    //   $("."+blanks[index]).text($("input#"+blanks[index]).val());
    // }


    $("#story").show();

    event.preventDefault();
  });
});
