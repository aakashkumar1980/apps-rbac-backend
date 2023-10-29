import express from 'express';
import { getDb } from '../../db/db-connection';

export const roleFeaturesRouter = express.Router();

// CREATE
roleFeaturesRouter.post('/', (req, res) => {
    const db = getDb();
    const { roleCode, featuresCode } = req.body;
    const query = `
    INSERT INTO ROLE_FEATURES (role_id, features_id) VALUES
    ((SELECT id FROM ROLE WHERE code=?), (SELECT id FROM FEATURES WHERE code=?))
    `;

    db.run(query, [roleCode, featuresCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

// READ (all)
roleFeaturesRouter.get('/', (req, res) => {
    const db = getDb();
    const query = `
        SELECT 
            RF.id,
            R.code AS roleCode,
            R.description AS roleDescription,
            A.description AS appDescription,
            A.code AS featuresCode,
            A.description AS featuresDescription              
        FROM 
            ROLE_FEATURES RF 
        INNER JOIN 
            ROLE R ON R.id = RF.role_id
        INNER JOIN    
            FEATURES A ON A.id = RF.features_id
        INNER JOIN
            APP A ON A.id = A.app_id
        ORDER BY 
            R.description, A.description, A.description
    `;

    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// READ (single)

// UPDATE

// DELETE
roleFeaturesRouter.delete('/:roleCode/:featuresCode', (req, res) => {
    const db = getDb();
    const { roleCode, featuresCode } = req.params;

    db.run(`DELETE FROM ROLE_FEATURES 
            WHERE role_id=(SELECT id FROM ROLE WHERE code=?) 
                AND features_id=(SELECT id FROM FEATURES WHERE code=?)
            `, [roleCode, featuresCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
    });
});
