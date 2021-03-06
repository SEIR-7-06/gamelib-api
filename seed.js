const db = require('./models');

const gamesDataArray = [
  {
      "title": "Half-Life 2",
      "publisher": "Valve",
      "coverArtUrl": "https://cdn.mos.cms.futurecdn.net/yeLLJgaqz2UC6dDELTmf3S.jpg",
      "completed": true
  },
  {
      "title": "Baldur's Gate II",
      "publisher": "BioWare",
      "coverArtUrl": "https://cdn.mos.cms.futurecdn.net/fb13ed8d82cedcfd15ad153c1e980605.jpg",
      "completed": false
  },
  {
      "title": "The Elder Scrolls V: Skyrim",
      "publisher": "Bethesda Game Studios",
      "coverArtUrl": "https://i.redd.it/33885jucffux.png",
      "completed": true
  },
  {
      "title": "Halo: Combat Evolved",
      "publisher": "Bungie",
      "coverArtUrl": "https://www.pcgamesn.com/wp-content/uploads/2019/12/halo.jpg",
      "completed": true
  },
  {
      "title": "Star Wars: Knights of the Old Republic",
      "publisher": "BioWare",
      "coverArtUrl": "https://killapenguin.com/227/gallery/screenshots/full/kotorandroid/kotor-android-0002.jpg",
      "completed": true
  },
  {
      "title": "Call of Duty: Modern Warfare",
      "publisher": "Infinity Ward",
      "coverArtUrl": "https://www.abrokegamer.com/wp-content/uploads/2016/04/call-of-duty-ghosts-pc-screenshot-1920x1080-005.jpg",
      "completed": true
  },
  {
      "title": "Sekiro: Shadows Die Twice",
      "publisher": "From Software",
      "coverArtUrl": "https://www.xboxone-hq.com/images/games/screenshots/2034-sekiro-shadows-die-twice-screenshot-3-1529035649.jpg",
      "completed": false
  },
  {
      "title": "Dark Souls",
      "publisher": "From Software",
      "coverArtUrl": "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/117045858/original/94f2edc7280fc29635a1e2e6e1ffb6999d6a5d95/drop-in-game-items-on-dark-souls-remastered-on-xbox-one.png",
      "completed": true
  },
  {
      "title": "Diablo II",
      "publisher": "Blizzard, Inc.",
      "coverArtUrl": "https://wallpaperplay.com/walls/full/7/5/e/53947.jpg",
      "completed": false
  },
  {
      "title": "Starcraft",
      "publisher": "Blizzard, Inc.",
      "coverArtUrl": "https://i.imgur.com/4ZClFGx.jpg",
      "completed": false
  }
]

// Delete All Games
db.Game.deleteMany({}, (err, deletedGames) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  console.log('Games deleted successfully');

  // Create New Games
  db.Game.create(gamesDataArray, (err, allGames) => {
    if (err) {
      console.log(err);
      process.exit();
    }

    console.log(`Created ${allGames.length} games successfully`);
    process.exit();
  });
});
