const { get } = require("../routes/userRoutes");

    const getUsers = "SELECT * FROM users";
    const getUserById = "SELECT * FROM users WHERE userid = $1";
    const addUser = "INSERT INTO users (email, hashpassword, role) VALUES ($1, $2, $3) RETURNING *";
    const updateUser = "UPDATE users SET email = $1, hashpassword = $2, role = $3 WHERE userid = $4 RETURNING *";
    const deleteUser = "DELETE FROM users WHERE userid = $1";

    const getAllBooks = "SELECT * FROM Books";
    const getBookById = "SELECT * FROM Books WHERE BookID = $1";
    const addBook = `
        INSERT INTO Books (Title, AuthorID, PublisherID, Price, Synopsis, ISBN, PublicationDate, Language) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
        RETURNING *`;
    const updateBook = `
        UPDATE Books 
        SET Title = $1, AuthorID = $2, PublisherID = $3, Price = $4, Synopsis = $5, ISBN = $6, PublicationDate = $7, Language = $8 
        WHERE BookID = $9 
        RETURNING *`;
    const deleteBook = "DELETE FROM Books WHERE BookID = $1 RETURNING *";

    const getAllAuthors = "SELECT * FROM Authors";
    const getAuthorById = "SELECT * FROM Authors WHERE AuthorID = $1";
    const addAuthor = `
        INSERT INTO Authors (UserID, Name, Bio) 
        VALUES ($1, $2, $3) 
        RETURNING *`;
    const updateAuthor = `
        UPDATE Authors 
        SET UserID = $1, Name = $2, Bio = $3 
        WHERE AuthorID = $4 
        RETURNING *`;
    const deleteAuthor = "DELETE FROM Authors WHERE AuthorID = $1 RETURNING *";

    const getAllPublishers = "SELECT * FROM Publishers";
    const getPublisherById = "SELECT * FROM Publishers WHERE PublisherID = $1";
    const addPublisher = `
        INSERT INTO Publishers (UserID, Name, Address) 
        VALUES ($1, $2, $3) 
        RETURNING *`;
    const updatePublisher = `
        UPDATE Publishers 
        SET UserID = $1, Name = $2, Address = $3 
        WHERE PublisherID = $4 
        RETURNING *`;
    const deletePublisher = "DELETE FROM Publishers WHERE PublisherID = $1 RETURNING *";

    const getAllGenres = "SELECT * FROM Genres";
    const getGenreById = "SELECT * FROM Genres WHERE GenreID = $1";
    const addGenre = "INSERT INTO Genres (GenreName) VALUES ($1) RETURNING *";
    const updateGenre = "UPDATE Genres SET GenreName = $1 WHERE GenreID = $2 RETURNING *";
    const deleteGenre = "DELETE FROM Genres WHERE GenreID = $1 RETURNING *";

    const getBooksByAuthorId = `
        SELECT B.*
        FROM Books B
        INNER JOIN Books_Authors BA ON B.BookID = BA.BookID
        WHERE BA.AuthorID = $1`;
    const getAuthorsByBookId = `
        SELECT A.*
        FROM Authors A
        INNER JOIN Books_Authors BA ON A.AuthorID = BA.AuthorID
        WHERE BA.BookID = $1`;

    const getBooksByGenreId = `
        SELECT B.*
        FROM Books B
        INNER JOIN Books_Genres BG ON B.BookID = BG.BookID
        WHERE BG.GenreID = $1`;
    const getGenresByBookId = `
        SELECT G.*
        FROM Genres G
        INNER JOIN Books_Genres BG ON G.GenreID = BG.GenreID
        WHERE BG.BookID = $1`;

    const getAllCustomers = "SELECT * FROM Customers";
    const getCustomerById = "SELECT * FROM Customers WHERE CustomerID = $1";
    const addCustomer = "INSERT INTO Customers (UserID, Name, Language) VALUES ($1, $2, $3) RETURNING *";
    const updateCustomer = "UPDATE Customers SET Name = $1, Language = $2 WHERE CustomerID = $3 RETURNING *";
    const deleteCustomer = "DELETE FROM Customers WHERE CustomerID = $1 RETURNING *";

    const getAllStores = "SELECT * FROM Stores";
    const getStoreById = "SELECT * FROM Stores WHERE StoreID = $1";
    const addStore = "INSERT INTO Stores (Location, Address, ContactInfo, HoursOperational) VALUES ($1, $2, $3, $4) RETURNING *";
    const updateStore = "UPDATE Stores SET Location = $1, Address = $2, ContactInfo = $3, HoursOperational = $4 WHERE StoreID = $5 RETURNING *";
    const deleteStore = "DELETE FROM Stores WHERE StoreID = $1 RETURNING *";

    const getAllReviews = "SELECT * FROM Reviews";
    const getReviewById = "SELECT * FROM Reviews WHERE ReviewID = $1";
    const addReview = "INSERT INTO Reviews (BookID, CustomerID, Rating, Comment, DatePosted) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const updateReview = "UPDATE Reviews SET Rating = $1, Comment = $2, DatePosted = $3 WHERE ReviewID = $4 RETURNING *";
    const deleteReview = "DELETE FROM Reviews WHERE ReviewID = $1 RETURNING *";

    const getAllReviewComments = "SELECT * FROM ReviewComment";
    const getReviewCommentById = "SELECT * FROM ReviewComment WHERE CommentID = $1";
    const addReviewComment = "INSERT INTO ReviewComment (ReviewID, CustomerID, ParentCommentID, Comment, DatePosted) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const updateReviewComment = "UPDATE ReviewComment SET Comment = $1, DatePosted = $2 WHERE CommentID = $3 RETURNING *";
    const deleteReviewComment = "DELETE FROM ReviewComment WHERE CommentID = $1 RETURNING *";

    const getAllStock = "SELECT * FROM Stock";
    const getStockById = "SELECT * FROM Stock WHERE StockID = $1";
    const addStock = "INSERT INTO Stock (BookID, StoreID, Quantity) VALUES ($1, $2, $3) RETURNING *";
    const updateStock = "UPDATE Stock SET BookID = $1, StoreID = $2, Quantity = $3 WHERE StockID = $4 RETURNING *";
    const deleteStock = "DELETE FROM Stock WHERE StockID = $1 RETURNING *";

    const getAllRewards = "SELECT * FROM Rewards";
    const getRewardById = "SELECT * FROM Rewards WHERE RewardID = $1";
    const addReward = "INSERT INTO Rewards (PointsRequired, Description) VALUES ($1, $2) RETURNING *";
    const updateReward = "UPDATE Rewards SET PointsRequired = $1, Description = $2 WHERE RewardID = $3 RETURNING *";
    const deleteReward = "DELETE FROM Rewards WHERE RewardID = $1 RETURNING *";

    const getAllCustomerRewards = "SELECT * FROM CustomerReward";
    const getCustomerRewardById = "SELECT * FROM CustomerReward WHERE CustomerID = $1 AND RewardID = $2";
    const addCustomerReward = "INSERT INTO CustomerReward (CustomerID, RewardID, DateClaimed) VALUES ($1, $2, $3) RETURNING *";
    const updateCustomerReward = "UPDATE CustomerReward SET DateClaimed = $1 WHERE CustomerID = $2 AND RewardID = $3 RETURNING *";
    const deleteCustomerReward = "DELETE FROM CustomerReward WHERE CustomerID = $1 AND RewardID = $2 RETURNING *";

    const getAllWishlists = "SELECT * FROM Wishlist;";
    const getWishlistById = "SELECT * FROM Wishlist WHERE WishlistID = $1;";
    const addWishlist = "INSERT INTO Wishlist (CustomerID, BookID, CreationDate) VALUES ($1, $2, $3) RETURNING *;";
    const updateWishlist = "UPDATE Wishlist SET CustomerID = $1, BookID = $2, CreationDate = $3 WHERE WishlistID = $4 RETURNING *;";
    const deleteWishlist = "DELETE FROM Wishlist WHERE WishlistID = $1;";

    module.exports = {
        getUsers,
        getUserById,
        addUser,
        updateUser,
        deleteUser,

        getAllBooks,
        getBookById,
        addBook,
        updateBook,
        deleteBook,

        getAllAuthors,
        getAuthorById,
        addAuthor,
        updateAuthor,
        deleteAuthor,

        getAllPublishers,
        getPublisherById,
        addPublisher,
        updatePublisher,
        deletePublisher,

        getAllGenres,
        getGenreById,
        addGenre,
        updateGenre,
        deleteGenre,

        getBooksByAuthorId,
        getAuthorsByBookId,

        getBooksByGenreId,
        getGenresByBookId,

        getAllCustomers,
        getCustomerById,
        addCustomer,
        updateCustomer,
        deleteCustomer,

        getAllStores,
        getStoreById,
        addStore,
        updateStore,
        deleteStore,

        getAllReviews,
        getReviewById,
        addReview,
        updateReview,
        deleteReview,

        getAllReviewComments,
        getReviewCommentById,
        addReviewComment,
        updateReviewComment,
        deleteReviewComment,

        getAllWishlists,
        getWishlistById,
        addWishlist,
        updateWishlist,
        deleteWishlist,

        getAllStock,
        getStockById,
        addStock,
        updateStock,
        deleteStock,

        getAllRewards,
        getRewardById,
        addReward,
        updateReward,
        deleteReward,

        getAllCustomerRewards,
        getCustomerRewardById,
        addCustomerReward,
        updateCustomerReward,
        deleteCustomerReward,

        getAllWishlists,
        getWishlistById,
        addWishlist,
        updateWishlist,
        deleteWishlist,
    };