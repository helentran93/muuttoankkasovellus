const express = require('express');
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Enable CORS
app.use(cors());

// static file middleware
app.use(express.static(path.join(__dirname, 'public')));

const species = [
  {
    name: 'mallard'
  },
  {
    name: 'redhead'
  },
  {
    name: 'gadwall'
  },
  {
    name: 'canvasback'
  },
  {
    name: 'lesser scaup'
  }
];

const sightings = [
  {
    id: '1',
    species: 'gadwall',
    description: 'All your ducks are belong to us',
    dateTime: '2016-10-01T01:01:00Z',
    count: 1
  },
  {
    id: '2',
    species: 'lesser scaup',
    description: 'This is awesome',
    dateTime: '2016-12-13T12:05:00Z',
    count: 5
  },
  {
    id: '3',
    species: 'canvasback',
    description: '...',
    dateTime: '2016-11-30T23:59:00Z',
    count: 2
  },
  {
    id: '4',
    species: 'mallard',
    description: 'Getting tired',
    dateTime: '2016-11-29T00:00:00Z',
    count: 18
  },
  {
    id: '5',
    species: 'redhead',
    description: 'I think this one is called Alfred J.',
    dateTime: '2016-11-29T10:00:01Z',
    count: 1
  },
  {
    id: '6',
    species: 'redhead',
    description: 'If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.',
    dateTime: '2016-12-01T13:59:00Z',
    count: 1
  },
  {
    id: '7',
    species: 'mallard',
    description: 'Too many ducks to be counted',
    dateTime: '2016-12-12T12:12:12Z',
    count: 100
  },
  {
    id: '8',
    species: 'canvasback',
    description: 'KWAAK!!!1',
    dateTime: '2016-12-11T01:01:00Z',
    count: 5
  }
];

//Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).sendFile('index.html', { root: __dirname + '/views'});
});

app.get('/sightings', (req, res) => {
  if(sightings.length > 0) {
    res.status(200).json(sightings);
  } else {
    res.status(404).json({error: 'No sightings found!'});
  }
});

app.get('/sightings/:id', (req, res) => {
  var sightingId = req.params.id;
  var indexSight = sightings.findIndex(sight => sight.id === sightingId);
    
  if(indexSight > -1) {
    res.status(200).json(sightings[indexSight]);
  } else {
    res.status(404).json({error: 'No such sighting found!'});
  }
});

app.post('/sightings', (req, res) => {
  var newSight = req.body;
  var indexSpecies = species.findIndex(item => item.name === newSight.species);
  if(indexSpecies > -1) {
    newSight.id = (sightings.length + 1).toString();
    sightings.push(newSight);
    res.status(200).json(newSight);
  } else {
    res.status(404).json({error: 'The submitted species is not found from the list "species".'});
  }
});

app.post('/species', (req, res) => {
  var newSpecies = req.body;
  var indexSpecies = species.findIndex(item => item.name === newSpecies.name);
  if(indexSpecies === -1) {
    species.push(newSpecies);
    res.status(200).json(newSpecies);
  } else {
    res.status(409).json({error: 'The submitted species already exists!'});
  }
});

app.get('/species', (req, res) => {
  if(species.length > 0) {
    res.status(200).json(species);
  } else {
    res.status(404).json({error: 'No species found!'});
  }
});

const port = process.env.PORT ? process.env.PORT : 8081;
const server = app.listen(port, () => {
    console.log("Server listening  port %s", port);
});