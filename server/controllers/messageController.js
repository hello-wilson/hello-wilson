const { query } = require('../models/dataModel');

const messageController = { 
 
  postMessage: (req, res) => {
    const { user_id, sent, response } = req.body
    query('INSERT INTO messages (user_id, sent, response) VALUES ($1 ,$2, $3)', [ user_id, sent, response ], error => {
      if (error){
        throw error
      }
    })
    res.status(201).json({status: 'success', message: 'Message Added'})
  }, 
  getMessages: (req, res) => {
    //const { user_id } = req.body
    //console.log(user_id)
    //WHERE user_id=$1 to search by uses
    query(`SELECT * FROM messages`, (error, results) => {
      if(error){
        throw error
      }
      res.status(200).json(results)
    } )
  }
}

module.exports = messageController;