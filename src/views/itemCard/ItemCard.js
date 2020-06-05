import React from "react";

export const ItemCard = (props) => {
  const { imgFile, count, placementClass } = props;

  console.log(`ItemCard: {${imgFile} + ${count} + ${placementClass}}`);

  return (
    <div className={placementClass + " roster-item card"}>
      <div className="card-body">
        <h3 className={placementClass + " roster-counter"}>{"x" + count}</h3>
        <img
          className={placementClass + " roster-image"}
          src={imgFile}
          alt=""
        />
      </div>
    </div>
  );
};
