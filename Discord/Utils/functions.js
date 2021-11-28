module.exports = {
    getResult(data){
        data.blue.players.filter((i) => {
            if(i.stats.core.mvp == true) return { winner: 'blue', player: i}
        })
        data.orange.players.filter((i) => {
            if(i.stats.core.mvp == true) return { winner: 'orange', player: i}
        })
    }
}