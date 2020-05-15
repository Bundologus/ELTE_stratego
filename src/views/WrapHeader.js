import React from 'react';
import { Link } from 'react-router-dom';

export const WrapHeader = props => {
  const { children } = props;

  return (
    <div className="container-fluid">
      <h1 className="hidden">Stratego</h1>
      <header className="row text-white-50">
        <h2 className="col-12 d-flex justify-content-center align-items-center">
          <div className="header-text-wrapper">
            <span className="header-text header-text-left">Üdvözli a </span>
          </div>
          <div id="gameTitleWrapper">
            <Link id="gameTitle" to="/">
              STRATEGO
          </Link>
          </div>
          <div className="header-text-wrapper">
            <span className="header-text header-text-right">, Generális!</span>
          </div>
        </h2>
      </header>
      <main className="row">
        {children}
      </main>
      <footer className="row">
      </footer>
    </div>
  );
};