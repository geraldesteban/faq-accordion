import { useState } from "react";

const questionAndAnswers = {
  questions: [
    "What is Frontend Mentor, and how will it help me?",
    "Is Frontend Mentor free?",
    "Can I use Frontend Mentor projects in my portfolio?",
    "How can I get help if I'm stuck on a Frontend Mentor challenge?",
  ],
  answers: [
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  ],
};

export function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <div>
      {questionAndAnswers.questions.map((q, index) => (
        <div key={index}>
          <div className="q-icon" onClick={() => handleToggle(index)}>
            <p className="questions animate__animated animate__fadeInDown">
              {q}
            </p>
            <img
              src={
                openIndex === index
                  ? "../images/icon-minus.svg"
                  : "../images/icon-plus.svg"
              }
              alt="icon"
              className="icons animate__animated animate__jello"
            />
          </div>
          {openIndex === index && questionAndAnswers.answers[index] && (
            <p className="answers animate__animated animate__fadeInUp">
              {questionAndAnswers.answers[index]}
            </p>
          )}
          {index < questionAndAnswers.questions.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}
