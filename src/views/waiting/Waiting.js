import React from 'react'
import { Link } from "react-router-dom";

export const Waiting = () => {
  return (
    <div className="col-12 container">
      <div className="row" id="buttonsRow">
        <h2 className="hidden">Váró</h2>
        <div className="col-md-2"></div>
        <div className="col-md-8 d-flex flex-column align-items-md-center">
          <p className="waitingRoomText waitingRoomItem">
            Várakozás második játékosra...
            </p>
          <p id="waitingRoomId" className="waitingRoomText waitingRoomItem">
            123&nbsp;456&nbsp;789
            </p>
          <Link type="button" to="/" id="backToIndex" className="btn menu-btn menu-btn-color waitingRoomItem d-flex align-items-center justify-content-center">
            Vissza a kezdőlapra
            </Link>
        </div>
        <div className="col-md-2"></div>
      </div>
      <Link type="button" to="/lobby" id="backToIndex" className="btn debug-btn d-flex align-items-center justify-content-center">[DEBUG] előkészítő lapra >>></Link>
    </div>
  )
}