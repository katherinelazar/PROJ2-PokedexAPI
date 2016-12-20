# Pokedex

> Simple REST API that manipulates pokemon data stored in a postgres database.


## Getting started

1. Install postgres on your machine.
    - Mac OS - [brew](https://launchschool.com/blog/how-to-install-postgresql-on-a-mac) or [Postgres.app](http://postgresapp.com)
    - [Linux](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-14-04)
2. Clone this repository
3. Install dependencies with `npm i`
4. Start the server with `npm start`, the api is now running at `http://localhost:3000`


## Task

1. Complete the model to represent a pokemon (id, name, type...) in `/models/pokemon.js`
2. Implement the following endpoints in `/routes/index.js`:
    - `GET /pokemon` - returns all pokemon sorted by id (normal pokedex order)
    - `POST /pokemon` - adds a pokemon
    - `GET /pokemon/:id` - returns the pokemon matching that id
    - `DELETE /pokemon/:id` - deletes a pokemon matching that id
3. Now add necessary field/s to the `Pokemon` model to determine if a pokemon has an evolution (e.g. `pikachu` evolves into `raichu`, and `raichu` does not evolve.
4. Next add an endpoint `GET /pokemon/:id/evolutions` which returns an array of immediate evolutions (e.g. for `squirtle` just return `wartotle` object, whereas for `eevee` return `flareon`, `joltean` and `vaporeon`).


## Technology

- [Sequelize](http://docs.sequelizejs.com/en/v3) with Postgres
- [Express](https://expressjs.com)
- [Babel](https://babeljs.io)
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)


## Author

- Sam Wemyss
