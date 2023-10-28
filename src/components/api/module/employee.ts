import express from 'express';
import { getDb } from '../../db/db-connection';

export const employeeRouter = express.Router();
// CREATE
employeeRouter.post('/', (req, res) => {
    const db = getDb();
    const { email } = req.body;

    db.run('INSERT INTO EMPLOYEE (email) VALUES (?)', [email], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID }); // Return the ID of the newly created employee
    });
});

// READ (all)
employeeRouter.get('/', (req, res) => {
    const db = getDb();
    db.all('SELECT * FROM EMPLOYEE', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// READ (single)

// UPDATE

// DELETE
employeeRouter.delete('/:id', (req, res) => {
    const db = getDb();
    const { id } = req.params;

    db.run('DELETE FROM EMPLOYEE WHERE id = ?', [id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes }); // Return the number of rows changed
    });
});
