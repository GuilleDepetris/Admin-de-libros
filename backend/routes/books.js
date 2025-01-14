const { Router } = require("express");
const router = Router();
const { unlink} = require('fs-extra');
const path = require('path');

const Book = require("../models/Book");

router.get("/", async (req, res) => {
  const books = await Book.find(); //Busca tdoos los libros creados;
  res.json(books);
});

router.post('/', async (req,res) => {
   const {title, author, isbn} = req.body;
   const imagePath = '/uploads/' + req.file.filename; 
   const newBook = new Book({title, author, isbn, imagePath});
   await newBook.save();
   res.json({message: 'Book Saved'});
});

router.delete('/:id', async (req,res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    //Al guardar la eliminacion en book, nos permite guardar en esa variable el libro eliminado.    
    //No es necesario wardar nada en book
    unlink(path.resolve('./backend/public'+ book.imagePath));
    res.json({message: 'Book Deleted'});

})

module.exports = router;
