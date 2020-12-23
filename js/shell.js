/* global $, localStorage */

class Shell {
    constructor(term, commands) {
        this.commands = commands
        this.setupListeners(term)
        this.term = term

        localStorage.directory = 'visitor@modi-profile: ~'
        localStorage.history = JSON.stringify('')
        localStorage.historyIndex = -1
        localStorage.inHistory = false

        $(function () {
            $('#terminal').load('html/terminal.html')
        })
    }

    setupListeners(term) {
        $('#terminal').mouseup(() => $('.input').last().focus())

        term.addEventListener('keyup', (evt) => {
            const keyUp = 38
            const keyDown = 40
            const key = evt.keyCode

            if (evt.keyCode === 27) {
                $('.terminal-window').toggleClass('fullscreen')
            } else if (evt.keyCode === 13 || evt.key === "Enter") {
                // enter key is pressed
                evt.preventDefault();
                const prompt = evt.target
                const input = prompt.textContent.trim().split(' ')
                const cmd = input[0] && input[0].toLowerCase()
                const args = input[1] && input[1].toLowerCase()

                if (cmd === 'clear') {
                    this.clearConsole()
                } else if (cmd && cmd in this.commands) {
                    this.runCommand(cmd, args)
                    this.resetPrompt(term, prompt)
                    $('.user').last().html(localStorage.directory)
                } else {
                    this.term.innerHTML += 'command not found: ' + cmd
                    this.resetPrompt(term, prompt)
                }
            } else if ([keyUp, keyDown].includes(key)) {
                let history = localStorage.history
                history = history ? Object.values(JSON.parse(history)) : []

                if (key === keyUp) {
                    if (localStorage.historyIndex >= 0) {
                        if (!localStorage.inHistory) {
                            localStorage.inHistory = true
                        } else {
                            if (localStorage.historyIndex === history.length - 1 && history.length !== 1) {
                                localStorage.historyIndex -= 1
                            }
                        }
                        $('.input').last().html(`${history[localStorage.historyIndex]}<span class="end"><span>`)
                    }
                    // $('.input').last().html(`${history[localStorage.historyIndex]}<span class="end"><span>`)
                    if (localStorage.historyIndex !== 0) localStorage.historyIndex -= 1
                } else if (key === keyDown) {
                    if (localStorage.inHistory && localStorage.historyIndex < history.length) {
                        let ret
                        if (localStorage.historyIndex > 0) {
                            ret = `${history[localStorage.historyIndex]}<span class="end"><span>`
                            if (localStorage.historyIndex !== history.length - 1) {
                                localStorage.historyIndex = Number(localStorage.historyIndex) + 1
                            }
                        } else if (localStorage.historyIndex === 0 && history.length > 1) {
                            ret = `${history[1]}<span class="end"><span>`
                            localStorage.historyIndex = history.length !== 2 ? 2 : 1
                        }
                        $('.input').last().html(ret)
                    }
                }
                evt.preventDefault()
                $('.end').focus()
            }
        })

        term.addEventListener('keydown', (evt) => {
            // a tab is pressed
            if (evt.keyCode === 9) {
                evt.preventDefault()
                $('.input').last().focus()
                // escape key is pressed
            } else if (evt.keyCode === 27) {
                $('.terminal-window').toggleClass('fullscreen')
            } else if (evt.keyCode === 8 || evt.keyCode === 46) {
                this.resetHistoryIndex()
            }
        })

        term.addEventListener('keypress', (evt) => {
            //I stopped right here
            if (![9, 27, 37, 38, 39, 40].includes(evt.keyCode)) {
                this.resetHistoryIndex()
            }
        })
    }

    runCommand(cmd, args) {
        const command = args ? `${cmd} ${args}` : cmd
        this.updateHistory(command)

        const output = this.commands[cmd](args)
        if (output) {
            this.term.innerHTML += output
        }
        if (args === 'contact') {
            this.loadContactIcons()
        }
    }

    resetPrompt(term, prompt) {
        const newPrompt = prompt.parentNode.cloneNode(true)
        prompt.setAttribute('contenteditable', false)
        if (this.prompt) {
            newPrompt.querySelector('.prompt').textContent = this.prompt
        }
        term.appendChild(newPrompt)
        newPrompt.querySelector('.input').innerHTML = ''
        newPrompt.querySelector('.input').focus()
    }

    resetHistoryIndex() {
        let history = localStorage.history
        history = history ? Object.values(JSON.parse(history)) : []
        if (localStorage.goingThroughHistory == true) {
            localStorage.goingThroughHistory = false
        }
        if (history.length == 0) {
            localStorage.historyIndex = -1
        } else {
            localStorage.historyIndex = history.length - 1 > 0 ? history.length - 1 : 0
        }
    }

    updateHistory(command) {
        let history = localStorage.history
        history = history ? Object.values(JSON.parse(history)) : []

        history.push(command)
        localStorage.history = JSON.stringify(history)
        localStorage.historyIndex = history.length - 1
    }

    clearConsole() {
        $('#terminal').load('html/terminal.html')
    }

    loadContactIcons() {
        $('.email').load('data/ascii_art/email')
        $('.github').load('data/ascii_art/github')
        $('.instagram').load('data/ascii_art/instagram')
        $('.twitter').load('data/ascii_art/twitter')
    }
}
