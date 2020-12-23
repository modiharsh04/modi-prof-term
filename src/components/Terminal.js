import React, {useCallback, useState} from "react";
import Prompt from "./Prompt";
import {name, profile} from "../assets/ascii_art"
import {UniqueKey} from "./util";
import {Commands} from "./Commands";

const renderAscii = () => {
  return (
    <div className="pre-tags">
      <pre className="ascii_img">{profile}</pre>
      <pre className="ascii_banner">{name}</pre>
    </div>
  )
}


function Terminal() {
  const [prompts, setPrompts] = useState([]);

  const onEnter = useCallback(val => {
    const [cmd, arg] = val.trim().toLowerCase().split(' ');
    if (cmd === 'clear') {
      setPrompts([<Prompt key={UniqueKey()} onEnter={onEnter} />])
    } else {
      setPrompts(oldPrompts => oldPrompts.concat(
        [Commands(cmd, arg), <Prompt key={UniqueKey()} onEnter={onEnter} />]
      ))
    }
  }, [])

  if (prompts.length === 0) {
    setPrompts([<Prompt key={'1'} onEnter={onEnter} />])
  }

  return (
    <React.Fragment>
      {renderAscii()}
      <p style={{marginBlockEnd: 0}}>
        Hello and welcome. Thanks for stopping by.<br />
        Please type <span className="snippet">help</span> to get started.
      </p>
      {prompts}
    </React.Fragment>
  )
}

export default Terminal;
