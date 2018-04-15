/**
 * @author	"David Coffield"
 * @contact	"coffield@my.erau.edu"
 */
 
var lineStructureOptions = [
  "Adjective, Noun, Gerund, Adverb",
  "Interjection, Pronoun, Verb, Adverb",
  "Preposition, Noun, Conjunction, Pronoun, Verb",
  "Adverb, Gerund, Preposition, Adjective, Noun",
  "Adjective, Noun, Adjective, Noun, Adjective, Noun",
  "Gerund, Preposition, Noun, Gerund, Adverb",
  "Gerund, Preposition, Noun",
  "Adjective, Noun, Conjunction, Adjective, Noun",
  "Simile",
  "Adverb, Gerund, Adverb, Gerund, Adverb, Gerund"
 ];

var numChanges = 0;

/* 
 * Define a function to return a given string with the first letter capitalized.
 */
function firstLetterCapitalized(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* 
 * Define a function to return a random integer given a minimum and maximum.
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * parseInt(max)) + parseInt(min);
}

function getRandomLine() {
 var line = "";
 var lineStructure = getRandomLineStructure();

 var noun = getRandomWord("Noun");
 var pronoun = getRandomWord("Pronoun");
 var verb = getRandomWord("Verb");
 var gerund = getRandomWord("Gerund");
 var adjective = getRandomWord("Adjective");
 var adverb = getRandomWord("Adverb");
 var preposition = getRandomWord("Preposition");
 var conjunction = getRandomWord("Conjunction");
 var interjection = getRandomWord("Interjection");

 switch (lineStructure) {
  case "Adjective, Noun, Gerund, Adverb":
   line += firstLetterCapitalized(adjective.value) + " " + noun.value + " " + gerund.value + " " + adverb.value;
   break;
  case "Interjection, Pronoun, Verb, Adverb":
   if (getRandomNumber(0,1) == 0) {
    line += firstLetterCapitalized(interjection.value) + "!" + " " + firstLetterCapitalized(pronoun.value) + " " + verb.value + " " + adverb.value;
   }
   else {
    line += firstLetterCapitalized(interjection.value) + "," + " " + pronoun.value + " " + verb.value + " " + adverb.value;
   }
   break;
  case "Preposition, Noun, Conjunction, Pronoun, Verb":
   line += firstLetterCapitalized(preposition.value) + " " + noun.value + " " + conjunction.value + " " + pronoun.value + " " + verb.value;
   break;
  case "Adverb, Gerund, Preposition, Adjective, Noun":
   line += firstLetterCapitalized(adverb.value) + " " + gerund.value + " " + preposition.value + " " + adjective.value + " " + noun.value;
   break;
  case "Adjective, Noun, Adjective, Noun, Adjective, Noun":
   line += firstLetterCapitalized(adjective.value) + " " + noun.value + "," + " ";
   adjective = getRandomWord("Adjective");
   noun = getRandomWord("Noun");
   line +=  adjective.value + " " + noun.value + "," + " ";
   adjective = getRandomWord("Adjective");
   noun = getRandomWord("Noun");
   line += adjective.value + " " + noun.value;
   break;
  case "Gerund, Preposition, Noun, Gerund, Adverb":
   line += firstLetterCapitalized(gerund.value) + " " + preposition.value + " " + noun.value + "," + " ";
   gerund = getRandomWord("Gerund");
   line += gerund.value + " " + adverb.value;
   break;
  case "Gerund, Preposition, Noun":
   line += firstLetterCapitalized(gerund.value) + " " + preposition.value + " " + noun.value;
   break;
  case "Adjective, Noun, Conjunction, Adjective, Noun":
   line += firstLetterCapitalized(adjective.value) + " " + noun.value + " " + conjunction.value + " ";
   adjective = getRandomWord("Adjective");
   noun = getRandomWord("Noun");
   line += adjective.value + " " + noun.value;
   break;
  case "Simile":
   if (getRandomNumber(0,1) == 0) {
    if (getRandomNumber(0,1) == 0) {
     line += "As" + " " + adjective.value + " " + "as" + " " + noun.value;
    }
    else {
     line += "Like" + " " + adjective.value + " " + noun.value;
    }
   }
   else {
    if (getRandomNumber(0,1) == 0) { 
     line += "As" + " " + adverb.value + " " + "as" + " " + gerund.value;
    }
    else {
     line +=  firstLetterCapitalized(gerund.value) + " " + adverb.value + "like" + " " + adjective.value + " " + noun.value;
    }
   }
   break;
  case "Adverb, Gerund, Adverb, Gerund, Adverb, Gerund":
   line += firstLetterCapitalized(adverb.value) + " " + gerund.value + "," + " ";
   adverb = getRandomWord("Adverb");
   gerund = getRandomWord("Gerund");
   line +=  adverb.value + " " + gerund.value + "," + " ";
   adverb = getRandomWord("Adverb");
   gerund = getRandomWord("Gerund");
   line += adverb.value + " " + gerund.value;
 }
 line += "<br>";
 return line;
}

function getRandomLineStructure() {
 return lineStructureOptions[(getRandomNumber(0,lineStructureOptions.length-1))];
}

function getRandomWord(wordType) {
 var word = {};
 var vocabulary = {};
 if (wordType == "Pronoun" || wordType == "Preposition" || wordType == "Conjunction" || wordType == "Interjection") {
  vocabulary = dictionary.common;
 }
 else {
  if (getRandomNumber(1,3) > 1) {
   vocabulary = dictionary.technology;
  }	
  else {
   vocabulary = dictionary.common;
  }
 }
 switch (wordType) {
  case "Noun":
   wordIndex = getRandomNumber(0,vocabulary.nouns.length-1);
   word = {
    value:vocabulary.nouns[wordIndex]
   };
   break;
  case "Pronoun":
   wordIndex = getRandomNumber(0,vocabulary.pronouns.length-1);
   word = {
    value:vocabulary.pronouns[wordIndex]
   };
   break;
  case "Verb":
   wordIndex = getRandomNumber(0,vocabulary.verbs.length-1);
   word = {
    value:vocabulary.verbs[wordIndex]
   };
   break;
  case "Gerund":
   wordIndex = getRandomNumber(0,vocabulary.gerunds.length-1);
   word = {
    value:vocabulary.gerunds[wordIndex]
   };
   break;
  case "Adjective":
   wordIndex = getRandomNumber(0,vocabulary.adjectives.length-1);
   word = {
    value:vocabulary.adjectives[wordIndex]
   };
   break;
  case "Adverb":
   wordIndex = getRandomNumber(0,vocabulary.adverbs.length-1);
   word = {
    value:vocabulary.adverbs[wordIndex]
   };
   break;
  case "Preposition":
   wordIndex = getRandomNumber(0,vocabulary.prepositions.length-1);
   word = {
    value:vocabulary.prepositions[wordIndex]
   };
   break;
  case "Conjunction":
   wordIndex = getRandomNumber(0,vocabulary.conjunctions.length-1);
   word = {
    value:vocabulary.conjunctions[wordIndex]
   };
   break;
  case "Interjection":
   wordIndex = getRandomNumber(0,vocabulary.interjections.length-1);
   word = {
    value:vocabulary.interjections[wordIndex]
   };
 }
 return word;
}

function getRandomPoem(numLines) {
 var poem = [];
 for (var i = 0; i < numLines; i++) {
  poem.push("<span id='" + i + "' onclick='changeLine(" + i + ")'>" + getRandomLine() + "</span>");
 }
 return poem.join("");
}

function changeLine(spanID) {
 document.getElementById(spanID).innerHTML = getRandomLine();
 document.getElementById("changeCount").innerText = ++numChanges;
}

function writeRandomPoem(numLines) {
 if(numLines > 0 && numLines <= 25) {
  document.getElementById("poemDiv").innerHTML = getRandomPoem(numLines);
  numChanges = 0;
  document.getElementById("changeCount").innerText = numChanges;
 }
 else {
  alert("Please enter a number between 1 and 25");
 }
}
