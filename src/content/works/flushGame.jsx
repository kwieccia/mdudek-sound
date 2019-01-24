import React from 'react';

export default {
  name: "Flush Game",
  description: (
    <React.Fragment>
      <p>Flush is an arcade game with beautiful, old-school graphics that will
        test your agility and perceptiveness. Seal the cracks appearing on your
        screen, collect points, trigger combos and put your score on the
        leaderboards. Strive to be the best among your friends. That's the
        only way you can prevent the flooding.
      </p>
      <img
        src={'/' + process.env.PUBLIC_URL + 'images/flush_screeny.png'}
        style={{ maxWidth: '100%', marginTop: 30 }} />
    </React.Fragment>
  ),
  category: "Main theme music, level background music.",
  music: [
    {
      name: "Main theme music",
      url: "flush_main_title.mp3"
    },
    {
      name: "level background music",
      url: "flush_gameplay.mp3"
    }
  ]
};
