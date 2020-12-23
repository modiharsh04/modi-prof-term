import React from "react";
import {UniqueKey} from "./util";

export const Resume = () => (
  <div key={UniqueKey()}>
    <iframe src={'resume.pdf'}
            title={'Harsh Modi Resume'} width="100%" height="500px" />
  </div>
)
