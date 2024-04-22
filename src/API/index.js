const cohortName = '2401-ftb-mt-web-pt';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

//API Documentation - https://fsa-puppy-bowl.herokuapp.com/api/

const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const result = await response.json();
        //console.log(result.data.players);
        return result.data.players ;
    } catch (err) {
        console.log(err)
    }

};

const fetchPlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const result = await response.json();
        //console.log(result.data.player)
        return result.data.player
    } catch (err) {
        console.log(err)
    }
}


const deletePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/players/${playerId}`, {
            method: "DELETE",
        });

        const result = await response.json();
        //console.log(result);
        return result;
    } catch (err) {
        console.log(err);
    }
};

export { fetchAllPlayers, fetchPlayer, deletePlayer}