import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import colors from '@/colors';
import './contactDec.css';

const CirclesSvg = styled.svg`
  position: absolute;
  top: 40%;
  left: 80%;
  transform: translate(-50%, -50%);
  min-width: 60rem;
  width: 100%;
  z-index: -1;
`;

const Decoration: FC<propTypes> = (submitted) => {
  return (
    <CirclesSvg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362.2 362.2">
      <defs>
        <linearGradient
          id="Безымянный_градиент_15"
          x1="-2448.73"
          y1="2773.55"
          x2="-2172.4"
          y2="3025.77"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.02" stopColor="#4258a4" />
          <stop offset="0.12" stopColor="#5c58a3" />
          <stop offset="0.32" stopColor="#9d59a0" />
          <stop offset="0.36" stopColor="#a9599f" />
          <stop offset="0.75" stopColor="#fdcc72" />
        </linearGradient>
      </defs>
      <circle style={{ fill: colors.primary3 }} cx="168.22" cy="129.63" r="129.63" />
      <ellipse style={{ fill: colors.background }} cx="172.84" cy="129.8" rx="125.01" ry="129.47" />
      <path
        className="Contact_cls-3"
        d="M.33,156.57q-1.41-10.86,3.19-17.25t14.34-7.64q10-1.31,16.12,3.59t7.51,15.93a35.86,35.86,0,0,1,.3,6.7,35,35,0,0,1-.83,5.78L30.79,165a28,28,0,0,0,.88-11.71q-.72-5.64-3.65-8t-8.63-1.66q-5.58.72-7.66,3.92t-1.37,8.66a30.69,30.69,0,0,0,1.3,5.72,29.85,29.85,0,0,0,2.46,5.39L3.89,168.59a37.51,37.51,0,0,1-2.18-5.43A38.61,38.61,0,0,1,.33,156.57Z"
      />
      <path
        className="Contact_cls-3"
        d="M11,194.35q-3.82-9.25-1.32-16t12.55-10.89q6.94-2.86,12.09-2.41A14.33,14.33,0,0,1,43.2,169a27,27,0,0,1,6.22,9.58,27.07,27.07,0,0,1,2.34,11.17,14.44,14.44,0,0,1-3.53,9q-3.34,3.95-10.28,6.8-10.07,4.16-16.59,1.09T11,194.35Zm9.24-3.81q1.72,4.16,4.83,5.07t8.26-1.21q5.49-2.25,7-5.08c1-1.88.94-4.2-.2-7s-2.74-4.47-4.77-5.1-4.89-.18-8.55,1.33c-3.43,1.41-5.67,3.07-6.71,5S19.14,187.76,20.28,190.54Z"
      />
      <path
        className="Contact_cls-3"
        d="M24.21,220.61,55.7,195.52l6.24,7.83-7.21,25.16L71.4,215.23l7.33,9.19L47.24,249.51,41,241.64l7.19-25.08L31.54,229.81Z"
      />
      <path className="Contact_cls-3" d="M61.1,260.89l19.08-25.07-9-6.86,5.3-7,27.36,20.82-5.3,7-9-6.86L70.45,268Z" />
      <path
        className="Contact_cls-3"
        d="M78.77,275.05l30.67-30.32,11.33,5.13-2.52,43-11.17-5,.46-9.19-11.05-5-6.55,6.44Zm22.62-8.44,8.2,3.71.77-12.62Z"
      />
      <path
        className="Contact_cls-3"
        d="M143.59,297.88q-10.78-1.9-15.52-8.19t-3-16q1.74-10,8.23-14.32T150.7,257a35.53,35.53,0,0,1,6.5,1.71,35,35,0,0,1,5.27,2.51l-1.78,10.1A28.12,28.12,0,0,0,149.77,267q-5.6-1-8.76,1.1c-2.1,1.38-3.49,4-4.15,7.74s-.16,6.52,1.46,8.48,4.25,3.25,7.86,3.88a29.83,29.83,0,0,0,5.85.46,29.3,29.3,0,0,0,5.88-.74l-1.79,10.16a36.69,36.69,0,0,1-5.82.46A38.19,38.19,0,0,1,143.59,297.88Z"
      />
      <path className="Contact_cls-3" d="M172.08,299l-1.78-31.46-11.3.64-.5-8.73,34.34-1.95.49,8.74-11.3.64,1.78,31.46Z" />
    </CirclesSvg>
  );
};

interface propTypes extends HTMLAttributes<HTMLDivElement> {
  submitted: boolean;
}

export default Decoration;
