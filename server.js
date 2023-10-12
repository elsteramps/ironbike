const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 8080;

// Ustaw obsługę CORS
app.use(cors());

// Obsługa danych w formacie JSON
app.use(bodyParser.json());

// Połącz się z bazą danych MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'drone_around_world',
});

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
    return;
  }
  console.log('Połączono z bazą danych MySQL');
});

//wyświetlanie klientów na stronie
app.get('/reqs', (req, res) => {
  const sql = 'SELECT * FROM reqs';

  db.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Błąd pobierania z bazy danych ', err);
      res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych.' });
  }

  res.status(201);
  res.json(results);

  })
});

//pobieranie 
app.get('/admin_data', (req, res) => {
  const sql = 'SELECT * FROM admin_data';

 db.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Błąd pobierania z bazy danych ', error);
      results.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych.' });
  }
  console.log(results)
  res.json(results);

  })
});

app.get('/images', (req, res) => {
  const imagesFolder = path.join(__dirname, 'public/images');
  fs.readdir(imagesFolder, (err, files) => {
    if (err) {
      console.error('Błąd odczytu folderu z zdjęciami', err);
      res.status(500).json({ error: 'Błąd odczytu folderu z zdjęciami' });
      return;
    }

    const images = files.map(file => ({
      name: file,
      path: `/images/${file}` // Ścieżka do zdjęcia
    }));

    res.json(images);
  });
});


app.post('/admin_data', (req, res) => {
  const password = req.body.haShedPassword;
  console.log(req.body);

  const sql = 'UPDATE admin SET password = ? WHERE id = 1;';

  db.query(sql, [password], (err, result) => {
    if (err) {
      console.error('Błąd dodawania danych do bazy:', err);
      err.status(500).json({ message: 'Wystąpił błąd podczas dodawania danych.' });
      return;
    }
    res.status(201).json({ message: 'Hasło zostało zmnienione' });
  });
});

app.post('/reqs', (req, res) => {
    const formData = [
      req.body.imię,
      req.body.email,
      req.body.telefon
    ];

    const sql = 'INSERT INTO reqs (`imię`, `email`, `telefon`) VALUES (?)';
  
    db.query(sql, [formData], (err, result) => {
      if (err) {
        console.error('Błąd dodawania danych do bazy:', err);
        res.status(500).json({ message: 'Wystąpił błąd podczas dodawania danych.' });
        return;
      }
      res.status(201).json({ message: 'Zgłoszenie zostało dodane' });
    });
  });

app.listen(port, () => {
  console.log(`Serwer Express uruchomiony na porcie ${port}`);
});