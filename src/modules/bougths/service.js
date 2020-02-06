const squel = require('squel');
const nodemailer = require('nodemailer');
const pool = require('../../common/pool');
const logger = require('../../common/logger');
const config = require('../../config/config');

exports.create = async (params) => {
    try {
        const query = squel.insert()
            .into('bougth')
            .setFields(params);  

        const preparedQuery = query.toParam();
        const [ rows ] = await pool.query(preparedQuery.text, preparedQuery.values);
        
        return rows.insertId;
    } catch (error) {
        logger.error('can\'t execute query', error);
        throw error; 
    }
};

exports.reserveSeats = async (params) => {
    try {
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
    } catch (error) {
        logger.error('can\'t execute query', error);
        throw error; 
    }
};

exports.sendEmail = async (params) => {
    try {
        const transporter = nodemailer.createTransport(config.email);

        await transporter.sendMail({
            from: 'cinema@avalith.com',
            to: params.user.email,
            subject: 'Bougth Successfull',
            text: `Hi ${params.user.name} your bougth was created successfully. Here is your bougth code: ${params.bougth.id}`,
        });
    } catch (error) {
        logger.error('can\'t send email', error);
        throw error; 
    }
    
};

