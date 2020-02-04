const squel = require('squel');
const nodemailer = require('nodemailer');
const pool = require('../../common/pool');
const config = require('../../config/config');

exports.create = async (params) => {
    const query = squel.insert()
        .into('bougth')
        .setFields(params);  

    const preparedQuery = query.toParam();
    const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);
    
    return rows.insertId;
};

exports.reserveSeats = async (params) => {
    const rows = params.seats.map((seat_id) => {
        return {
            seat_id,
            bougth_id: params.bougth_id
        };
    });

    const query = squel.insert()
        .into('bougth_seats')
        .setFieldsRows(rows);
    
    const preparedQuery = query.toParam();
    const [ inserted ] = await pool.query(preparedQuery.text, preparedQuery.values);

    return inserted;
};

exports.sendEmail = async (params) => {
    const transporter = nodemailer.createTransport(config.email);

    await transporter.sendMail({
        from: 'cinema@avalith.com',
        to: params.user.email,
        subject: 'Bougth Successfull',
        text: `Hi ${params.user.name} your bougth was created successfully. Here is your bougth code: ${params.bougth.id}`,
    });
};

