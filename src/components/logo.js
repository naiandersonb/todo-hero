import TdoHeroLogo from '../assets/images/logo.svg';
export function Logo() {
  const logoImg = document.createElement('img');
  logoImg.src = TdoHeroLogo
  logoImg.style.width = '100px';

  return logoImg;
}