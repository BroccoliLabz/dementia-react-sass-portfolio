import { useState } from 'react';
import useAnim from './hooks/useAnim';
import './App.scss';

const tracks = [
  {
    id: 0,
    title: 'OUTSIDE PT.2',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1165268557&color=%23d0d0d0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    yt: 'https://youtu.be/IRQVpDetztU',
  },
  {
    id: 1,
    title: 'FISSION',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1175858218&color=%23d0d0d0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    yt: 'https://youtu.be/9qIZfSh4tII',
  },
  {
    id: 2,
    title: '1000 WATTS',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1175275909&color=%23d0d0d0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    yt: 'https://youtu.be/J24bGrxbJsQ',
  },
  {
    id: 3,
    title: 'SOCK',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1146347032&color=%23d0d0d0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    yt: '',
    feat: ['Big Juice!', 'https://www.instagram.com/big_juice20/'],
  },
  {
    id: 4,
    title: 'BROKEN PIECES',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1090305961&color=%23d0d0d0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    yt: 'https://youtu.be/jXDfIP5DVkg',
    feat: ['Fury', 'https://fury.broccolirecords.com/'],
  },
  {
    id: 5,
    title: 'MARS',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1150740982&color=%23d0d0d0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    yt: 'https://youtu.be/SFi_rQ_BzxA',
  },
  {
    id: 6,
    title: 'ODYSSEY',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1164088957&color=%23d0d0d0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    yt: 'https://youtu.be/UVKD0SYVTOY',
  },
  {
    id: 7,
    title: 'COSTA RICA',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1204769479&color=%23d0d0d0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    yt: 'https://youtu.be/eJaOTMqhPZk',
  },
  {
    id: 8,
    title: 'LINGO',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1203511690&color=%23d0d0d0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    yt: 'https://youtu.be/ABdeZPKLasQ',
  },
];

function App() {
  const [track, setTrack] = useState(tracks[0]);
  useAnim('fade');
  useAnim('slide');

  return (
    <div className='App'>
      <div className='home'>
        <div className='dementia fade'>
          <img src='images/dementia.png' alt='' />
        </div>
        <div className='outside fade'>
          <img className='art' src='images/outsideMars.png' alt='' />
          <div className='yt'>
            <a
              href='https://www.youtube.com/watch?v=nE12QuQJa6I'
              target='_blank'
              rel='noreferrer'
            >
              <img src='images/yt.png' alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='tracks'>
        <div className='list fade'>
          <ul>
            {tracks.map((item) => (
              <li
                key={item.id}
                className={track.title === item.title ? 'selected' : ''}
                onClick={() =>
                  setTrack({
                    title: item.title,
                    src: item.src,
                  })
                }
              >
                <div className='item slide' style={{ animationDelay: '50ms' }}>
                  {item.title}
                  {item.feat && (
                    <span>
                      (Feat.
                      <a href={item.feat[1]}>{item.feat[0]}</a>)
                    </span>
                  )}
                  {item.yt !== '' && (
                    <a href={item.yt} target='_blank' rel='noreferrer'>
                      <div className='imgContainer'>
                        <img src='images/yt.png' alt='' />
                      </div>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='player fade'>
          <iframe
            title='player'
            width='100%'
            height='300'
            scrolling='no'
            frameBorder='none'
            allow='autoplay'
            src={track.src}
          ></iframe>
        </div>
      </div>
      <div className='links fade'>
        <a href='http://dblz.art/' target='_blank' rel='noreferrer'>
          dblz.art
        </a>
        <a
          href='http://www.broccolirecords.com'
          target='_blank'
          rel='noreferrer'
        >
          BroccoliRecords
        </a>
      </div>
    </div>
  );
}

export default App;
