const {AirplaneRepository} = require('../repositories');
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplne = await airplaneRepository.create(data);
        return airplne;
    }catch(error){
        throw error;
    }
}

module.exports = {
    createAirplane
}