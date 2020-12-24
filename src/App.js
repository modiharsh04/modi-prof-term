import './App.css';
import React, {useState, useEffect} from "react";
import Terminal from "./components/Terminal";

function App() {
  const [fullScreen, toggleFullscreen] = useState(false);
  const [closed, toggleClosed] = useState(false);

  const onKeyPress = e => {
    if (
      ((e.key === 'f' || e.which === 70) && e.ctrlKey) || 
      (e.key === 'Escape' || e.which === 27)
      ) {
      e.preventDefault();
      toggleFullscreen(oldVal => !oldVal)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyPress);

    return () => {
      window.addEventListener('keydown', onKeyPress);
    }
  }, [])

  if (closed) {
    return (
      <div className={'closed'}>
          <p style={style.p}>
            Terminal is closed, click the button below to open 
            the terminal window again
          </p>
          <span style={style.closeBtn} 
                 onClick={() => toggleClosed(false)}>+</span>
      </div>
    )
  }

  return (
    <div className={`term-win ${fullScreen? 'fullscreen': ''}`}>
      <header className={'header'}>
        <span> Harsh Modi $</span>
        <span className={'btn-grp'}>
            <span className="button blue" style={style.pointer}
                  onClick={() => toggleFullscreen(ov => !ov)} />
            <span className="button secondary" />
            <span className="button red" style={style.pointer}
                  onClick={() => toggleClosed(true)} />
        </span>
      </header>
      <div id="content">
        <Terminal />
      </div>
    </div>
  );
}

const style = {
  pointer: {
    cursor: 'pointer'
  },
  closeBtn: {
    cursor: 'pointer',
    padding: '0 16px',
    fontSize: '2em',
    background: 'var(--color-blue)'
  },
  p: {
    fontSize: '1.2em'
  }
}

export default App;
