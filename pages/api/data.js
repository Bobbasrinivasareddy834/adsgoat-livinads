

import { MongoClient } from "mongodb";
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { consoleLogs } = req.body;
            console.log(consoleLogs,'mongodb data');
            const filteredLogs = consoleLogs.filter(obj => Object.keys(obj).length > 0);

            if (filteredLogs.length === 0) {
                throw new Error('No valid data to insert');
            }
            const mergedData = filteredLogs.reduce((acc, obj) => {
                return { ...acc, ...obj };
            }, {});
            const uri = 'mongodb+srv://rakesh:185d1a0151@project.phg7vjo.mongodb.net/Project?retryWrites=true&w=majority';
            const client = new MongoClient(uri);
            await client.connect();
            const result = await client.db('TestData').collection('test').insertOne(mergedData);
            await client.close();
            res.status(200).json({ success: true, data: result });
            console.log("Data Inserted");
        } catch (error) {
            console.error('Error processing data:', error);
            res.status(500).json({ success: false, error: 'Server Error' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
}
  
// import { MongoClient } from "mongodb";

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         try {
//             const { consoleLogs } = req.body;
//             console.log(consoleLogs);

//             // Merge all objects into a single object
//             const mergedData = consoleLogs.reduce((acc, obj) => {
//                 return { ...acc, ...obj };
//             }, {});

//             // Connect to the MongoDB database
//             const uri = 'mongodb+srv://rakesh:185d1a0151@project.phg7vjo.mongodb.net/Project?retryWrites=true&w=majority';
//             const client = new MongoClient(uri);
//             await client.connect();

//             // Insert the merged data as a single record into the database
//             const result = await client.db('TestData').collection('test').insertOne(mergedData);

//             // Close the connection
//             await client.close();

//             // Send response indicating success
//             res.status(200).json({ success: true, data: result });
//             console.log("Data Inserted");
//         } catch (error) {
//             console.error('Error processing data:', error);
//             res.status(500).json({ success: false, error: 'Server Error' });
//         }
//     } else {
//         res.status(405).json({ success: false, error: 'Method Not Allowed' });
//     }
// }
