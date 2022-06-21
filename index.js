import readline from 'readline' // modules for accept input from user
import cmd from 'node-cmd' // modules for executing windows command
import chalk from 'chalk' // modules for color

const rl = readline.createInterface({ // declare rl as readline to set input and output
    input: process.stdin,
    output: process.stdout
});

function renamefiles(){ // core function for rename files
    rl.question('Type your file extension that you want to change: ', function(ext_awal){
        rl.question('Type new extension: ', function(ext_baru){
            rl.question(`You want to change from ${chalk.blue(ext_awal)} to ${chalk.blue(ext_baru)} ? (y/n)`, function(makesure){
                if(makesure == 'y' || makesure == 'Y' || makesure == 'yes' || makesure == 'YES'){
                    cmd.run(`for /r %x in (*.${ext_awal}) do ren "%x" *.${ext_baru}`)
                    console.log(`File changed from ${ext_awal} to ${ext_baru}!!`)
                    rl.close()
                    menu()
                }else{
                    console.log('Abort Mission!')
                    rl.close()
                    menu()
                }
            })
        })
    })
}

function menu(){ // add menu just for fun
    console.log(chalk.redBright('Made with Love by Aditya\n'))
    renamefiles() // call function to run
}

menu() // call menu function to start the program