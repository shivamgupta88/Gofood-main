const mongoose = require("mongoose");
const mongoURI = 'mongodb+srv://tsg782:S1IJL82yVBkgPXi3@cluster0.33grfa3.mongodb.net/?retryWrites=true&w=majority'

//const mongoURI = process.env.MONGODB_URI;

// module.exports = function (callback) {
//   mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//       // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//       if (err) console.log("---" + err)
//       else {
//           // var database =
//           console.log("connected to mongo")
//           const foodCollection = await mongoose.connection.db.collection("food_items");
//           foodCollection.find({}).toArray(async function (err, data) {
//               const categoryCollection = await mongoose.connection.db.collection("Categories");
//               categoryCollection.find({}).toArray(async function (err, Catdata) {
//                   callback(err, data, Catdata);
//               })
//           });
//           // listCollections({name: 'food_items'}).toArray(function (err, database) {
//           // });
//           //     module.exports.Collection = database;
//           // });
//       }
//   })
// };


const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("connected");
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(async (err, data) => {
      const foodCategory = await mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(async function(err, catData){
          if (err) {
              console.log(err)
          }
          else {
              global.food_items = data;
              global.foodCategory = catData;
          };
      })

    //   if (err) {
    //     console.log(err);
    //   } else {
    //     global.food_items = data;
    //   }

    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongodb;