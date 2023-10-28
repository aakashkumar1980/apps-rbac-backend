import express from 'express';
import { getDb } from '../../db/db-connection';

export const roleAppFeaturesRouter = express.Router();

// CREATE
roleAppFeaturesRouter.post('/', (req, res) => {
    const db = getDb();
    const { roleCode, appFeaturesCode } = req.body;
    const query = `
    INSERT INTO ROLE_APP_FEATURES (role_id, app_features_id) VALUES
    ((SELECT id FROM ROLE WHERE code=?), (SELECT id FROM APP_FEATURES WHERE code=?))
    `;

    db.run(query, [roleCode, appFeaturesCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

// READ (all)
roleAppFeaturesRouter.get('/', (req, res) => {
    const db = getDb();
    const query = `
        SELECT 
            RAF.id AS id,
            R.code AS roleCode,
            R.description AS roleDescription,
            A.description AS appDescription,
            AF.code AS appFeaturesCode,
            AF.description AS appFeaturesDescription              
        FROM 
            ROLE_APP_FEATURES RAF 
        INNER JOIN 
            ROLE R ON R.id = RAF.role_id
        INNER JOIN    
            APP_FEATURES AF ON AF.id = RAF.app_features_id
        INNER JOIN
            APP A ON A.id = AF.app_id
        ORDER BY 
            R.description, A.description, AF.description
    `;

    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// READ (single)

// UPDATE

// DELETE
roleAppFeaturesRouter.delete('/:roleCode/:appFeaturesCode', (req, res) => {
    const db = getDb();
    const { roleCode, appFeaturesCode } = req.params;

    db.run('DELETE FROM ROLE_APP_FEATURES WHERE role_id=(SELECT id FROM ROLE WHERE code=?) AND app_features_id=(SELECT id FROM APP_FEATURES WHERE code=?)', [roleCode, appFeaturesCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
    });
});
