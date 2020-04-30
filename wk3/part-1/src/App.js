import React from "react";
import "./App.scss";
import Header from "./assets/components/Header";
import SectionHeader from "./assets/components/SectionHeader";
import WSCard from "react-ws-card";

function App() {
  const content = {
    title: "Lorem Ipsum",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    buttonText: "More Detail",
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
          <WSCard
            title={content.title}
            desc={content.desc}
            buttonText={content.buttonText}
          />
          <WSCard
            title={content.title}
            desc={content.desc}
            buttonText={content.buttonText}
          />
          <WSCard
            title={content.title}
            desc={content.desc}
            buttonText={content.buttonText}
          />
          <WSCard
            title={content.title}
            desc={content.desc}
            buttonText={content.buttonText}
          />
          <WSCard
            title={content.title}
            desc={content.desc}
            buttonText={content.buttonText}
          />
        </section>
        <section className="card-container">
          <SectionHeader
            title="Section Header2"
            desc="consectetur adipiscing elit, consectetur adipiscing elit"
          />
          <WSCard
            title={content.title}
            desc={content2.desc}
            buttonText={content2.buttonText}
            buttonColor={content2.buttonColor}
          />
          <WSCard
            title={content.title}
            desc={content2.desc}
            buttonText={content2.buttonText}
            buttonColor={content2.buttonColor}
          />
          <WSCard
            title={content.title}
            desc={content2.desc}
            buttonText={content2.buttonText}
            buttonColor={content2.buttonColor}
          />
          <WSCard
            title={content.title}
            desc={content2.desc}
            buttonText={content2.buttonText}
            buttonColor={content2.buttonColor}
          />
          <WSCard
            title={content.title}
            desc={content2.desc}
            buttonText={content2.buttonText}
            buttonColor={content2.buttonColor}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
