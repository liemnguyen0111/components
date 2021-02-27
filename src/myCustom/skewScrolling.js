const skewConfigs = {
  ease: 0.1,
  current: 0,
  previous: 0,
  rounded: 0,
};

const skewScrolling = (section, size) => {
  skewConfigs.current = window.scrollY;
  skewConfigs.previous +=
    (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
  skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

  // variables
  const difference = skewConfigs.current - skewConfigs.rounded;
  const acceleration = difference / size.width;
  const velocity = +acceleration;
  const skew = velocity * 15;

  //
  section.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;

  requestAnimationFrame(() => skewScrolling(section, size));
};

export default skewScrolling;
