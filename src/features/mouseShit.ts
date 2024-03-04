interface HTMLDivElementMutated extends HTMLElement {
  x?: number;
  y?: number;
}

export default (circles: Array<HTMLDivElementMutated>, coords: { x: number; y: number }) => {
  circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 5 + 'px';
      circle.style.top = y - 5 + 'px';

      circle.style.scale = ((circles.length - index) / circles.length).toString();

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      if (nextCircle.x && nextCircle.y) {
        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
      }
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
};
