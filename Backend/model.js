var dbConn = require("./db");

var Reservasi = function (reservasi) {
    this.name = reservasi.name;
    this.jumlah_pendaki = reservasi.jumlah_pendaki;
    this.nohp = reservasi.nohp;
};

Reservasi.create = function (newReservasi, result) {
    dbConn.query(
        'INSERT INTO reservasi (name, jumlah_pendaki, nohp) VALUES (?,?,?)',
        [
            newReservasi.name,
            newReservasi.jumlah_pendaki,
            newReservasi.nohp,
        ],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        }
    );
};

Reservasi.findAll = function (result) {
    dbConn.query(
        'SELECT * FROM reservasi',
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

Reservasi.findById = function (id, result) {
    dbConn.query(
        'SELECT * FROM reservasi WHERE id = ?', id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

Reservasi.update = function (id, reservasi, result) {
    dbConn.query(
        'UPDATE reservasi SET name = ?, jumlah_pendaki = ?, nohp = ? WHERE id = ?', 
        [reservasi.name, reservasi.jumlah_pendaki, reservasi.nohp, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

Reservasi.delete = function (id, result) {
    dbConn.query(
        'DELETE FROM reservasi WHERE id = ?', id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        }
    );
};

module.exports = Reservasi;
