import express from 'express';
import { getDb } from '../../db/db-connection';

export const roleFeaturesRouter = express.Router();

// CREATE
roleFeaturesRouter.post('/', (req, res) => {
    const db = getDb();
    const { roleCode, featureCode } = req.body;
    const query = `
    INSERT INTO ROLE_FEATURES (role_id, feature_id) VALUES
    ((SELECT id FROM ROLE WHERE code=?), (SELECT id FROM FEATURE WHERE code=?))
    `;

    db.run(query, [roleCode, featureCode], function(err) {
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
            A.code AS featureCode,
            F.description AS featureDescription              
        FROM 
            ROLE_FEATURES RF 
        INNER JOIN 
            ROLE R ON R.id = RF.role_id
        INNER JOIN    
            FEATURE F ON F.id = RF.feature_id
        INNER JOIN
            APP A ON A.id = F.app_id
        ORDER BY 
            R.description, A.description, F.description
    `;

    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// READ (single)

// UPDATE

// DELETE
roleFeaturesRouter.delete('/:roleCode/:featureCode', (req, res) => {
    const db = getDb();
    const { roleCode, featureCode } = req.params;

    db.run(`DELETE FROM ROLE_FEATURES 
            WHERE role_id=(SELECT id FROM ROLE WHERE code=?) 
                AND feature_id=(SELECT id FROM FEATURE WHERE code=?)
            `, [roleCode, featureCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
    });
});
