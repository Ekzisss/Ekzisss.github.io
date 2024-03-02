export default (circles: Array<HTMLDivElement>, coords: any) => {
  circles = Array.from(document.querySelectorAll('#circle'));

  circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + 'px';
      circle.style.top = y - 12 + 'px';

      circle.style.scale = ((circles.length - index) / circles.length).toString();

      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.6;
      y += (nextCircle.y - y) * 0.6;
    });

    requestAnimationFrame(animateCircles);
  }

  animateCircles();
};
