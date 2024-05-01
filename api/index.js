import express from 'express';
import mongoose from 'mongoose';
import commentRoutes from './routes/comment.route.js';

mongoose.connect('mongodb://127.0.0.1:27017/Comments')
    .then(() => {
        console.log('MongoDb is connected');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

const app = express();


app.use(express.json());


app.use('/api/comment', commentRoutes);


app.listen(3007, () => {
    console.log(`Server is running on port 3007 !!`);
});
