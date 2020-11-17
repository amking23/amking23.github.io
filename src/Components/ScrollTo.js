import React from "react";
import { Button } from "reactstrap";
import { scrollTo } from "../utility";

export default props => {
  return (
    <div className={`${props.direction} scroll-to`}>
      <Button
        onClick={() => scrollTo(props.id)}
        className={`next-button${props.hidden ? " hide-next-button" : ""}${props.inverse ? " inverse" : ""}`}
      >
        {props.direction === "down" ? <i class="material-icons arrow-icon">arrow_downward</i> : <i class="material-icons arrow-icon">arrow_upward</i>}
      </Button>
    </div>
  );
};
