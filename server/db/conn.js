const { MongoClient } = require("mongodb")
const Db = process.env.ATLAS_URI
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let _db
let _collection

module.exports = {
    connectToMongoDB: async function (callback) {
        try {
            await client.connect()
            _db = client.db("Employee")
            _collection = _db.collection("employees")
            console.log("Successfully connected to MongoDB.")
            
            return callback(null)
        } catch (error) {
            return callback(error)
        }
    },

    getDb: function () {
        return _db
    }
}