import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const askQuestion = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};
