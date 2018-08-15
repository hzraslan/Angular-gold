var games = require('../controllers/games.js');
module.exports = function(app){
app.get('/games', function(req, res) {
    games.index(req, res);
})
app.post('/game/new', function(req, res) {
    games.create(req, res);
})
app.get('/game/:id', function(req, res) {
    games.show(req, res);
})
app.put('/game/:id/update', function(req, res) {
    games.update(req, res);
})
app.delete('/game/:id/remove', function(req, res) {
    games.destroy(req, res);
})
}