import React from 'react';
import Story from './Story/Story';
import './StoryReel.css';

const img =
  'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://static01.nyt.com/images/2022/12/27/multimedia/00sci-mission-control-launch-1-7d58/00sci-mission-control-launch-1-7d58-mobileMasterAt3x.jpg"
        profileSrc="https://media.wired.com/photos/624f58f64d62eb1d9cf1c357/master/w_2560%2Cc_limit/Elon-Musk-Twitter-Plaintext-Business-1239416791.jpg"
        title="Elon Musk"
      />
      <Story
        image="https://hollywoodlife.com/wp-content/uploads/2021/08/Ryan-Reynolds-Jacked-Promoting-Free-Guy-ftr.jpg"
        profileSrc="https://m.media-amazon.com/images/M/MV5BODFmN2VmZmEtYTRjZi00ZjY1LTgxYjQtODMyNDI3ZDk4ZTJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        title="Ryan Reynolds"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/6/6c/George_Hotz_at_TechCrunch_Disrupt.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/772342671721455616/FE79-7Ev_400x400.jpg"
        title="George Hotz"
      />
      <Story
        image="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/04/15/Pictures/jeremy-renner-robert-downey-jr-brie-larson_59bac8c2-5f61-11e9-b92f-deef78e36bd1.jpg"
        profileSrc="https://www.onthisday.com/images/people/robert-downey-jr-medium.jpg"
        title="Robert Downey Jr."
      />
      <Story
        image="http://www.rocketstem.org/wp-content/uploads/2014/07/S69-63724.jpg"
        profileSrc="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQM51Uccg6FGIC842Ca4q5kQewzrWCF2yW1tS5FCP77r4chz6Q30FBx2SB6ZH6EpBpyh1s0ZoDHIf3GZGw"
        title="Buzz Aldrin"
      />
    </div>
  );
}

export default StoryReel;
