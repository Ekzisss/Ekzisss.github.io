// import React from 'react';
import { BackButton } from '@/styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { change } from '@/redux/sectionState';
import styled from 'styled-components';
import colors from '@/colors';
import { Sections } from '@/config/enums';
import Decoration from './decoration';
import { firestore } from '@/config/firebase';
import { Timestamp, collection, addDoc } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Main = styled.div`
  position: absolute;
  background-color: ${colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  ${window.innerWidth >= 1024 ? '' : `flex-direction: column; gap: 3rem;`}
  z-index: 100;
  justify-content: center;
  align-items: center;

  & h1 {
    padding-left: 10%;
    padding-bottom: 20%;
    ${colors.gradientText}
    font-size: 4rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 20%;
  font-family: 'Kanit';
  ${window.innerWidth >= 1024 ? 'font-size: 1vw;padding-left: 10%;' : `font-size: 1rem;`}

  & input {
    background-color: ${colors.primary2};
    width: ${window.innerWidth >= 1024 ? '20vw;' : `18rem`};
    padding: 0.3rem;
    border: none;
    font-family: 'Kanit';
    border-radius: 0.4rem;
    font-size: inherit;
  }

  & textarea {
    height: ${window.innerWidth >= 1024 ? '8vw;' : `10rem`};
    background-color: ${colors.primary2};
    padding: 0.3rem;
    resize: vertical;
    border: none;
    min-height: 3rem;
    max-height: 20rem;
    border-radius: 0.4rem;
    font-size: inherit;
  }

  & button {
    font-family: 'Kanit';
    background-color: ${colors.primary2};
    border: none;
    cursor: pointer;
    padding: 0.3rem;
    transition: 0.2s linear all;
    font-size: ${window.innerWidth >= 1024 ? '2vw;' : `1.8rem`};
    border-radius: 0.4rem;

    &:hover {
      background: ${colors.onlyGradient};
      letter-spacing: 0.5rem;
    }
  }
`;

const Left = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  & svg {
    fill: ${colors.color};
    width: ${window.innerWidth >= 1024 ? '2vw;' : `1.5rem;`};
  }

  a:hover {
    path {
      fill: url('#my-cool-gradient');
    }
    p {
      ${colors.gradientText}
    }
  }

  & a {
    display: flex;
    gap: 1rem;
    text-decoration: none;
  }

  & p {
    transition: all 0.2s linear;
    ${window.innerWidth >= 1024 ? 'font-size: 2vw;width: 20vw;' : `font-size: 1.5rem;width: 16rem;`}
    ${colors.darkGradientText}
  }
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Contact({
  submitted,
  setSubmitted,
}: {
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();
  const sectionState = useAppSelector((state) => state.sectionState.value);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      text: { value: string };
    };
    if (!target.name.value || !target.text.value) return;

    try {
      await addDoc(collection(firestore, 'message'), {
        Date: Timestamp.fromDate(new Date()),
        Message: target.text.value,
        Name: target.name.value,
      });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Main
      as={motion.div}
      initial={{ clipPath: 'circle(0% at 30% 40%)' }}
      transition={{ duration: 0.5, delay: 0.2, x: { duration: 1 } }}
      animate={{ clipPath: 'circle(100% at 30% 40%)' }}
      exit={{ x: 1 }}
      style={{ zIndex: sectionState === Sections.contact ? '100' : '0' }}
    >
      <Left>
        <a href="https://t.me/Ekzissss">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
          </svg>
          <p>Telegram</p>
        </a>
        <a href="https://github.com/Ekzisss">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
          <p>Github</p>
        </a>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
          <p>almazzz-2@yandex.ru</p>
        </a>
      </Left>
      <Right>
        {submitted && (
          <motion.h1
            transition={{ duration: 1, delay: 1 }}
            initial={{ opacity: 0, y: -100, position: 'absolute' }}
            animate={{ opacity: 1, y: 0, position: 'relative' }}
          >
            Message sent
          </motion.h1>
        )}
        <AnimatePresence>
          {!submitted && (
            <Form
              transition={{ duration: 1 }}
              as={motion.form}
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              onSubmit={submitHandler}
              action="POST"
            >
              <input type="name" name="name" placeholder="Name" />
              <textarea name="text" placeholder="Message" />
              <button type="submit">SEND</button>
            </Form>
          )}
        </AnimatePresence>
      </Right>
      <BackButton onClick={() => dispatch(change(0))}></BackButton>
      <Decoration></Decoration>
    </Main>
  );
}
