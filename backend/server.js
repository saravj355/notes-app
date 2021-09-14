const sequelize = require('./src/db');
const express = require('express');
const app = express();
app.use(require('./src/routes'));

async function assertDatabaseConnectionOk() {
    console.log('Checking database connection...');
    try {
        await sequelize.authenticate();
        // await sequelize.models.note.create({
        //     note_id: '3rFdnw26s',
        //     title: 'test1',
        //     body: 'test1',
        //     creation_date:'02/13/2021'
        // });
		
        console.log('Database connection OK!');
    } catch (error) {
        console.log('Unable to connect to the database:');
        console.log(error.message);
        process.exit(1);
    }
}

async function init() {
    await assertDatabaseConnectionOk();

    app.listen(process.env.PORT, () => {
        console.log(`Server on port http://localhost:${process.env.PORT}.`);
    });
}

init();