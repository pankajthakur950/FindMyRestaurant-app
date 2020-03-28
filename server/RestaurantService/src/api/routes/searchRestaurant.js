module.exports = app => {
    app.get('/search', (req, res) =>{
        res.send("searching restaurants");
    });
};