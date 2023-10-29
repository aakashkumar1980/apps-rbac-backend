import express from 'express';
import { getDb } from '../../db/db-connection';

export const appsfeaturesRouter = express.Router();

// CREATE
appsfeaturesRouter.post('/', (req, res) => {
    const db = getDb();
    const { code, description, appCode } = req.body;
    const query = `
    INSERT INTO APPFEATURES (code, description, app_id) VALUES
    (?, ?, (SELECT id FROM APP WHERE code=?))
    `;

    db.run(query, [code, description, appCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

// READ (all)
appsfeaturesRouter.get('/', (req, res) => {
    const db = getDb();
    const query = `
        SELECT 
            AF.id,
            AF.code, 
            AF.description, 
            A.code AS appCode,
            A.description AS appDescription 
        FROM 
            APPFEATURES AF 
        INNER JOIN 
            APP A ON A.id = AF.app_id
        ORDER BY 
            A.description, AF.description
    `;

    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// READ (single)

// UPDATE

// DELETE
appsfeaturesRouter.delete('/:code', (req, res) => {
    const db = getDb();
    const { code } = req.params;

    db.run('DELETE FROM APPFEATURES WHERE code = ?', [code], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
    });
});