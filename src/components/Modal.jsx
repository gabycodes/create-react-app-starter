import React from "react";

// text
// onClick

const Modal = () => (title, content, buttons) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      {buttons.map(({ onClick, text }) => (
        <button onClick={onClick} key={text}>
          {text}
        </button>
      ))}
    </div>
  );
};

export default Modal;
