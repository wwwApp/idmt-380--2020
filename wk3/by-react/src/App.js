import React from "react";
import "./App.scss";
import Header from "./assets/components/Header";
import Card from "./assets/components/Card";
import SectionHeader from "./assets/components/SectionHeader";

function App() {
  const content = {
    title: "Lorem Ipsum",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    buttonText: "More Detail",
    buttonColor: "#fa5830",
  };

  const content2 = {
    title: "Lorem Ipsum",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    buttonText: "More Detail",
    buttonColor: "#32B37A",
  };
  return (
    <div className="inner">
      <Header />
      <main className="main container">
        <section className="card-container">
          <SectionHeader
            title="Section Header"
            desc="consectetur adipiscing elit, consectetur adipiscing elit"
          />
          <Card content={content} />
          <Card content={content} />
          <Card content={content} />
          <Card content={content} />
          <Card content={content} />
        </section>
        <section className="card-container">
          <SectionHeader
            title="Section Header2"
            desc="consectetur adipiscing elit, consectetur adipiscing elit"
          />
          <Card content={content2} />
          <Card content={content2} />
          <Card content={content2} />
          <Card content={content2} />
          <Card content={content2} />
        </section>
      </main>
    </div>
  );
}

export default App;
