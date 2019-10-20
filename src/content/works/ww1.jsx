import React from 'react';

export default {
  name: "Warplanes: WW1 Sky Aces",
  description: (
    <React.Fragment>
      <p>Be a pioneer of aerial warfare in Warplanes: WW1 Sky Aces. Fight above the battlefields of World War I and become the ultimate Sky Ace! </p>
      <p>Platform: Mobile</p>
      <p>Developer: HomeNetGames &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Publisher: HomeNetGames</p>
      <img
        src={'/' + process.env.PUBLIC_URL + 'images/ww1_01.jpg'}
        style={{ maxWidth: '100%', marginTop: 30 }} /><br/>
      <img
        src={'/' + process.env.PUBLIC_URL + 'images/ww1_02.png'}
        style={{ maxWidth: '100%', marginTop: 30 }} />
    </React.Fragment>
  ),
  category: "Music composition.",
  music: [
    {
      name: "Menu theme",
      url: "01_ww1_menu_theme.mp3"
    },
    {
      name: "Gameplay 01",
      url: "02_ww1_gameplay01.mp3"
    },
    {
      name: "Gameplay 02",
      url: "03_ww1_gameplay02.mp3"
    },
    {
      name: "Gameplay 03",
      url: "04_ww1_gameplay03.mp3"
    },
    {
      name: "Story background",
      url: "05_ww1_lector_bg.mp3"
    }
  ]
};
