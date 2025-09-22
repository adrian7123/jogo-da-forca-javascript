import { Game } from "./js/core/game.js";
import { askQuestion, closeReadline } from "./js/utils/rl.js";

const game = new Game();

game.on("secretWord", async (question) => {
  const input = await askQuestion(question);

  game.emit("secretWord", input.trim());
});

game.on("question", async (question) => {
  const input = await askQuestion(question);

  game.emit("answer", input.trim());
});

game.on("body", (content) => {
  console.log(content);
});

game.on("clear", () => {
  console.clear();
});

try {
  await game.init();
} finally {
  closeReadline();
}
