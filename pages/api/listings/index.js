// import clientPromise from '../../lib/mongodb';

// export default async function handler(req, res) {
//   try {
//     const client = await clientPromise;
//     // const db = client.db('sample_airbnb'); // Base de datos correcta
//     const db = client.db('Reparaphone_data');

//     const listings = await db
//       // .collection('listingsAndReviews') // Colección correcta
//       .collection('db_info')
//       .find({})
//       .limit(10)
//       .toArray();

//     res.status(200).json(listings); // Respuesta con los datos
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     res.status(500).json({
//       message: 'Internal Server Error'
//     });
//   }
// }


import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    // const db = client.db('sample_airbnb'); // Base de datos correcta
    const db = client.db('Reparaphone_data');

    const listings = await db
      // .collection('listingsAndReviews') // Colección correcta
      .collection('db_info')
      .find({})
      .limit(10)
      .toArray();

    res.status(200).json(listings); // Respuesta con los datos
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}
