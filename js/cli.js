/* global $, localStorage, Shell */

const errors = {
    invalidDirectory: 'cd: no such file or directory: ',
    noWriteAccess: 'Error: you do not have write access to this directory',
    fileNotFound: 'cat: No such file or directory: ',
    fileNotSpecified: 'Error: you did not specify a file'
}

const struct = {
    home: ['about', 'resume', 'contact'],
    projects: [],
    skills: ['proficient', 'familiar', 'learning']
}

const commands = {}
let systemData = {}
const rootPath = '/home/modi'

const getDirectory = () => localStorage.directory
const setDirectory = (dir) => {
    localStorage.directory = dir
}

// Turn on fullscreen
const registerFullscreenToggle = () => {
    $('.button.primary').click(() => {
        $('.terminal-window').toggleClass('fullscreen')
    })
}

// create new directory in current directory
commands.mkdir = () => errors.noWriteAccess

// create new directory in current directory
commands.touch = () => errors.noWriteAccess

// remove file from current directory
commands.rm = () => errors.noWriteAccess

// view contents of specifed directory
commands.ls = (directory) => {
    if (directory === undefined) {
        directory = getDirectory()
    }
    if (directory === '..' || directory.includes('~')) {
        return systemData['home']
    }
    return systemData[getDirectory()]
}

// view list of possible commands
commands.help = () => systemData.help

// display current path
commands.path = () => {
    const dir = getDirectory()
    return dir === 'root' ? rootPath : `${rootPath}/${dir}`
}

// see command history
commands.history = () => {
    let history = localStorage.history
    history = history ? Object.values(JSON.parse(history)) : []
    return `<p>${history.join('<br>')}</p>`
}

// move into specified directory
commands.cd = (newDirectory) => {
    const currDir = getDirectory()
    const dirs = Object.keys(struct)
    const newDir = newDirectory ? newDirectory.trim() : ''

    if (dirs.includes(newDir) && currDir !== newDir) {
        setDirectory(newDir)
    } else if (newDir === '' || newDir === '~' || (newDir === '..' && dirs.includes(currDir))) {
        setDirectory('visitor@modi-profile: <strong>~</strong>')
    } else {
        return errors.invalidDirectory + newDir
    }
    return null
}

// display contents of specified file
commands.cat = (filename) => {
    if (!filename) return errors.fileNotSpecified

    var dir = getDirectory()
    if (dir.includes('~')) {
        dir = 'home'
    }
    const fileKey = filename.split('.')[0]

    if (fileKey in systemData && struct[dir].includes(fileKey)) {
        return systemData[fileKey]
    }

    return errors.fileNotFound + filename
}

// initialize cli
$(() => {
    registerFullscreenToggle()
    const cmd = document.getElementById('terminal')
    new Shell(cmd, commands)

    $.ajaxSetup({cache: false})
    $.get('data/system_data.json', (data) => {
        systemData = data
        for (let key in systemData) {
            if (systemData.hasOwnProperty(key)) {
                $.get(systemData[key], function (res) {
                    systemData[key] = res
                })
            }
        }
    })
})
