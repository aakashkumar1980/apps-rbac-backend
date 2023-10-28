import express from 'express';
import { getDb } from '../../db/db-connection';

export const appsFeaturesRouter = express.Router();

// CREATE
appsFeaturesRouter.post('/', (req, res) => {
    const db = getDb();
    const { code, description, appCode } = req.body;
    const query = `
    INSERT INTO APP_FEATURES (code, description, app_id) VALUES
    (?, ?, (SELECT id FROM APP WHERE code=?))
    `;

    db.run(query, [code, description, appCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

// READ (all)
appsFeaturesRouter.get('/', (req, res) => {
    const db = getDb();
    const query = `
        SELECT 
            AF.id AS id,
            AF.code, 
            AF.description, 
            A.code AS appCode,
            A.description AS appDescription 
        FROM 
            APP_FEATURES AF 
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
appsFeaturesRouter.delete('/:code', (req, res) => {
    const db = getDb();
    const { code } = req.params;

    db.run('DELETE FROM APP_FEATURES WHERE code = ?', [code], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
    });
});