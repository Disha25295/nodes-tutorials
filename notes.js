const fs =  require('fs')
console.log('notes.js')

const getNotes = function(){
    return 'Your notes'
}
const addNote= function(title, body) { // add new feature to see if the addnotes can check if the title exist before or no
    const notes= loadNotes()
    const duplicatenotes = notes.filter(function(note) { //filters to a new note
        return note.title == title //gives the value to check if duplicate exist or no
    //note array will be empty if no duplicates found.
    })

    if (duplicatenotes == 0) {  ///can take the chunk of code from below
        notes.push({
            title: title,
            body: body
        })
            saveNotes(notes)
            console.log('new added')
        
    } else {
        console.log('note title exixt')
    }
}
   

     
    const saveNotes = function (notes) {
        const dataJSON = JSON.stringify(notes)// to convert it to string
        fs.writeFileSync('notes.json',dataJSON)//had no data earlier, so now we changed the data and loaded them in json
}


const loadNotes = function() {
    try {
        const databuffer = fs.readFileSync('notes.json') //creating a new file for it to get reading and writing
        const dataJSON = databuffer.toString() //string it as json for file system(converting buffer to string) and then parse
        return JSON.parse(dataJSON) //no directory with JSON data

    } catch (e) {
        return []
    }
     
}
module.exports = {
    getNotes: getNotes,
    addNote : addNote 
}