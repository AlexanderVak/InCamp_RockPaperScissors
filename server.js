import net from 'net'
import stream from 'stream'
import { signs, winner } from './game.js'
let clients = []
const players = new Map()

const server = net.createServer(socket => {
    if (clients.length < 2) {
        clients.push(socket)
        socket.write('Rock-Paper-Scissors\n1 vs 1\n0 - rock, 1 - paper, 2 - scissors\r\n')

    } else {
        socket.write('Sorry, server is full')
        socket.destroy()
    }


    const clientInfo = `${socket.remoteAdress}:${socket.remotePort}`
    console.log(`+ ${clientInfo} - connected`);

    socket.on('close', () => {
        players.delete(socket)
        console.log(`- ${clientInfo} - closed`)
    })

    socket.on('data', (move) => {
        players.set(socket, Number(move))
        if (clients.length === players.size) {
            clients.forEach(player => {
                
                player.write(winner(players))
            });
        } else {
            socket.write('Wait another player to move\n')
        }
    })

    socket.pipe(process.stdout)
})

server.listen(2818, '127.0.0.1')