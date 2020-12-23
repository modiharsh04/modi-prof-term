import {Help} from "./Help";
import {Resume} from "./Resume";
import {About} from "./About";
import {UniqueKey} from "./util";
import React from "react";
import {Proficient} from "./Proficient";
import {Contact} from "./Contact";
import {Familiar} from "./Familiar";
import {Learning} from "./Learning";

let curDirectory = '~',
  history = [];
export const GetCurDirectory = () => curDirectory;

const getError = (cmd, arg) => {
  const errors = {
    cd: `cd: no such file or directory: ${arg}`,
    rm: 'Error: you do not have write access to this directory',
    cat: `cat: ${arg}: No such file or directory`,
    ls: '',
    unknown: `command not found: ${arg}`
  }

  return <span key={UniqueKey()}>{errors[cmd]}</span>
}

const directories = {
  '~': [
    'about',
    'contact',
    'projects',
    'resume',
    'skills'
  ],
  'projects': ['coming soon...', 'check back later, please.'],
  'skills': ['proficient', 'familiar', 'learning']
}

const files = {
  'about': About,
  'contact': Contact,
  'resume': Resume,
  'proficient': Proficient,
  'familiar': Familiar,
  'learning': Learning
}

const cat = arg => {
  arg = arg.split('.')[0]
  if (directories[curDirectory].includes(arg) && files[arg]) {
    return files[arg]()
  }
  return getError('cat', arg)
}

const ls = () => {
  if (directories[curDirectory]) {
    return (
      <span key={UniqueKey()} className={'ls'}>
        {
          directories[curDirectory].map(item => {
            if (directories[item]) {
              return <span key={UniqueKey()}
                           className={'file blue'}>{item}</span>
            }
            return <span key={UniqueKey()} className={'file'}>{item}.txt</span>
          })
        }
      </span>
    )
  }
  return getError('ls')
}

const cd = arg => {
  if (arg === '..') {
    curDirectory = '~'
    return ''
  }
  if (directories[curDirectory].includes(arg) && directories[arg]) {
    curDirectory = arg
    return ''
  }
  return getError('cd', arg)
}

export const Commands = (cmd, arg) => {
  history = history.concat(`${cmd} ${arg || ''}`)
  switch (cmd) {
    case 'help':
      return Help()
    case 'cat':
      return cat(arg)
    case 'ls':
      return ls()
    case 'cd':
      return cd(arg)
    case 'path':
      return `/home/modi/${curDirectory}`
    case 'history':
      history.splice(history.length - 1, 1);
      return (
        <ol key={UniqueKey()}>
          {history.map(h => <li key={UniqueKey()}>{h}</li>)}
        </ol>
      )
    default:
      return getError('unknown', cmd)
  }
}
