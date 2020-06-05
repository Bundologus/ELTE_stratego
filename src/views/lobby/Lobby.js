import React from "react";
import { Link } from "react-router-dom";
import { ItemCard } from "../itemCard/ItemCard";
import { v4 } from "uuid";

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

export const Lobby = () => {
  const images = [
    { id: v4(), tpye: f1, count: 1 },
    { id: v4(), tpye: f2, count: 8 },
    { id: v4(), tpye: f3, count: 5 },
    { id: v4(), tpye: f4, count: 4 },
    { id: v4(), tpye: f5, count: 4 },
    { id: v4(), tpye: f6, count: 4 },
    { id: v4(), tpye: f7, count: 3 },
    { id: v4(), tpye: f8, count: 2 },
    { id: v4(), tpye: f9, count: 1 },
    { id: v4(), tpye: f10, count: 1 },
    { id: v4(), tpye: fb, count: 6 },
    { id: v4(), tpye: ff, count: 1 },
  ];
  return (
    <div className="col-12 container">
      <div id="lobbyBoardRow" className="row">
        <div className="col-12 card map-bg lobby-board lobby-width">
          <div className="card-body">
            <table className="grid">
              <tbody>
                <tr>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell" colSpan="2"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell"></td>
                  <td className="grid-cell" colSpan="2"></td>
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
      </div>
      <div id="lobbyRosterRow" className="row">
        <div
          id="lobbyRosterWrapper"
          className="lobby-width d-flex flex-row justify-content-between"
        >
          {images.map((img) => {
            return (
              <ItemCard
                key={img.id}
                imgFile={img.type}
                count={img.count}
                placementClass="lobby"
              ></ItemCard>
            );
          })}
        </div>
      </div>
      <div className="row lobby-btn-row">
        <div className="col-12 d-flex flex-row align-items-center justify-content-center">
          <Link
            type="button"
            to="/"
            id="backToIndex"
            className="btn menu-btn menu-btn-color lobby-btn d-flex align-items-center justify-content-center"
          >
            Vissza a kezdőlapra
          </Link>
          <Link
            type="button"
            to="/game"
            id="startGameBtn"
            className="btn menu-btn lobby-btn d-flex align-items-center justify-content-center"
          >
            Kész!
          </Link>
        </div>
      </div>
    </div>
  );
};
