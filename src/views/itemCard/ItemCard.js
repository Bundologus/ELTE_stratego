import React from "react";

export const ItemCard = ({ itemType, counter, placementClass }) => {
  const imgFile = React.lazy(itemType => {
    import(`img/${itemType}.png`);
  });
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

{
  /* <div className="lobby roster-item card">
  <div className="card-body">
    <h3 className="lobby roster-counter">x1</h3>
    <img className="lobby roster-image" src={f1} alt="" />
  </div>
</div>

<div className="game roster-item card">
  <div className="card-body">
    <h3 className="game roster-counter">x1</h3>
    <img className="game roster-image" src={e1} alt="" />
  </div>
</div> */
}
