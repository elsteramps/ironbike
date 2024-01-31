const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');
const mongoose = require('mongoose');
require('dotenv').config();
const password = process.env.PASSWORD_EMAIL;
console.log(process.env.PASSWORD_EMAIL)
const app = express();
const port = process.env.PORT || 5000;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sampleProducts = [
  { name: 'Mountain Bike', price: '1200 zł', image: 'https://n69.pl/media/mf_webp/jpg/media/catalog/product/cache/88a2aeeb0c0b22688527a6761111bc61/c/l/clone-a-willy-zestaw-do-klonowania-swiecacy-w-ciemnosci-zielony_1_.webp', reserved: false },
  { name: 'Road Bike', price: '1000 zł', image: 'https://woome.pl/wp-content/uploads/sites/13/p-monstered-dragon-dildo-lodrax-25-cm-productimage-1.jpg', description: 'Fast road bike', reserved: false },
  // Add more sample products as needed
];

// Temporary route to add sample products to the database
app.get('/add-sample-products', async (req, res) => {
  try {
    await Product.insertMany(sampleProducts);
    res.send('Sample products added successfully');
  } catch (error) {
    res.status(500).send('Error adding sample products');
  }
});


// Ustaw obsługę CORS
app.use(cors());

// Obsługa danych w formacie JSON
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0.ttxfn10.mongodb.net/kontakty', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the product
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
  description: String,
});

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema, 'products');

// Route to fetch all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

// Route to fetch a single product by ID
app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching product');
  }
});


async function send(data) {
  const msg = {
      to: process.env.EMAIL, // Odbiorca
      from: 'elstermetalhead@gmail.com', // Nadawca (musi być zweryfikowany w SendGrid)
      subject: "ten zjeb chcę się z tobą skontaktować",
      text: data,
      html: '<strong>' + data + '</strong>',
  };

  try {
      await sgMail.send(msg);
      console.log("Wiadomość wysłana");
  } catch (error) {
      console.error(error);

      if (error.response) {
          console.error(error.response.body)
      }
  }
}

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //

// Połącz się z bazą danych MySQL
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'drone_around_world',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Błąd połączenia z bazą danych:', err);
//     return;
//   }
//   console.log('Połączono z bazą danych MySQL');
// });

// //wyświetlanie klientów na stronie
// app.get('/reqs', (req, res) => {
//   const sql = 'SELECT * FROM reqs';

//   db.query(sql, (error, results, fields) => {
//     if (error) {
//       console.error('Błąd pobierania z bazy danych ', err);
//       res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych.' });
//   }

//   res.status(201);
//   res.json(results);

//   })
// });

// //pobieranie 
// app.get('/admin_data', (req, res) => {
//   const sql = 'SELECT * FROM admin_data';

//  db.query(sql, (error, results, fields) => {
//     if (error) {
//       console.error('Błąd pobierania z bazy danych ', error);
//       results.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych.' });
//   }
//   console.log(results)
//   res.json(results);

//   })
// });

// app.get('/images', (req, res) => {
//   const imagesFolder = path.join(__dirname, 'public/images');
//   fs.readdir(imagesFolder, (err, files) => {
//     if (err) {
//       console.error('Błąd odczytu folderu z zdjęciami', err);
//       res.status(500).json({ error: 'Błąd odczytu folderu z zdjęciami' });
//       return;
//     }

//     const images = files.map(file => ({
//       name: file,
//       path: `/images/${file}` // Ścieżka do zdjęcia
//     }));

//     res.json(images);
//   });
// });


// app.post('/admin_data', (req, res) => {
//   const password = req.body.haShedPassword;
//   console.log(req.body);

//   const sql = 'UPDATE admin SET password = ? WHERE id = 1;';

//   db.query(sql, [password], (err, result) => {
//     if (err) {
//       console.error('Błąd dodawania danych do bazy:', err);
//       err.status(500).json({ message: 'Wystąpił błąd podczas dodawania danych.' });
//       return;
//     }
//     res.status(201).json({ message: 'Hasło zostało zmnienione' });
//   });
// });

app.post('/reqs', (req, res) => {
    const formData = [
      req.body.imię,
      req.body.email,
      req.body.telefon
    ];

    var content = formData.reduce(function(a, b) {
      return a + '<li>' + b + '</li>';
    }, '');

    send(content);
    

//     const sql = 'INSERT INTO reqs (`imię`, `email`, `telefon`) VALUES (?)';
  
//     db.query(sql, [formData], (err, result) => {
//       if (err) {
//         console.error('Błąd dodawania danych do bazy:', err);
//         res.status(500).json({ message: 'Wystąpił błąd podczas dodawania danych.' });
//         return;
//       }
//       res.status(201).json({ message: 'Zgłoszenie zostało dodane' });
//     });
  });

app.listen(port, () => {
  console.log(`Serwer Express uruchomiony na porcie ${port}`);
});