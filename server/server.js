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
  { name: 'Dema Roxie', price: '1999 zł', image: 'https://muzikercdn.com/uploads/products/14268/1426863/main_b712aa33.jpg', reserved: false },
  { name: 'Dema Tigra', price: '1999 zł', image: 'https://zdjecia.bikeworld.pl/produkty/medium/rowery_gorskie_xc_maraton_dema_tigra_1_0_1b7bc.jpg', description: 'Dema Tiger', reserved: false },
  { name: 'Zeger', price: '1379 zł', image: 'https://a.allegroimg.com/s1024/0ca4fc/91d5341f43c5a7ab823d0e90bb35', description: 'Zeger', reserved: false },
  { name: 'Modet Orion', price: '1499 zł', image: 'https://b2b.dema.bike/virtual/l/B21157.jpg', description: 'Modet Orion', reserved: false },
  { name: 'Modet City 24', price: '1200 zł', image: 'https://b2b.dema.bike/virtual/l/B21291.jpg', description: 'Modet city 24', reserved: false },
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
  reserved: { type: Boolean, default: false }
});

async function send(data, subject) {
  const msg = {
      to: process.env.EMAIL, // Odbiorca
      from: 'elstermetalhead@gmail.com', // Nadawca (musi być zweryfikowany w SendGrid)
      subject: subject,
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

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema, 'products');

// Route to fetch all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({reserved: false});
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

app.post('/reserve/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const formData = [
      req.body.name,
      req.body.email,
      req.body.phone
    ];
    // Find and update/delete the product in the database
    // For example, to mark as reserved:
    const updatedProduct = await Product.findByIdAndUpdate(productId, { reserved: true }, { new: true });

    if (updatedProduct) {
      res.status(200).send('Product reserved');
    } else {
      res.status(404).send('Product not found');
    }

    let content = formData.reduce(function(a, b) {
      return a + '<li>' + b + '</li>';
    }, '');
  
    send(content, `ten zjeb zarezerwował rower ${productId}`);
  } catch (error) {
    res.status(500).send('Error reserving product');
  }
});




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

    send(content, 'ten zjeb chce się z tobą skontaktować');
    

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