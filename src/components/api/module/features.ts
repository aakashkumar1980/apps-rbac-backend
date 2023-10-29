import express from 'express';
import { getDb } from '../../db/db-connection';

export const featuresRouter = express.Router();

// CREATE
featuresRouter.post('/', (req, res) => {
    const db = getDb();
    const { code, description, appCode } = req.body;
    const query = `
    INSERT INTO FEATURES (code, description, app_id) VALUES
    (?, ?, (SELECT id FROM APP WHERE code=?))
    `;

    db.run(query, [code, description, appCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

// READ (all)
featuresRouter.get('/', (req, res) => {
    const db = getDb();
    const query = `
        SELECT 
            F.id,
            F.code, 
            F.description, 
            A.code AS appCode,
            A.description AS appDescription 
        FROM 
            FEATURES F 
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
featuresRouter.delete('/:code', (req, res) => {
    const db = getDb();
    const { code } = req.params;

    db.run('DELETE FROM FEATURES WHERE code = ?', [code], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
    });
});