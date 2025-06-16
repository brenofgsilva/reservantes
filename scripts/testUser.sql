-- scripts/testUser.sql
-- Insert a test user with password 'password123' (pre-hashed)
INSERT INTO "AppUser" (name, email, password_hash) 
VALUES ('Admin User', 'admin@example.com', '$2b$10$3euPcmQFCiblsZeEu5s7p.9OVHgeHWFDk9MlhwXT4Lz4ckRhG7Ed.') 
ON CONFLICT (email) DO NOTHING;
