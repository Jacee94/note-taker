const router = require('express').Router();
const { notes } = require('../../db/db');
const { v4: uuidv4 } = require('uuid');
const { validateNote, createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

    if(!validateNote(req.body)) {
        res.status(400).send('The note is not formatted properly');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;