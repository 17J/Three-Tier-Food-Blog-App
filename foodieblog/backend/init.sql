-- init.sql for FoodieBlog database

-- Create the users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL -- IMPORTANT: Hash passwords in production!
);

-- Create the blogs table
CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Optional: Insert some initial data for testing
INSERT INTO users (username, password) VALUES ('testuser', 'testpassword'); -- Again, hash passwords!
INSERT INTO blogs (title, content, user_id) VALUES ('My First Food Blog', 'This is my first blog post about delicious food.', 1);
INSERT INTO blogs (title, content, user_id) VALUES ('Another Food Adventure', 'I tried a new restaurant today and it was amazing!', 1);