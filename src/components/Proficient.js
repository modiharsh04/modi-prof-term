import {UniqueKey} from "./util";
import React from "react";

const proficient = {
  'Programming Languages': [
    'Python', 'Golang', 'Java', 'JavaScript', 'React', 'React Native'
  ],
  'Web technologies': []
}

export const Proficient = () => (
  <ul key={UniqueKey()}>
    <li>Programming Languages</li>
    <ul>
      <li>Python</li>
      <li>Golang</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>React Native</li>
    </ul>
    <li>Web technologies</li>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>less</li>
      <li>flask</li>
      <li>Gorilla</li>
      <li>JSON</li>
      <li>Rest API</li>
      <li>YAML</li>
    </ul>
    <li>Databases</li>
    <ul>
      <li>SQL</li>
      <li>MySQL</li>
      <li>PostgresSQL</li>
    </ul>
    <li>Tools</li>
    <ul>
      <li>Git</li>
      <li>Docker</li>
      <li>Google Cloud</li>
      <li>Google Cloud</li>
      <li>Nginx</li>
      <li>Android SDK</li>
      <li>Xcode</li>
      <li>Jetbrains editors</li>
    </ul>
  </ul>
)


