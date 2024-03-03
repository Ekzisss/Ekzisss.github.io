import { MouseEvent } from 'react';

export function moveHandler(e: MouseEvent<HTMLUListElement>, rect: DOMRect) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const moveX = mouseX - centerX;
  const moveY = mouseY - centerY;

  const distance = Math.sqrt(moveX ** 2 + moveY ** 2);

  const node = e.target as HTMLElement;

  node.style.transform = `
    scale3d(1.2, 1.2, 1.2)
    rotate3d(
      ${-moveY / 100},
      ${moveX / 100},
      0,
      ${Math.log(distance) * 3}deg
    )
  `;
}

export function enterHandler(e: MouseEvent<HTMLUListElement>) {
  const node = e.target as HTMLElement;
  return node.getBoundingClientRect();
}

export function leaveHandler(e: MouseEvent<HTMLUListElement>) {
  const node = e.target as HTMLElement;
  node.style.transform = ``;
}
