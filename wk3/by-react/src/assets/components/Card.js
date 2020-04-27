import React from "react";
import Button from "./Button";

const Card = (props) => {
  const { content } = props;
  return (
    <article className="card">
      <div>
        <h3>{content.title}</h3>
        <p>{content.desc}</p>
      </div>
      <Button text={content.buttonText} color={content.buttonColor} />
    </article>
  );
};

export default Card;
