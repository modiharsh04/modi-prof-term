import React from "react";
import {UniqueKey} from "./util";

export const Familiar = () => (
  <ul key={UniqueKey()}>
    <li>Programming Languages</li>
    <ul>
      <li>C</li>
      <li>Angular</li>
      <li>lisp</li>
      <li>php</li>
      <li>C#</li>
      <li>Nodejs</li>
    </ul>
    <li>Web technologies</li>
    <ul>
      <li>JQuery</li>
      <li>Django</li>
      <li>Sass</li>
      <li>Bootstrap</li>
      <li>Material Design</li>
    </ul>
    <li>Databases</li>
    <ul>
      <li>MongoDB</li>
    </ul>
    <li>Tools</li>
    <ul>
      <li>Networking Protocols</li>
      <li>Photoshop</li>
      <li>BitBucket</li>
      <li>Mercurial</li>
      <li>Visual Studio</li>
      <li>Digital Ocean</li>
      <li>AWS</li>
      <li>Linux</li>
      <li>MacOS</li>
      <li>Windows</li>
      <li>Android</li>
      <li>IOS</li>
    </ul>
  </ul>
)