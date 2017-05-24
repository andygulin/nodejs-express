var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../conf/dbConfig');
var pool = mysql.createPool(dbConfig.mysql);

router.get('/users/get/:id',
    function (req, res) {
        pool.getConnection(function (err, connection) {
            connection.query('SELECT * FROM user WHERE id=?', [req.params.id],
                function (err, rows, fields) {
                    if (err) throw err;
                    res.json({
                        'success': true,
                        'ret': rows
                    });
                    connection.release();
                });
        });
    });

router.get('/users/all',
    function (req, res) {
        pool.getConnection(function (err, connection) {
            connection.query('SELECT * FROM user',
                function (err, rows, fields) {
                    if (err) throw err;
                    res.json({
                        'success': true,
                        'ret': rows
                    });
                    connection.release();
                });
        });
    });

router.delete('/users/delete/:id',
    function (req, res) {
        pool.getConnection(function (err, connection) {
            connection.query('DELETE FROM user WHERE id=?', [req.params.id],
                function (err, rows, fields) {
                    if (err) throw err;
                    res.json({
                        'success': true,
                        'ret': rows.affectedRows
                    });
                    connection.release();
                });
        });
    });

router.put('/users/insert',
    function (req, res) {
        req.accepts('application/json');
        var body = req.body;
        pool.getConnection(function (err, connection) {
            connection.query('INSERT INTO user(name,age,address,createdAt) VALUES(?,?,?,?)', [body.name, body.age, body.address, new Date()],
                function (err, rows, fields) {
                    if (err) throw err;
                    res.json({
                        'success': true,
                        'ret': rows.insertId
                    });
                    connection.release();
                });
        });
    });

router.put('/users/update',
    function (req, res) {
        req.accepts('application/json');
        var body = req.body;
        pool.getConnection(function (err, connection) {
            connection.query('UPDATE user SET name=?,age=?,address=? WHERE id=?', [body.name, body.age, body.address, body.id],
                function (err, rows, fields) {
                    if (err) throw err;
                    res.json({
                        'success': true,
                        'ret': rows.affectedRows
                    });
                    connection.release();
                });
        });
    });

module.exports = router;