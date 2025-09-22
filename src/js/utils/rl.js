import readline from "readline";

let rl;

function createInterface() {
  if (!rl) {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  return rl;
}

export const askQuestion = function (question) {
  return new Promise((resolve) => {
    const readlineInterface = createInterface();
    readlineInterface.question(question, (input) => {
      resolve(input);
    });
  });
};

export const closeReadline = () => {
  if (rl) {
    rl.close();
    rl = null;
  }
};
