const KahootJS = require("../index.js");
const gameid = require("./PIN.json");
const client = new KahootJS;

console.log("Joining the game!");
client.join(gameid,"kahoot5.js").then(()=>{
  console.log("Joined!");
}).catch((err)=>{
  console.log("Failed to join: " + err);
});

client.on("QuizStart",(quiz)=>{
  console.log("Quiz Started.");
  console.log(quiz);
  console.log(client.quiz);
});

client.on("QuestionStart",(question)=>{
  console.log("Received question:");
  console.log(question);
  console.log(client.quiz.currentQuestion);
	client.answer(1);
	/*
	 * 0=red
	 * 1=blue
	 * 2=yellow
	 * 3=green
	 */
});

client.on("Disconnect",(reason)=>{
  console.log("Disconnected: " + reason);
});
