const express = require("express");

const userRoutes = require("./src/routes/userRoutes");
const bookRoutes = require("./src/routes/bookRoutes");
const authorRoutes = require("./src/routes/authorRoutes");
const publisherRoutes = require("./src/routes/publisherRoutes");
const bookAuthorRoutes = require("./src/routes/bookAuthorRoutes");
const bookGenreRoutes = require("./src/routes/bookGenreRoutes");
const reviewRoutes = require('./src/routes/reviewRoutes');
const reviewCommentRoutes = require('./src/routes/reviewCommentRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/publishers', publisherRoutes);
app.use('/api/book-authors', bookAuthorRoutes);
app.use('/api/book-genres', bookGenreRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/review-comments', reviewCommentRoutes);

app.listen(port, () => console.log(`App listening on port ${port}`));