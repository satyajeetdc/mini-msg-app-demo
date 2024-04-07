const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then((res) => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Satyajeet",
    to: "Kshitiz",
    msg: "I am fine, wbu?",
    created_at: new Date(),
  },
  {
    from: "Kshitiz",
    to: "Satyajeet",
    msg: "Where have you been??",
    created_at: new Date(),
  },
  {
    from: "Satyajeet",
    to: "Kshitiz",
    msg: "Just a little busy in Lucknow",
    created_at: new Date(),
  },
  {
    from: "Kshitiz",
    to: "Satyajeet",
    msg: "Ok, lets meet soon.",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
