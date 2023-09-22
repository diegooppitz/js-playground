const express = require('express'),
  app = express(),
  fs = require('fs'),
  getStat = require('util').promisify(fs.stat);

app.use(express.static('songs'));

const songs = [
  { name: "Scar Tissue", artist: "Red Hot Chilli Peppers", path: "./songs/scar-tissue-red-hot.mp3" },
  { name: "Rehab", artist: "Amy Winehouse", path: "./songs/rehab-amy-winehouse.mp3" },
  { name: "Smell Like The Spirit", artist: "Nirvana", path: "./songs/smells-like-teen-spirit-nirvana.mp3" },
  { name: "Holiday", artist: "Green Day", path: "./songs/holiday-green-day.mp3" },
  { name: "Mas Que Nada", artist: "Jorge Ben Jor", path: "./songs/mas-que-nada-jorge-ben-jor.mp3" },
]

module.exports = {
  async playSong(req, res, next) {
    const id = req?.params?.id;

    try {
      const filePath = songs[id]?.path;

      const stat = await getStat(filePath);

      res.writeHead(200, {
        'Content-Type': 'audio/mp3',
        'Content-Length': stat.size
      });

      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    } catch (error) {
      res.status(401).send(error)
    }

  },

  async songData(req, res) {
    const id = req?.params?.id;

    const song = songs[id];

    try {
      res.status(200).send(song)
    } catch (error) {
      res.status(401).send(error)
    }
  },

  async allSongs(req, res) {
    try {
      res.status(200).send(songs)
    } catch (error) {
      res.status(401).send(error)
    }
  },
}