const functionService = require('../functions').service;
const bougthService = require('./service');
const cinemaService = require('../cinemas').service;

exports.create = async (req, res) => {
    const func = await functionService.getById(req.params.function_id);
    const cinema = await cinemaService.getByid(req.params.cinema_id); 
    
    if (!func || !cinema) {
        return res.status(400);
    } 

    const available = await functionService.checkSeats({ 
        id: func.id,
        seats: req.body.seats 
    });
    
    if (!available) {
        res.send({ 
            message: `We don't have that seats quantity available`
        }).status(400);
    }

    const bougth_id = await bougthService.create({
        user_id: req.user.id,
        function_id: func.id,
        price: cinema.base_price * req.body.seats.length
    });

    await bougthService.reserveSeats({
        bougth_id,
        seats: req.body.seats
    });

    await bougthService.sendEmail({
        user: req.user,
        bougth: {
            id: bougth_id,
        }
    });

    res.sendStatus(201);
};