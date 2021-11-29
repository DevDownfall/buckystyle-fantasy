const { execute } = require('./database/mysql.ts')

module.exports = {
    getResult(data){
        var winner;
        var loser;
        var mvp;
        var players = []

        try{
            data.blue.players.filter((i) => {
                if(i.stats.core.mvp == true) {
                    winner = 'blue'
                    loser = 'orange'
                    mvp = { team: 'blue', player: i }
                }
                players.push({ team: 'blue', player: i })
            })
            data.orange.players.filter((i) => {
                if(i.stats.core.mvp == true) {
                    winner = 'orange'
                    loser = 'blue'
                    mvp = { team: 'orange', player: i }
                }
                players.push({ team: 'orange', player: i })
            })
            return { winner: winner, loser: loser, mvp: mvp, winners: winner == 'blue' ? data.blue.players: data.orange.players, losers: loser = 'orange' ? data.orange.players : data.blue.players, players: players}
        }catch(e){
            console.log(e)
        }
        
    }, 

    getPlayer(obj, username){
        var team, player; 
        try{
            obj.data.blue.players.filter((i) => {
                if(i.name == username) {
                    team = 'blue'
                    player = i.stats
                }
            })
            obj.data.orange.players.filter((i) => {
                if(i.name == username) {
                    team = 'orange'
                    player = i.stats
                }
            })
            return { team: 'orange', player: player}
        }catch(e){
            console.log(e)
        }
    },

    // async updateUser(db, Result){
    //     return new Promise((resolve, reject) => {
    //         try{
    //             await execute(`UPDATE Players SET username=?,games=?,wins=?,losses=?,win_percentage=?,shots=?,goals=?,saves=?,assists=?,average_score=?,mvps=?,shooting_percentage=? WHERE username = ?`, [ Result.player.name, db.games+1, Result ])
    //         }catch(e){}
    //     })
    //     // db.forEach(async (i, index) => {
    //     //     try{
    //     //         const column = Object.keys(i)
    //     //         const value = Object.values(i)
                
    //     //         // let index1 = column.indexOf('id')
    //     //         // let index2 = column.indexOf(value[1])
                
    //     //         // const new1 = column.splice(index1, 1)
    //     //         // const new2 = value.splice(index2, 1)
    //     //         if(value[0] == i.id) return console.log(column[index], value[index])
    //     //         return console.log(value[index])
    //     //         const resultValue = Object.values(Result.player.stats.core)
    //     //         await execute(`UPDATE Players SET ${column[index]} = ?`, [ parseInt(value[index]) + parseInt(resultValue[index]) ])
    //     //     }catch(e){
    //     //         return console.log(e)
    //     //     }
    //     // })
    // }

}