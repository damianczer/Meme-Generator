# Meme-Generator

**Authors:** Damian Czerwiński & Dominik Grabowski

Technology: <br><br>
React.js  - https://react.dev/ <br> 
Sass - https://sass-lang.com/documentation/syntax/ <br>
Python - https://www.python.org/ <br>
PostgreSQL - https://www.postgresql.org/ <br>
Flask - https://flask.palletsprojects.com/en/stable/ <br>

 Welcome to the Meme Generator! This application allows you to create, view, and share memes effortlessly. <br>
 Developed by DC & DG, this project is designed to bring fun and creativity to your fingertips. <br>
 Explore the generator, browse the gallery, and learn more about the project in this section. <br>

 <h1>How do you get the Frontend up and running?</h1>

 You need Node.js along with npm: https://nodejs.org/en

 Then, using any terminal, navigate to the application's frontend directory and run the command _“npm install”_ - needed to install the necessary runtime environment packages.

 ```
 npm install
 ```

 ![image](https://github.com/user-attachments/assets/bd54ee4c-95f3-4cf4-8485-917b8c7e4e5a)
 
Then use the _“npm start”_ command to start the application:

 ```
 npm start
 ```

 ![image](https://github.com/user-attachments/assets/04aa6f03-31f2-4155-b2d1-b4f62aa0e014)

 The application will run on the default port 3000 - if it is busy you will receive such information in the console, enjoy!

![image](https://github.com/user-attachments/assets/8f123900-f5e5-4a9c-8da9-4575067bcfc1)

The whole application is based on Webpack, making the application secure and efficient: https://webpack.js.org/

 <h1>How do you get the Backend up and running?</h1>
## Setup Instructions

1. **Create a virtual environment:**
   ```
   python -m venv venv
   ```

2. **Activate the virtual environment:**
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

3. **Install dependencies:**
   ```
   pip install -r requirements.txt
   ```

4. **Install PostgreSQL**  
   Download and install PostgreSQL from [https://www.postgresql.org/download/](https://www.postgresql.org/download/).

5. **Create a new database**  
   Open the PostgreSQL command-line tool (`psql`) and run the following commands:
   ```sql
   CREATE DATABASE meme_generator;
   CREATE USER meme_user WITH PASSWORD 'password';
   GRANT ALL PRIVILEGES ON DATABASE meme_generator TO meme_user;
   ```

6. **Create the necessary table**  
   While still in the PostgreSQL command-line tool (`psql`), connect to the database and create the table:
   ```sql
   \c meme_generator
   CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    file_name TEXT NOT NULL,
    display_name TEXT NOT NULL,
    user_id INTEGER,
    created_at TIMESTAMP DEFAULT NOW()
    );

   ```

7. **Grant privileges to the user**  
   While still connected to the database, grant all privileges on tables and sequences in the `public` schema to the user:
   ```sql
   GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO meme_user;
   GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO meme_user;
   ```

9. **Update the Flask configuration**  
   Change filename `example.env` to `.env`.
   Modify the database connection string in the `.env` file:
   ```properties
   DATABASE_URL=postgresql://<db_user>:<db_pass>@localhost/<db_name>
   ```

   Additionally, you can update other variables in the `.env` file to customize the application behavior:
   - **`UPLOAD_FOLDER`**: Path to the folder where uploaded files will be stored (e.g., `uploads`).
   - **`ALLOWED_EXTENSIONS`**: Comma-separated list of allowed file extensions (e.g., `png,jpg,jpeg`).
   - **`ALLOWED_MIME_TYPES`**: Comma-separated list of allowed MIME types (e.g., `image/png,image/jpeg`).
   - **`MAX_CONTENT_LENGTH`**: Maximum allowed file size in bytes (e.g., `10485760` for 10 MB).

10. **Run the application**  
   Start the Flask application as usual:
   ```bash
   flask run
   ```

## Usage
Once the application is running, you can access it at:

Backend - `http://127.0.0.1:5000/`

Frontend - `http://localhost:3000/`
