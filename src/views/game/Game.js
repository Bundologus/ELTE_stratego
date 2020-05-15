import React from 'react'
import { Link } from "react-router-dom";

import f1 from "img/f1.png";
import f2 from "img/f2.png";
import f3 from "img/f3.png";
import f4 from "img/f4.png";
import f5 from "img/f5.png";
import f6 from "img/f6.png";
import f7 from "img/f7.png";
import f8 from "img/f8.png";
import f9 from "img/f9.png";
import f10 from "img/f10.png";
import fb from "img/fb.png";
import ff from "img/ff.png";
import e1 from "img/e1.png";
import e2 from "img/e2.png";
import e3 from "img/e3.png";
import e4 from "img/e4.png";
import e5 from "img/e5.png";
import e6 from "img/e6.png";
import e7 from "img/e7.png";
import e8 from "img/e8.png";
import e9 from "img/e9.png";
import e10 from "img/e10.png";
import eb from "img/eb.png";
import ef from "img/ef.png";

export const Game = () => {
  return (
    <div className="col-12">
      <div id="gameBoardRow" className="row">
        <div
          id="enemyPanel"
          className="col-md-2 status-panel d-flex flex-row justify-content-start"
        >
          <div className="turn-indicator"></div>
          <div className="game-roster d-flex flex-column justify-content-between">
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x1</h3>
                <img className="game roster-image" src={e1} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x8</h3>
                <img className="game roster-image" src={e2} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x5</h3>
                <img className="game roster-image" src={e3} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x4</h3>
                <img className="game roster-image" src={e4} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x4</h3>
                <img className="game roster-image" src={e5} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x4</h3>
                <img className="game roster-image" src={e6} alt="" />
              </div>
            </div>
          </div>
          <div className="game-roster d-flex flex-column justify-content-between">
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x3</h3>
                <img className="game roster-image" src={e7} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x2</h3>
                <img className="game roster-image" src={e8} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x1</h3>
                <img className="game roster-image" src={e9} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x1</h3>
                <img className="game roster-image" src={e10} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x6</h3>
                <img className="game roster-image" src={eb} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x1</h3>
                <img className="game roster-image" src={ef} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 card map-bg game-board">
          <div className="card-body">
            <table className="grid">
              <tbody>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                </tr>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                </tr>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                </tr>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                </tr>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell" colSpan="2" rowSpan="2"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell" colSpan="2" rowSpan="2"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                </tr>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                </tr>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                </tr>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                </tr>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                </tr>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          id="friendlyPanel"
          className="col-md-2 status-panel d-flex flex-row justify-content-end"
        >
          <div className="turn-indicator"></div>
          <div className="game-roster d-flex flex-column justify-content-between">
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x1</h3>
                <img className="game roster-image" src={f1} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x8</h3>
                <img className="game roster-image" src={f2} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x5</h3>
                <img className="game roster-image" src={f3} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x4</h3>
                <img className="game roster-image" src={f4} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x4</h3>
                <img className="game roster-image" src={f5} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x4</h3>
                <img className="game roster-image" src={f6} alt="" />
              </div>
            </div>
          </div>
          <div className="game-roster d-flex flex-column justify-content-between">
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x3</h3>
                <img className="game roster-image" src={f7} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x2</h3>
                <img className="game roster-image" src={f8} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x1</h3>
                <img className="game roster-image" src={f9} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x1</h3>
                <img className="game roster-image" src={f10} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x6</h3>
                <img className="game roster-image" src={fb} alt="" />
              </div>
            </div>
            <div className="game roster-item card">
              <div className="card-body">
                <h3 className="game roster-counter">x1</h3>
                <img className="game roster-image" src={ff} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
