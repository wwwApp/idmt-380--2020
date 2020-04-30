import React from "react";

const WSCard = (props) => {
  return (
    <article
      className="card"
      style={{
        width: "22rem",
        minHeight: "15rem",
        backgroundColor: "white",
        color: "black",
        padding: "1.5rem",
        borderRadius: " 0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "0 2rem 2rem 0",
      }}
    >
      <div>
        <h3
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
          }}
        >
          {props.title}
        </h3>
        <p>{props.desc}</p>
      </div>
      {props.buttonText ? (
        <button
          className="button"
          style={{
            padding: "1rem",
            border: "none",
            fontSize: "1rem",
            color: props.fontColor ? props.fontColor : "white",
            borderRadius: "0.5rem",
            backgroundColor: props.buttonColor ? props.buttonColor : "#FA5830",
          }}
        >
          {props.buttonText}
        </button>
      ) : null}
    </article>
  );
};

export default WSCard;
