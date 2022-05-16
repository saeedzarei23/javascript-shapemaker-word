// تمرین شمار 1
// function that take sentence and find how many
// time one word has repeat in that sentence
function findMeWrod(text, word) {
  // variabel that let us know how many time word has repeat in sentance
  let x = 0;
  // variabel that let us know if word did not reapeat
  let z = 0;
  //  loop for searching in to text
  if (text.includes(word)) {
    for (let i = 0; i < text.length; i++) {
      // condition to see if word exist in the text or not
      // if there is no word like whawe are looking for loop
      // end here and we go to  return
      if (text[i] == word[0]) {
        //  loop is starting from where we find first word
        for (let j = i; j < i + word.length; j++) {
          // if we loop through text and it's not equal to world with loop of [j-i]
          //   then we add one to z
          if (text[j] == word[j - i]) {
            z++;
          }
          //   if we have one word then we add one to the x that is
          // the final number that we are going to show
          if (z == word.length) {
            x++;
          }
        }
        // in end we turn variabel z into 0
        z = 0;
      }
    }
  }
  // give us the final result
  return "'" + word + "' was found " + x + " times.";
}
console.log(
  findMeWrod(
    "hello im here to buy brandnew car can you help me. what kind of car are you looking for ",
    "car"
  )
);

// تمرین شمار 2

// function for makeing shape to increase by one

function inc(row) {
  // loop is saterting from one and end in the row number
  for (let i = 1; i <= row; i++) {
    //   shape of pattern and how time it repet
    let star = "* ".repeat(i);
    console.log(star);
  }
}
inc();
// تمرین شمار 3
// function for makeing shape to decrease by one
function dec(row) {
  // loop start from row number and get decrease by one in the end
  for (let i = row; i >= 1; i--) {
    //   shape of pattern and how time it repet
    let star = "* ".repeat(i);
    console.log(star);
  }
}
// تمرین شمار 4
// function for makeing shape of half dimond by one
dec();
function shape(number) {
  for (let i = 0; i <= number; i++) {
    let star = "* ".repeat(i + 1);
    console.log(star);
  }
  for (let i = number; i >= 1; i--) {
    let star = "* ".repeat(i);
    console.log(star);
  }
}
shape();
