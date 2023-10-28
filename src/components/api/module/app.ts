import express from 'express';
import { getDb } from '../../db/db-connection';

export const appsRouter = express.Router();
// CREATE
appsRouter.post('/', (req, res) => {
    const db = getDb();
    const { code, description } = req.body;

    db.run('INSERT INTO APP (code, description) VALUES (?, ?)', [code, description], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

// READ (all)
appsRouter.get('/', (req, res) => {
    const db = getDb();
    db.all('SELECT * FROM APP ORDER BY description', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// READ (single)

// UPDATE

// DELETE
appsRouter.delete('/:code', (req, res) => {
    const db = getDb();
    const { code } = req.params;

    db.run('DELETE FROM APP WHERE code = ?', [code], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
    });
});
