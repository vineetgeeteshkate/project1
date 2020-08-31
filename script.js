/*
Solution of assignment 4:
Expected output:
Hello Vineet
Good Bye Durva
Good Bye Mow
Good Bye Aarush
Hello Tom
Hello Jerry
Hello Jason
Hello Jerr
Hello Laura
Good Bye Jim
*/

(function() {
    var names = ["Vineet", "Durva", "Mow", "Aarush", "tom", "Jerry", "Jason", "Jerr", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();