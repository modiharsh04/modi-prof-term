import React from "react";
import {UniqueKey} from "./util";

export const Learning = () => (
  <ul key={UniqueKey()}>
    <li>Flutter</li>
    <li>Terraform</li>
  </ul>
)