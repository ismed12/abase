const Reservasi = require("./model");

exports.findAll = function(req, res){
    Reservasi.findAll(function(err, reservasi){
        console.log('controller')
        if (err) res.send(err)
        console.log('res', reservasi);
        res.send(reservasi)
    })
}

exports.create = function (req, res) {
    const new_reservasi = new Reservasi(req.body)

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field'})
    } else {
        Reservasi.create(new_reservasi, function(err, reservasi){
            if (err) res.send(err)
            else
                res.json({
                    error: false,
                    message: "Reservation added successfully",
                    data: reservasi
                })
        })
    }
}

exports.findById = function (req, res) {
    Reservasi.findById(req.params.id, function(err, reservasi) {
        if (err) res.send(err)
        res.json(reservasi)
    })
}

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field'})
    } else {
        Reservasi.update(req.params.id, new Reservasi(req.body), function (err){
            console.log(req.body)
            if (err) res.send(err)
            res.json({
                error: false,
                message: 'Reservation updated successfully'
            })
        })
    }
}

exports.delete = function (req, res) {
    Reservasi.delete(req.params.id, function (err) {
        if (err) res.send(err)
            res.json({
                error: false,
                message: 'Reservation deleted successfully'                
        })
    })
}