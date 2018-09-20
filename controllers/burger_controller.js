let db = require('../models')

module.exports = function(app) {
    app.get('/', (req, res) => {
        
        db.Burger.findAll(
        {burgers: data}
        ).then(function(hbsObject) {
            res.render('index', hbsObject)
        })
    })

    // app.post('/api/burgers', (req, res) => {
    //     burger.create([
    //         'burger_name',
    //     ], [
    //         req.body.burger_name], (result)=> {
    //         res.json({id: result.insertId})
    //     })
    // })
    
    // app.put('/api/burgers/:id', (req, res) => {
    //     let condition = 'id = ' + req.params.id
    
    //     console.log('condition', condition)
    
    //     burger.update({
    //         devoured: req.body.devoured
    //     }, condition, (result) => {
    //         if (result.changedRows === 0) {
    //             return res.status(404).end()
    //         } else {
    //             res.status(200).end()
    //         }
    //     })
    // })
    
    // app.delete('/api/burgers/:id', (req, res) => {
    //     let condition = 'id = ' + req.params.id
        
    //     console.log('condition', condition)
        
    //     burger.delete(condition, (result) => {
    //         if (result.affectedRows === 0) {
    //             return res.status(404).end()
    //         } else {
    //             res.status(200).end()
    //         }
    //     })
    // })
}

