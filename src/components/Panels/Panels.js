import React, { Fragment } from "react";
import Main from "./Main";
import Left from "./Left";
import Right from "./Right";

export default function Panels() {
  return (
    <Fragment>
      <Main />
      <Left />
      <Right />
    </Fragment>
  );
}
