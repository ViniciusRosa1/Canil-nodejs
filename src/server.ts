import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/router';

dotenv.config();
const server = express();

server.set( 'view engine', 'mustache' );
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Server static files
server.use( express.static(path.join( __dirname, '../public')));

//Routes   
server.use(mainRoutes);

server.use(  (req, res) => {
    res.status(404).send("Not Found");
});

server.listen(3000);
