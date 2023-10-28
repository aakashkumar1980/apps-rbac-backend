import express from 'express';
import { getDb } from '../../db/db-connection';

export const roleRouter = express.Router();

// CREATE
roleRouter.post('/', (req, res) => {
    const db = getDb();
    const { code, description } = req.body;

    db.run('INSERT INTO ROLE (code, description) VALUES (?, ?)', [code, description], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

// READ (all)
roleRouter.get('/', (req, res) => {
    const db = getDb();
    db.all('SELECT * FROM ROLE ORDER BY description', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// READ (single)

// UPDATE

// DELETE
roleRouter.delete('/:code', (req, res) => {
    const db = getDb();
    const { code } = req.params;

    db.run('DELETE FROM ROLE WHERE code = ?', [code], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
    });
});
