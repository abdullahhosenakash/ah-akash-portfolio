import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='px-24 text-white'>
      <h2 className='text-[7rem] text-center text-secondary mt-4'>
        Hey there.
      </h2>
      <h3 className='text-[5rem] text-center'>Wanna know about me?</h3>
      <div className='flex flex-col gap-5 w-3/4 mx-auto text-2xl'>
        <p className='text-justify'>
          I am <span className='text-secondary'>Abdullah Hosen Akash</span>, a
          MERN stack web developer based in Jashore, Bangladesh.
        </p>
        <p className='text-justify'>
          I've been building stuff on the web since 2022 and done many projects
          based on frontend, backend and MERN Stack technologies.
        </p>
        <p className='text-justify'>
          My focus is on creating engaging, accessible & performant interfaces
          for my clients.
        </p>
      </div>

      <div className='w-3/4 mx-auto text-justify mb-10'>
        <div>
          <h3 className='text-3xl mt-12 text-secondary underline'>
            Academic Carrier
          </h3>
          <p className='text-xl'>
            In the case of academic role, I am a student of department of{' '}
            <span className='italic text-secondary'>
              Electronics and Communication Engineering
            </span>{' '}
            at{' '}
            <span className='italic text-secondary'>
              Hajee Mohammad Danesh Science and Technology University, Dinajpur,
              Bangladesh
            </span>
            . As a final year student, my academic carrier in this university is
            near at end.
          </p>
        </div>
        <div>
          <h3 className='text-3xl mt-12 text-secondary underline'>
            Professional Role
          </h3>
          <p className='text-xl'>
            As a fresh web developer, I am currently working for self
            development for the new era. Besides in offline, I usually teach
            some students as a private tutor. I love to teach others what I know
            in any specific topic.
          </p>
        </div>
        <div>
          <h3 className='text-3xl mt-12 text-secondary underline'>Pastimes</h3>
          <p className='text-xl'>
            It is very hard for human beings to write code all the times. I am
            not any other beings (LOL). I like to spend time with my family and
            make fun with my family members. Furthermore, I love having fun with
            my friends.
          </p>
        </div>

        <div>
          <h3 className='text-3xl mt-12 text-secondary underline'>
            Virtual Life
          </h3>
          <p className='text-xl'>
            You can find me in the era of internet by following the below links.
            <div className='flex justify-center gap-8'>
              <Link
                to='https://www.facebook.com/abdullahhosen.akash'
                target='_blank'
                className='text-accent hover:underline'
              >
                Facebook
              </Link>
              <div className='divider divider-horizontal' />
              <Link
                to='https://twitter.com/MdAbdullahHosen'
                target='_blank'
                className='text-accent hover:underline'
              >
                Twitter
              </Link>
              <div className='divider divider-horizontal' />
              <Link
                to='https://www.linkedin.com/in/md-abdullah-hosen-339916229'
                target='_blank'
                className='text-accent hover:underline'
              >
                LinkedIn
              </Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
