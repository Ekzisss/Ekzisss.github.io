import { BackButton } from '@/styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { change } from '@/redux/sectionState';
import { motion } from 'framer-motion';
import { Sections } from '@/config/enums';
import { Main, Left, Right } from './styledComp';
import { moveHandler, enterHandler, leaveHandler } from './hoverCard';
import SvgCircle from './SvgCircle';

let rect: DOMRect;

export default function Persona() {
  const dispatch = useAppDispatch();
  const sectionState = useAppSelector((state) => state.sectionState.value);

  return (
    <Main
      as={motion.div}
      initial={{ clipPath: 'circle(0% at 30% 40%)' }}
      transition={{ duration: 0.5, delay: 0.2, x: { duration: 1 } }}
      animate={{ clipPath: 'circle(100% at 30% 40%)' }}
      exit={{ x: 1 }}
      style={{ zIndex: sectionState === Sections.main ? '0' : '100' }}
    >
      <Left>
        <h1>Almaz Abdulhakov</h1>
        <p>
          21 летний студент из России ✌️. <br />
          Создаю интерфейс с помощью React и имею опыт по созданию бэкэнда с помощью NodeJs 🔥. <br />
          Люблю смотреть аниме 💀 и играть в видеоигры 🎮. <br /> Программирую около 6 лет 💻.
        </p>
        <section>
          <h2>Stack</h2>
          <ol>
            <li>
              <h3>Frontend (Main)</h3>
              <ul
                onMouseMove={(e) => moveHandler(e, rect)}
                onMouseEnter={(e) => (rect = enterHandler(e))}
                onMouseLeave={leaveHandler}
              >
                <li>React</li> <li>Next</li> <li>Redux</li> <li>Axios</li>
              </ul>
            </li>

            <li>
              <h3>Frontend (Visual)</h3>
              <ul
                onMouseMove={(e) => moveHandler(e, rect)}
                onMouseEnter={(e) => (rect = enterHandler(e))}
                onMouseLeave={leaveHandler}
              >
                <li>Farmer-motion</li> <li>Recharts</li> <li>Styled-components</li>
              </ul>
            </li>

            <li>
              <h3>Backend</h3>
              <ul
                onMouseMove={(e) => moveHandler(e, rect)}
                onMouseEnter={(e) => (rect = enterHandler(e))}
                onMouseLeave={leaveHandler}
              >
                <li>Node.js</li> <li>bcrypt</li> <li>jsonwebtoken</li> <li>multer</li>
              </ul>
            </li>

            <li>
              <h3>DataBase</h3>
              <ul
                onMouseMove={(e) => moveHandler(e, rect)}
                onMouseEnter={(e) => (rect = enterHandler(e))}
                onMouseLeave={leaveHandler}
              >
                <li>MySql</li> <li>Mongodb</li> <li>FireStore</li> <li>Prisma</li>
              </ul>
            </li>
          </ol>
        </section>
      </Left>
      <BackButton onClick={() => dispatch(change(0))}></BackButton>
      <SvgCircle></SvgCircle>
    </Main>
  );
}
