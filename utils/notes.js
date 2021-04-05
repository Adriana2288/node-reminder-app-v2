const fs = require("fs")

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("src/notes.json")
        const notesJson = dataBuffer.toString()
        return JSON.parse(notesJson)
    } catch (error) {
        return []
    }
}

const addNotes = (myNote) => {
    const allNotes = loadNotes()
    allNotes.push({reminder: myNote})
    saveNotes(allNotes)
}

const saveNotes = (allNotes) => {
    const notesJson = JSON.stringify(allNotes)
    fs.writeFileSync("src/notes.json", notesJson)
}

const listNotes = () => {
    const allNotes = loadNotes()
    allNotes.map((note, index) => {
        console.log(`${index + 1}: ${note.reminder}`)
    })
}

const removeNotes = (noteToDelete) => {
    const allNotes = loadNotes()

    try {
        const removedNote = allNotes.splice(noteToDelete - 1, 1)
        console.log(`Successfuly removed ${removedNote[0].reminder}`) 
    } catch (error) {
        console.log("The number is not valid. Please try again")
    }

    saveNotes(allNotes)
}

module.exports = {
    addNotes,
    listNotes,
    removeNotes
}