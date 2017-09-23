import React from 'react';
import ReactDOM from 'react-dom';

import { GameCollection } from './game-collection.jsx';

import './index.scss';

class Example extends React.Component {
  render() {
    const games = [
      {
        title: "The Legend of Zelda: Breath of the Wild",
        platform: "Nintendo Switch",
        releaseYear: "2017",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/0/0e/BreathoftheWildFinalCover.jpg",
      },
      {
        title: "Super Mario Odyssey",
        platform: "Nintendo Switch",
        releaseYear: "2017",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/9/97/Super_Mario_Odyssey_-_Box_NA.jpg",
      },
      {
        title: "The Last of Us",
        platform: "Playstation 3",
        releaseYear: "2013",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg",
      },
      {
        title: "Horizon Zero Dawn",
        platform: "Playstation 4",
        releaseYear: "2017",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/9/93/Horizon_Zero_Dawn.jpg",
      },
      {
        title: "Titanfall 2",
        platform: "Playstation 4",
        releaseYear: "2016",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/Titanfall_2_box_art.jpeg",
      },
      {
        title: "Yakuza 0",
        platform: "Playstation 4",
        releaseYear: "2017",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/b/ba/Yakuza0.jpg",
      },
      {
        title: "The Witcher 3",
        platform: "Playstation 4",
        releaseYear: "2015",
        coverUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
      },
      {
        title: "Guacamelee!",
        platform: "Playstation 4",
        releaseYear: "2013",
        coverUrl: "https://upload.wikimedia.org/wikipedia/commons/5/54/Guacamelee%21_STCE_box_art.jpg",
      },
    ];

    return (
      <div className="page">
        <h1 className="page-title">Check out my game collections!</h1>
        <section className="main-collection">
          <h2>Main Collection</h2>
          <GameCollection 
            games={games.slice(0, 4)}
          />
        </section>
        <section className="side-collection">
          <h2>Side Collection</h2>
          <GameCollection
            games={games.slice(4)}
          />
        </section>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.querySelector('#app-root'));