import React from "react";

function App() {
  return (
    <body className="container-fluid">
      <h1 className="hidden">Stratego</h1>
      <header className="row text-white-50">
        <h2 className="col-12 d-flex justify-content-center align-items-center">
          <div className="header-text-wrapper">
            <span className="header-text header-text-left">Üdvözli a </span>
          </div>
          <div id="gameTitleWrapper">
            <a id="gameTitle" href="./index.html">
              STRATEGO
            </a>
          </div>
          <div className="header-text-wrapper">
            <span className="header-text header-text-right">, Generális!</span>
          </div>
        </h2>
      </header>
      <main className="row">
        <div className="col-12 container"></div>
      </main>
      <footer className="row">
        <script src="./index.js" type="module"></script>
      </footer>
    </body>
  );
}

export default App;
