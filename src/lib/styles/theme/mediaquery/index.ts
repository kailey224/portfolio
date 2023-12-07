const mediaSize = {
  pc: 1440,
  lap: 1280,
  tablet: 1024,
  tabletS: 768,
  mobile: 576,
  mobileS: 480,
};

const customMediaQuery = (maxWidth: number) => {
  return `@media screen and (max-width: ${maxWidth}px)`;
};

export const media = {
  pc: customMediaQuery(mediaSize.pc),
  lap: customMediaQuery(mediaSize.lap),
  tablet: customMediaQuery(mediaSize.tablet),
  tabletS: customMediaQuery(mediaSize.tabletS),
  mobile: customMediaQuery(mediaSize.mobile),
  mobileS: customMediaQuery(mediaSize.mobileS),
};

export default media;
