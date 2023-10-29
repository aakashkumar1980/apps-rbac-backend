import express from 'express';
import { getDb } from '../../db/db-connection';

export const roleAppfeaturesRouter = express.Router();

// CREATE
roleAppfeaturesRouter.post('/', (req, res) => {
    const db = getDb();
    const { roleCode, appfeaturesCode } = req.body;
    const query = `
    INSERT INTO ROLE_APPFEATURES (role_id, appfeatures_id) VALUES
    ((SELECT id FROM ROLE WHERE code=?), (SELECT id FROM APPFEATURES WHERE code=?))
    `;

    db.run(query, [roleCode, appfeaturesCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

// READ (all)
roleAppfeaturesRouter.get('/', (req, res) => {
    const db = getDb();
    const query = `
        SELECT 
            RAF.id,
            R.code AS roleCode,
            R.description AS roleDescription,
            A.description AS appDescription,
            AF.code AS appfeaturesCode,
            AF.description AS appfeaturesDescription              
        FROM 
            ROLE_APPFEATURES RAF 
        INNER JOIN 
            ROLE R ON R.id = RAF.role_id
        INNER JOIN    
            APPFEATURES AF ON AF.id = RAF.appfeatures_id
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
roleAppfeaturesRouter.delete('/:roleCode/:appfeaturesCode', (req, res) => {
    const db = getDb();
    const { roleCode, appfeaturesCode } = req.params;

    db.run(`DELETE FROM ROLE_APPFEATURES 
            WHERE role_id=(SELECT id FROM ROLE WHERE code=?) 
                AND appfeatures_id=(SELECT id FROM APPFEATURES WHERE code=?)
            `, [roleCode, appfeaturesCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ changes: this.changes });
    });
});
