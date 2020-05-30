import React from "react";

export const ItemCard = ({ imgFile, counter, placementClass }) => {
  /*const imgFile = React.lazy(_ => import(`img/${itemType}.png`));*/

  // TODO fix dynamic image import or burn it in... :'(
  return (
    <div className={placementClass + " roster-item card"}>
      <div className="card-body">
        <h3 className={placementClass + " roster-counter"}>{"x" + counter}</h3>
        <img
          className={placementClass + " roster-image"}
          src={imgFile}
          alt=""
        />
      </div>
    </div>
  );
};
