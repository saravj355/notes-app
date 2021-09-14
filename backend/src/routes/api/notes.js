const router = require('express').Router();
const notesService = require('../../services/notesService');


router.get('/', async (req, res) => {
    try {
        const response = await notesService.findAll();
        res.send(response);
    } catch(err){
        res.statusCode(400);
        res.send(err);
    }
});


module.exports = router;



// router.get('note/:id', (req, res) => {

// 	const response = await NotesService.findById(id);

// 	res.send(`
// `);
// });






