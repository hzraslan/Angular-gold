const mongoose = require('mongoose'),
      Game = mongoose.model('Game')

module.exports = {
    index: function(req, res){
        Game.find({}, function(err, games){
            if(err){
                console.log("Returned error", err);
               res.json({message: "Error", error: err})
            }else{
                res.json( games)
            }
        })
    },
    create: function(req, res){
       var game = new Game();
        game.name = req.body.name;
        game.result = req.body.result;
        game.gold = req.body.gold,
        game.save(err=>{
            if(err){
                console.log(err)
            }else {
                console.log("perrrfect")
                res.json(game)
            }
        })
    },
    destroy: function(req, res){
        
        Game.findById(req.params.id, function(err, game){
          if(err){
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
          }
          else{
            game.remove();
            res.json({message: "Success"})
          }
      })
    },
    show: function(req, res){
        
        Game.findById(req.params.id, function(err, game){
          if(err){
            console.log("Returned error", err);
            res.json({message: "Error", error: err})
          }
          else{
            res.json(game)
          }
      })
    },
    update: function(req, res){
        Game.findById(req.params.id, function(err,game){
            if (err){
                console.log(err);
            } else {
                res.json(game)
            }
        })
    },
}