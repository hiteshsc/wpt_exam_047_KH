/// /// without backend connectivity

import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div className="container">
      <Header />
      <Chatbox />
    </div>
  );
}

function Header() {
  const [head, setHead] = useState({
    appName: "MyChatApp",
    stdName: "Hitesh Subhash Chaudhari",
    id: 210940320047,
  });
  return (
    <>
      <header className="bg-secondary text-light d-flex align-items-baseline">
        <h2>{head.appName}</h2>
        <span>{head.stdName} / </span>
        <span>{head.id}</span>
      </header>
    </>
  );
}

function Chatbox() {
  const [inputValue, setInputValue] = useState("");
  const [chat, setChat] = useState([]);
  const sendMessage = (e) => {
    const valid = e.target.nextElementSibling.classList;
    if (inputValue == "") {
      console.dir(e.target.nextElementSibling);
      valid.remove("d-none");
      return;
    }
    axios.post("http://localhost:4000/insert", { value: inputValue });
    setChat([...chat, inputValue]);
    setInputValue("");
    valid.add("d-none");
  };
  let msgClass = " bg-light px-4 py-1 m-2";
  return (
    <>
      <section className="row ">
        <input
          type="text"
          className="form-control-lg col-10"
          value={inputValue}
          placeholder="Lets chat here..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="form-control-lg col-2" onClick={sendMessage}>
          send
        </button>
        <div className="d-none alert alert-danger">Please type the message</div>
      </section>
      <section>
        {chat.map((message, index) => {
          return (
            <div
              key={index}
              className={
                index % 2 == 0
                  ? "text-start " + msgClass
                  : "text-end " + msgClass
              }
            >
              {message}
            </div>
          );
        })}
      </section>
    </>
  );
}
export default App;
