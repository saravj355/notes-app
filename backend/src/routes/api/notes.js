const router = require('express').Router();

router.get('/', (req, res) => {
    // const response = await NotesService.findAll(	);
    res.send('Hola');
});

module.exports = router;


// router.get('note/:id', (req, res) => {

// 	const response = await NotesService.findById(id);

// 	res.send(`
// `);
// });






