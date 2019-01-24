import React from 'react';

export default {
  name: "Spyhack Game",
  description: (
    <React.Fragment>
      <p>SPYHACK: Episode 1 - Action and strategy PC game in future.<br/><br/>
        {`"It's year 2111. The world is ruled by technocorporations.
           Their experiments have long exceeded all norms of ethics.
           The best agents of the Advanced Technology Division stand on
           the guard of technological rule of law. Become one of them and
           protect humanity from self-destruction." (press materials)`}<br/><br/>
         <span>Developer: Pyramid Games, Art Games &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Publisher: Ultimate Games S.A.</span>
       </p>
       <img
         src={'/' + process.env.PUBLIC_URL + 'images/spyhack_screeny.png'}
         style={{ maxWidth: '100%', marginTop: 30 }} />
    </React.Fragment>
  ),
  category: "Trailer music, level background music, main menu music, SFX.",
  music: [
    {
      name: "GAMEPLAY TRAILER",
      url: "spyhack_trailer_03.mp3"
    },
    {
      name: "MAIN MENU",
      url: "spyhack_main_menu.mp3"
    },
    {
      name: "LEVEL BACKGROUND 01",
      url: "spyhack_level_bg01.mp3"
    },
    {
      name: "LEVEL BACKGROUND 02",
      url: "spyhack_level_bg02.mp3"
    },
    {
      name: "LEVEL BACKGROUND 03",
      url: "spyhack_level_bg03.mp3"
    },
    {
      name: "LEVEL BACKGROUND 04",
      url: "spyhack_level_bg04.mp3"
    },
  ],
  video: [
    {
      url: "uDJwCIHoXgE"
    }
  ]
};
