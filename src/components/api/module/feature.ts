import express from 'express';
import { getDb } from '../../db/db-connection';

export const featureRouter = express.Router();

// CREATE
featureRouter.post('/', (req, res) => {
    const db = getDb();
    const { code, description, appCode } = req.body;
    const query = `
    INSERT INTO FEATURE (code, description, app_id) VALUES
    (?, ?, (SELECT id FROM APP WHERE code=?))
    `;

    db.run(query, [code, description, appCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

// READ (all)
featureRouter.get('/', (req, res) => {
    const db = getDb();
    const query = `
        SELECT 
            F.id,
            F.code, 
            F.description, 
            A.code AS appCode,
            A.description AS appDescription 
        FROM 
            FEATURE F 
        INNER JOIN 
            APP A ON A.id = F.app_id
        ORDER BY 
            A.description, F.description
    `;

    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// READ (single)

// UPDATE

// DELETE
featureRouter.delete('/:code', (req, res) => {
    const db = getDb();
    const { code } = req.params;

    db.run('DELETE FROM FEATURE WHERE code = ?', [code], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
    });
});