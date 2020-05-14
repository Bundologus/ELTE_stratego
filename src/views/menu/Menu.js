import React from "react";

function Menu() {
  return (
    <div className="row" id="buttonsRow">
      <h2 className="hidden">Játék</h2>
      <div className="col-md-2"></div>
      <div id="menuButtonWrapper" className="col-md-8 d-flex flex-row justify-content-between">
        <a type="button" role="button" href="waiting.html" className="btn menu-btn menu-btn-color d-flex align-items-center justify-content-center">
          Új Játék Indítása
        </a>
        <div className="dropdown menu-btn">
          <button id="join-room-btn" type="button" className="btn menu-btn-color dropdown-toggle w-100 h-100" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Csatlakozás egy szobához</button>
          <div className="dropdown-menu w-100" aria-labelledby="joinRoomBtn">
            <div className="d-flex flex-column pl-3 pr-3 pt-2 pb-2">
              <div className="form-group">
                <input type="textbox" className="form-control" id="roomId" placeholder="A szoba száma" />
              </div>
              <a id="connectButton" href="lobby.html" className="btn btn-success w-50 m-auto d-flex align-items-center justify-content-center">Csatlakozás</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
    <div className="row" id="rulesRow">
      <h2 className="hidden">Szabályok</h2>
      <div className="col-md-2"></div>
      <div id="rules" className="col-md-8 card p-0">
        <div className="card-body overflow-auto">
          <h3>A játék szabályai röviden:</h3>
          <p>
            A játékban két játékos játszik egymással egy-egy hadsereg élén.
            Cél az ellenfél zászlójának megszerzése. A tábla 10x10 cellából
            áll. Eredetileg mindkét félnek 40 bábuja van: 1 zászló, 5 bomba,
            és katonák 1-től 10-es erővel. Egymás bábuit azonban nem látják,
            csak akkor, amikor két bábu csatázni kezd. Ekkor az erősebb bábu
            marad a pályán, a gyengébbik leesik a tábláról. Ha két azonos
            bábu harcol egymással, akkor mindkettő lekerül a tábláról.
            Minden bábu csak 1-et léphet előre, hátra, jobbra, balra. A
            zászló és az akna értelemszerűen nem tud lépni. A táblán
            lehetnek olyan mezők, amelyre nem lehet lépni (tó). Van pár
            speciális figura:
          </p>
          <ul>
            <li>
              <strong>Az 1-es a kém</strong>, ha ő támadja meg az ellenfél
              10-esét, akkor megöli.
            </li>
            <li>
              <strong>A 2-es a felderítő</strong>, ő akárhány mezőt átugorva
              léphet vagy támadhat. A tavat ő sem tudja átugrani.
            </li>
            <li>
              <strong>A 3-as az aknász.</strong> Csak ő tudja
              hatástalanítani a bombát.
            </li>
            <li>
              <strong>Bomba</strong>: aki rálép, az felrobban, a bomba
              viszont megmarad. Csak az aknász képes leszedni a tábláról.
            </li>
            <li>
              <strong>Zászló</strong>: a szászlót támadva nincs csata, a
              rálépő játékos nyer.
            </li>
          </ul>
          <h3>A játék menete:</h3>
          <p>
            Az első játékos választ egy figurát, majd egy másik mezőt
            választ, ahova lépni szeretne vele. Amennyiben a figura oda tud
            lépni, de ellenséges figura birtokolja a mezőt, csata
            következik. Összehasonlítjuk a két figura erejét a fenti
            szabályok szerint, és a vesztes lekerül a tábláról. A játéknak
            akkor van vége, ha valamely játékos megszerzi a másik zászlaját.
          </p>
          <a target="_blank" href="http://www.ketaklub.hu/letoltes/Stratego%20Aoriginal%20Piatnik.pdf">(Részletes szabály leírás)</a>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  )
}

export default Menu;