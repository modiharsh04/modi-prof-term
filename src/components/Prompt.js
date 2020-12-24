import React, {useCallback, useState} from "react";
import {GetCurDirectory} from "./Commands";

function Prompt({onEnter}) {
  const [val, setVal] = useState('');
  const [disabled, setDisabled] = useState(false)

  const onKeyPress = useCallback(e => {
    if (e.key === "Enter" || e.which === 13) {
      e.preventDefault();
      onEnter(val);
      setDisabled(true)
    } else {
      setVal(e.target.value)
    }
  } , [val, onEnter])

  let curDirectory = GetCurDirectory();

  if (curDirectory && curDirectory !== '~') {
    curDirectory = `~/${curDirectory}`
  }

  return (
    <p style={style.promptBox}>
      <span className="user">
        visitor@modi-profile: {curDirectory || '~'}
      </span>
      <span style={style.prompt}>
        <span className="tick">></span>
        <input type={'text'}
               disabled={disabled}
               onKeyDown={onKeyPress}
               value={val}
               onChange={onKeyPress}
               autoCapitalize={'none'}
               autoFocus />

      </span>
    </p>
  )
}

const style = {
  promptBox: {
    display: 'flex',
    flexFlow: 'column nowrap'
  },
  prompt: {
    display: 'flex',
    flexFlow: 'row nowrap'
  }
}

export default Prompt;