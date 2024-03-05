import React, { useEffect, useRef, useState } from 'react';
import './Carsouel.css';

// const images = [
//     {
//         image_url: "https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwNzA2MDY0NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
//         caption: "Image 1"
//     },
//     {
//         image_url: "https://plus.unsplash.com/premium_photo-1709311417346-0497456aef0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTQzMDcyOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
//         caption: "Image 2"
//     },
//     {
//         image_url: "https://images.unsplash.com/photo-1707655096648-1655344fc4d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTQ0NzEyNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
//         caption: "Image 3"
//     },
//     {
//         image_url: "https://images.unsplash.com/photo-1708924674133-84198ccafde9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTQ0NzEzMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
//         caption: "Image 4"
//     },
//     {
//         image_url: "https://images.unsplash.com/photo-1708348244831-07e906ded4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwOTM5MTc1Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
//         caption: "Image 5"
//     },
// ]

const images = [
  {
    image_url:
      'https://img.freepik.com/free-photo/young-female-jacket-shorts-presenting-comparing-something-looking-confident-front-view_176474-37521.jpg?w=1800&t=st=1693037944~exp=1693038544~hmac=97e967909706f9b73b4b47d521acf54806f4b9b3efab6196bc8a69f07efff554',
    caption: 'Image 1',
  },
  {
    image_url:
      'https://img.freepik.com/free-photo/girl-grey-shirt-showing-something-her-hand_144627-51099.jpg?t=st=1693037931~exp=1693038531~hmac=63713e5a5cf2d23f53ca82b9996ad224ac6e92d0275a53b6debbe6523d7df020',
    caption: 'Image 2',
  },
  {
    image_url:
      'https://img.freepik.com/free-photo/young-lady-shirt-jacket-making-scales-gesture-looking-cheerful-front-view_176474-85195.jpg?t=st=1693037931~exp=1693038531~hmac=2f83b6689538e4056912c96f448163e9ef10998f48f671b7e50279f81611fbe6',
    caption: 'Image 3',
  },
  {
    image_url:
      'https://img.freepik.com/free-photo/girl-wide-opening-hands-giving-explanation-high-quality-photo_144627-60466.jpg?w=1800&t=st=1693038021~exp=1693038621~hmac=d4520cd86b2aea3e5dda765ede05bb53d70e18a574756d0f41a6806fe325d26d',
    caption: 'Image 4',
  },
];

function Carsouel() {
  let timerId;
  const timerIdRef = useRef(timerId);
  const [carsouelActiveImageIdx, setCarsouelActiveImageIdx] = useState(3);

  const onPrev = () => {
    if (carsouelActiveImageIdx > 0) setCarsouelActiveImageIdx((prev) => prev - 1);
  };

  const onNext = () => {
    if (carsouelActiveImageIdx < images.length - 1) setCarsouelActiveImageIdx((prev) => prev + 1);
  };


  useEffect(() => {
    timerIdRef.current = setInterval(() => {
        setCarsouelActiveImageIdx(carsouelActiveImageIdx % images.length);
    }, 1000
    )
  },[carsouelActiveImageIdx])


  return (
    <div className="carsouel">
      {images.map((image, idx) => (
        <Slide {...image} active={idx === carsouelActiveImageIdx} key={image.caption} />
      ))}
      <div className="dot-wrapper">
        {images.map((image, idx) => (
          <Dot {...image} active={idx === carsouelActiveImageIdx} idx key={image.caption} />
        ))}
      </div>

      <div className="next-prev-navigation">
        <div className="navigation prev" onClick={onPrev}>
          &lt;
        </div>
        <div className="navigation next" onClick={onNext}>
          &gt;
        </div>
      </div>
    </div>
  );
}

function Slide({ image_url, caption, active }) {
  return (
    <figure className={`slide ${active ? 'active' : ''}`}>
      <img className="slide-images" src={image_url} alt={caption} />
      <figcaption className="slide-caption">{caption}</figcaption>
    </figure>
  );
}

function Dot({ image_url, caption, active, idx }) {
  return (
    <figure className={`dot ${active ? 'dot-active' : ''}`} onClick={() => handleClick(idx)}>
      <img className="dot-images" src={image_url} alt={caption} />
    </figure>
  );
}

export default Carsouel;
