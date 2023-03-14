const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionForm = [
  "What is your name? ",
  "Who is favourite music artist? ",
  "What is your favourite food? ",
  "What is your favourite game (video or table top)? ",
  "Besides coding, what else are you good at? "
];

const returnParagraph = function() {
  const answers = questionForm;
  const blurb = `${answers[0]} is a fascinating alien who loves listening to ${answers[1]} while coding.\n` +
    `Their diet consists mainly of ${answers[2]}. Delicious!\n` +
    `They enjoy playing ${answers[3]} in their free time,\nwhich they don't get much of now that they're at Lighthouse Labs.\n` +
    `You will find that ${answers[0]} has a particular talent for ${answers[4]}.\nThat is cool! We wish we were that cool!\n`;
  return blurb;
};

const myQuestion = function(answer, index) {
  let i = index;
  questionForm[i] = answer;
  if (++i < questionForm.length) {
    rl.question(questionForm[i], answer => {
      myQuestion(answer, i);
    });
  } else {
    rl.close();
    console.log("\n------------------------------------------\n")
    console.log(returnParagraph());
  }
};

const startQuestionnaire = function() {
  rl.question(questionForm[0], answer => {
    myQuestion(answer, 0);
  });
};

startQuestionnaire(questionForm);