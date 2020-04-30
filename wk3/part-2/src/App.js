import React from "react";
import "./App.css";
import WSCard from "react-ws-card";

function App() {
  return (
    <div className="App">
      <header class="header">
        <h1>
          <a href="#">WS</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#">Plans</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main class="main">
        <section class="section">
          <div class="section-title-wrapper">
            <h2 class="section__title">Quis Nostrud</h2>
            <p class="section__desc">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div class="section-button-wrapper">
            <WSCard
              title="Laboris nisi"
              desc="quis nostrud exercitation sunt in culpa qui officia deserunt mollit anim id est laborum."
              buttonText="Laboris"
            />
            <WSCard
              title="Enim Ad"
              desc="quis nostrud exercitation commodo consequat esse cillum dolore eu fugiat nulla pariatur"
              buttonText="Laboris"
            />
          </div>
          <div class="section__image">
            <img
              src="https://media.istockphoto.com/vectors/star-universe-background-illustration-flat-design-for-kid-vector-id941365072?k=6&m=941365072&s=170667a&w=0&h=9tB7wDjEUbEkUvYbL061LDqVsyAm56pX34fOCa6wo9Q="
              alt="page header background image"
            />
          </div>
        </section>
      </main>
      <footer class="footer">Made with &#128150;</footer>
    </div>
  );
}

export default App;
