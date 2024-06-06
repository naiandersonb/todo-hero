import TodoHeroLogo from "../assets/images/logo.svg";
export function Logo() {
  const logo = document.createElement("img");
  logo.src = TodoHeroLogo;
  logo.style.width = "100px";
  return logo
}

export const logo = Logo()
