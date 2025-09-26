import { useState, useRef, useEffect } from "react";

const Term = () => {
  const terminalRef = useRef(null);

  // Command outputs
  const must = "Windows:Devprojects User$ ";
  const commands = {
  ls: "pro - profile | abt - about | tech - technical stack info | mail - send me a mail | social - social directory | help - list commands | hobbies - my hobbies | contact - contact info | skills - my skills | joke - programmer joke | quote - motivational/fun quote | motto - personal motto",
  pro: "Hello! I'm Omkar, a full stack web developer. I create visually appealing web pages and web-applications.",
  abt: "I'm Omkar Jadhav, a MERN Stack Developer from India. I enjoy UI/UX design, playing football, sleeping 😎, and creating fun web projects.",
  tech: "HTML | CSS | JS | jQuery | Bootstrap | TailwindCSS | ReactJS | NodeJS | ExpressJS | MongoDB | NoSQL | MaterialUI | Python | Git",
  social: "insta - Instagram | git - Github | coffee - Buy Me a Coffee | linkedin - Linkedin | twitter - Twitter",
  help: "Available commands: ls, pro, abt, tech, social, hobbies, contact, skills, joke, quote, motto",
  hobbies: "Football ⚽ | UI/UX Design 🎨 | Coding 💻 | Gaming 🎮 | Music 🎧",
  contact: "Email: ojadhav250@gmail.com | Github: github.com/omkarjninja | Linkedin: linkedin.com/in/omkar-jadhav-a09878249/",
  skills: "Front-end: HTML, CSS, JS, ReactJS, TailwindCSS | Back-end: NodeJS, ExpressJS | Database: MongoDB, NoSQL | Tools: Git, MaterialUI, Bootstrap",
  joke: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  quote: "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  motto: "Keep learning, keep building, keep improving. 💡",
};



  const socialLinks = {
    insta: "https://www.instagram.com/omkar_jadhav_ninja/",
    linkedin: "https://www.linkedin.com/in/omkar-jadhav-a09878249/",
    twitter: "https://twitter.com/omkarjadhavninj",
    coffee: "https://www.buymeacoffee.com/omkarjadhav",
    git: "https://github.com/omkarjninja",
    mail: "mailto:ojadhav250@gmail.com",
  };

  const [history, setHistory] = useState([
    "Windows PowerShell",
    "Copyright (C) Microsoft Corporation. All rights reserved.",
    `${must}Press ls to get all available commands`,
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleCommand = (value) => {
    value = value.toLowerCase();
    if (socialLinks[value]) {
      window.open(socialLinks[value], "_blank");
      setHistory((prev) => [...prev, `${must}Opening ${value}...`]);
    } else if (commands[value]) {
      setHistory((prev) => [...prev, `${must}${commands[value]}`]);
    } else {
      setHistory((prev) => [...prev, `${must}Command not recognized!`]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputVal.trim() !== "") {
      handleCommand(inputVal.trim());
      setInputVal("");
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [history]);

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-full  bg-black rounded-xl shadow-xl">
        <div
          ref={terminalRef}
          className="h-96 overflow-y-auto p-4 font-mono text-green-400 text-sm"
        >
          {history.map((line, idx) => (
            <p key={idx} className="mb-1 break-words">
              {line}
            </p>
          ))}
          <div className="flex">
            <span className="mr-1">{must}</span>
            <input
              type="text"
              spellCheck="false"
              autoFocus
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent flex-1 outline-none text-green-400 caret-green-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;
