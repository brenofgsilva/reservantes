CREATE TABLE Restaurant (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    location VARCHAR(255),
    contact_info VARCHAR(255),
    owner_id INTEGER 
);

CREATE TABLE Event (
    id SERIAL PRIMARY KEY,
    restaurant_id INTEGER NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    date_time TIMESTAMP NOT NULL,
    capacity INTEGER NOT NULL,
    status VARCHAR(50) DEFAULT 'open',
    FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id)
);

CREATE TABLE TableEntity (
    id SERIAL PRIMARY KEY,
    restaurant_id INTEGER NOT NULL,
    seats INTEGER NOT NULL,
    table_number VARCHAR(20),
    FOREIGN KEY (restaurant_id) REFERENCES Restaurant(id)
);

CREATE TABLE "AppUser" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE Reservation (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    event_id INTEGER NOT NULL,
    num_guests INTEGER NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES AppUser(id),
    FOREIGN KEY (event_id) REFERENCES Event(id)
);