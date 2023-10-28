import express from 'express';
import { getDb } from '../../db/db-connection';

export const employeeAppsRoleRouter = express.Router();

// CREATE
employeeAppsRoleRouter.post('/', (req, res) => {
    const db = getDb();
    const { email, appCode, roleCode } = req.body;
    const query = `
    INSERT INTO EMPLOYEE_APPS_ROLES (email, app_id, role_id) VALUES
    (?,  (SELECT id FROM APP WHERE code=?), (SELECT id FROM ROLE WHERE code=?))
    `;

    db.run(query, [email, appCode, roleCode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID });
    });
});

// READ (all)
employeeAppsRoleRouter.get('/', (req, res) => {
    const db = getDb();
    const query = `
        SELECT 
            EAR.email,
            A.code AS appCode,
            A.description AS appDescription,
            R.code AS roleCode,
            R.description AS roleDescription              
        FROM 
            EMPLOYEE_APPS_ROLES EAR 
        INNER JOIN 
            APP A ON A.id = EAR.app_id
        INNER JOIN    
            ROLE R ON R.id = EAR.role_id
        ORDER BY 
            EAR.email, A.description, R.description
    `;

    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// READ (single)

// UPDATE 

// DELETE
employeeAppsRoleRouter.delete('/:email/:appCode/:roleCode', (req, res) => {
    const db = getDb();
    const { email, appCode, roleCode } = req.params;
    db.run(`DELETE FROM EMPLOYEE_APPS_ROLES 
            WHERE email=? 
                AND app_id=(SELECT id FROM APP WHERE code=?) 
                AND role_id=(SELECT id FROM ROLE WHERE code=?)`, 
            [email, appCode, roleCode], function(err) {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ changes: this.changes });
            }
    );
});

// Since the table has a unique constraint that each employee can only have one role, an update operation may not be straightforward or necessary. However, if you wish to add such an operation, consider the semantics you'd want, such as swapping roles for an employee or reassigning them to a different app.
