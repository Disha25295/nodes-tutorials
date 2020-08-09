const yargs =  require('yargs')
const chalk = require ('chalk')
const notes = require('./notes.js')




//const command = process.argv[2]
//console.log(process.argv)

//cretae add command

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            decribe:'Note title' ,
            demandOption : true ,
            type : 'string'
        },
        body :{
        describe: 'Genre body',
        demandOption: true,
        type: 'string'
    }
},
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'removes the note',
    handler: function() {
        console.log('removing the note')
    }
})
// list command
yargs.command({
    command: 'list',
    describe: 'list existing nodes note',
    handler : function(){
    console.log('List as it is')
   }
})

//read
yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler: function(){
    console.log('read the notes')
    }
})

yargs.parse()






// /if(command=='Disha'){
//     console.log('je veux mourir!')
//     console.log('mort facil et rapide')
// }
//  else if (command== 'remove'){
//      console.log('remove the note!')
//  }










// const msg = getNotes()

// console.log(msg)

// console.log(chalk.red('failed!', chalk.blue('attempt!') +'!'))

// console.log(process.argv[2])











// const add = require('./utils.js')

// //handles multiple files in one

// const sum = add(4,3)

// console.log(sum)

