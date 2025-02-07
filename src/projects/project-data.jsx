import projectOne from '../assets/surfing.png';
import projectTwo from '../assets/mario.png';
import projectThree from '../assets/ghost.png'; 

const projects = {
  1: {
    title: 'Surfing',
    image: projectOne,
    description: (
      <>
        <p>
          I picked up surfing during my first year here in Australia and have been hooked ever since. I love sitting in the lineup, 
          taking in the beautiful view, as well as pushing my limits—going for bigger waves, 
          even if it means getting pounded sometimes. But hey, that is all part of the thrill!
        </p>
      </>
    ),
    github: 'https://github.com',
    demo: 'https://netlify.com',
  },
  2: {
    title: 'Mario Odyssey',
    image: projectTwo,
    description: (
      <>
        <p>
          I am a big fan of Nintendo games, especially Super Mario Odyssey, because they are casual, fun, 
          and a great way to unwind. When study get stressful, a little Mario adventure is all I need!
        </p>
      </>
    ),
    github: 'https://github.com',
    demo: 'https://netlify.com',
  },
  3: {
    title: 'Demon Slayer',
    image: projectThree,
    description: (
      <>
        <p>
          I enjoy watching anime! Some of my favorites include Hunter x Hunter, Attack on Titan, and Haikyuu!!. 
          Lately, I have been really into Demon Slayer.
        </p>
      </>
    ),
    github: 'https://github.com',
    demo: 'https://netlify.com',
  }
}

export default projects