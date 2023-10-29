import express from 'express';
import { getDb } from '../../db/db-connection';

export const externalRouter = express.Router();

externalRouter.get('/:email/:appCode', (req, res) => {
    const db = getDb();
    const { email, appCode } = req.params;
    const query = `
    SELECT 
        UAR.email,
        A.code AS appCode,
        A.description AS appDescription,
        R.code AS roleCode,
        R.description AS roleDescription,
        F.code AS featureCode,
        F.description AS featureDescription                      
    FROM 
        USER_APPS_ROLES UAR 
    INNER JOIN 
        APP A ON A.id = UAR.app_id
        
    INNER JOIN    
        ROLE R ON R.id = UAR.role_id
    INNER JOIN
        ROLE_FEATURES RF ON RF.role_id = R.id 
    INNER JOIN    
        FEATURE F ON F.id = RF.feature_id AND F.app_id = A.id

    WHERE 1==1
        AND UAR.email=?
        AND A.code=?            
    ORDER BY 
        UAR.email, A.description, R.description, F.description
    `;

    db.all(query, [email, appCode], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

externalRouter.get('/:appCode', (req, res) => {
    const db = getDb();
    const { appCode } = req.params;
    const query = `
    SELECT 
        A.code AS appCode,
        A.description AS appDescription,
        F.code AS featureCode,
        F.description AS featureDescription                      
    FROM APP A
    INNER JOIN    
        FEATURE F ON F.app_id = A.id
    WHERE 1==1
        AND A.code=?            
    ORDER BY 
        A.description, F.description
    `;

    db.all(query, [appCode], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});