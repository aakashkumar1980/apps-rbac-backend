-- Apps
INSERT INTO APP (code, description) VALUES
    ('E-COMMERCE', 'E-Commerce App'),
    ('COLLEGE', 'College Management App');
-- App Features
INSERT INTO FEATURE (code, description, app_id) VALUES
    ('PRODUCT_LIST', 'View Products List', (SELECT id FROM APP WHERE code='E-COMMERCE')),
    ('ORDER_MANAGEMENT', 'Manage Customer Orders', (SELECT id FROM APP WHERE code='E-COMMERCE')),
    ('CUSTOMER_REVIEWS', 'View Customer Reviews', (SELECT id FROM APP WHERE code='E-COMMERCE')),
    ('E-COM_ANALYTICS', 'Access E-commerce Analytics', (SELECT id FROM APP WHERE code='E-COMMERCE')),
    ('STUDENT_DIRECTORY', 'Access Student Directory', (SELECT id FROM APP WHERE code='COLLEGE')),
    ('COURSE_MANAGEMENT', 'Manage Courses', (SELECT id FROM APP WHERE code='COLLEGE')),
    ('EXAM_SCHEDULE', 'Manage Exam Schedules', (SELECT id FROM APP WHERE code='COLLEGE'));

-- Roles
INSERT INTO ROLE (code, description) VALUES
    ('ADMIN', 'Administrator'),
    ('RESEARCHER', 'Researcher'),
    ('USER', 'User');
-- Role-App Feature Mapping
INSERT INTO ROLE_FEATURES (role_id, feature_id) VALUES
    ((SELECT id FROM ROLE WHERE code='ADMIN'), (SELECT id FROM FEATURE WHERE code='PRODUCT_LIST')),
    ((SELECT id FROM ROLE WHERE code='ADMIN'), (SELECT id FROM FEATURE WHERE code='ORDER_MANAGEMENT')),   
    ((SELECT id FROM ROLE WHERE code='ADMIN'), (SELECT id FROM FEATURE WHERE code='CUSTOMER_REVIEWS')),    
    ((SELECT id FROM ROLE WHERE code='ADMIN'), (SELECT id FROM FEATURE WHERE code='STUDENT_DIRECTORY')),
    ((SELECT id FROM ROLE WHERE code='ADMIN'), (SELECT id FROM FEATURE WHERE code='COURSE_MANAGEMENT')),
    ((SELECT id FROM ROLE WHERE code='ADMIN'), (SELECT id FROM FEATURE WHERE code='EXAM_SCHEDULE')),
    ((SELECT id FROM ROLE WHERE code='RESEARCHER'), (SELECT id FROM FEATURE WHERE code='E-COM_ANALYTICS')),
    ((SELECT id FROM ROLE WHERE code='USER'), (SELECT id FROM FEATURE WHERE code='PRODUCT_LIST')),    
    ((SELECT id FROM ROLE WHERE code='USER'), (SELECT id FROM FEATURE WHERE code='CUSTOMER_REVIEWS')),
    ((SELECT id FROM ROLE WHERE code='USER'), (SELECT id FROM FEATURE WHERE code='STUDENT_DIRECTORY'));

-- User-App-Role Mapping
INSERT INTO USER_APPS_ROLES (email, app_id, role_id) VALUES
    ('aakash.kumar@adesigners.com', (SELECT id FROM APP WHERE code='E-COMMERCE'), (SELECT id FROM ROLE WHERE code='ADMIN')),
    ('aakash.kumar@adesigners.com', (SELECT id FROM APP WHERE code='COLLEGE'), (SELECT id FROM ROLE WHERE code='ADMIN')),
    ('aaditya.kumar@adesigners.com', (SELECT id FROM APP WHERE code='E-COMMERCE'), (SELECT id FROM ROLE WHERE code='RESEARCHER')),
    ('kavita.raikwar@adesigners.com', (SELECT id FROM APP WHERE code='E-COMMERCE'), (SELECT id FROM ROLE WHERE code='ADMIN')),
    ('kavita.raikwar@adesigners.com', (SELECT id FROM APP WHERE code='COLLEGE'), (SELECT id FROM ROLE WHERE code='USER'));

