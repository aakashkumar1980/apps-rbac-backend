-- Create APPS table
CREATE TABLE IF NOT EXISTS APP (
    id INTEGER PRIMARY KEY,
    code VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(255) NOT NULL
);

-- Create APPS_FEATURE table
CREATE TABLE IF NOT EXISTS FEATURE (
    id INTEGER PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    description TEXT,
    app_id INT,
    FOREIGN KEY (app_id) REFERENCES APP(id) ON DELETE CASCADE
);

-- Create ROLE table
CREATE TABLE IF NOT EXISTS ROLE (
    id INTEGER PRIMARY KEY,
    code VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

-- Create ROLE_FEATURES table
CREATE TABLE IF NOT EXISTS ROLE_FEATURES (
    id INTEGER PRIMARY KEY,
    role_id INT,
    feature_id INT,
    FOREIGN KEY (role_id) REFERENCES ROLE(id) ON DELETE CASCADE,
    FOREIGN KEY (feature_id) REFERENCES FEATURE(id) ON DELETE CASCADE
);

-- Create USER_APPS_ROLE table
CREATE TABLE IF NOT EXISTS USER_APPS_ROLES (
    id INTEGER PRIMARY KEY,
    email VARCHAR(255),
    app_id INT,
    role_id INT,
    FOREIGN KEY (app_id) REFERENCES APP(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES ROLE(id) ON DELETE CASCADE,
    UNIQUE (email, app_id, role_id)  -- Ensures each user has only one role within an app
);