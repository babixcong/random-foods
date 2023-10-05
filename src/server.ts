import path from 'path';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import routerConfig from './routes/config';
import { Server } from 'http';

dotenv.config();

const app: Application = express();
const PORT: Number = Number(process.env.PORT);

// set up routes;
routerConfig(app);

app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({
  extended: true
}));

app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/axios/dist')));

const server: Server = app.listen(PORT, function () {
  console.log("----------------------SERVER START AT " + PORT);
});
