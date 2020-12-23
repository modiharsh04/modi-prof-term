import React from "react";
import {UniqueKey} from "./util";

export const Help = () => (
  <ul key={UniqueKey()}>
    <li><strong>path</strong> - display current directory</li>
    <li><strong>cat FILENAME</strong> - display FILENAME in window</li>
    <ul>
      <li>Examples,
        <span className="snippet">cat about</span> or
        <span className="snippet">cat resume</span> or
        <span className="snippet">cat contact</span>
      </li>
    </ul>
    <li><strong>cd DIRECTORY</strong> - move into DIRECTORY or just cd ..
                                      to return to root
    </li>
    <ul>
      <li>directories are <span className="blue">blue</span> colored</li>
      <li>Example, <span className="snippet">cd skills</span></li>
    </ul>
    <li><strong>ls</strong> - show files in current directory</li>
    <li><strong>history</strong> - see your command history</li>
    <li><strong>clear</strong> - clear current window</li>
  </ul>
)