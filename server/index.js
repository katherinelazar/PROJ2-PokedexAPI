import express from 'express';
import bodyParser from 'body-parser';
import pokemonRoutes from './routes/pokemon';

const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/pokemon', pokemonRoutes);

app.listen(PORT, () => {
   console.log('Pokemon API listening on http://localhost:' + PORT + '/pokemon');
});
