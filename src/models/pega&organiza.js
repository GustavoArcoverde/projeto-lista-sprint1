import readline from 'readline'

const rl = readline.createInterface(process.stdin, process.stdout);
const result = []

export const pega_e_organiza = () => {
    rl.question('Digite propriedades CSS: ', (answer) => {
        if (answer == 'sair' || answer == 'SAIR') {
            console.log("Suas propriedades em ordem alfabética: " + result.sort().join(', '))
            return rl.close()
        } else {
            result.push(answer)
        }
        pega_e_organiza()
    })
}