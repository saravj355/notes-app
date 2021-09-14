const {models} = require('../db');
const yup = require('yup');
const  uuidv5 = require('uuidv5');
const moment = require('moment');

async function create(note) {
    note.note_id = uuidv5();
    note.creation_date = mhttps://docs.google.com/spreadsheets/d/1etlLScqG8esAXeCqRJ-clHCPBv1Sn6yqN-Pu2rYc99g/edit#gid=0
    assertNoteSchema(note);
    models.note.create(note);
}

async function deleteById(id) {

}

async function update() {

}

async function findAll() {
    const notes = await models.note.findAll();
    return notes.map(note => note.dataValues);
}

async function findById(id) {

}

function assertNoteSchema(note){
    const schema = yup.object().shape({
        title: yup().string().require(),
        body: yup().string().require(),
        creation_date : yup().date().require(),
    });
	
}
module.exports = {
    findById,
    findAll,
    deleteById,
    create
};