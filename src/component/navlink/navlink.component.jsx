import "./navlink.style.css";

export const Navlink = (props) => {
  return (
    <li className="Navlink__container--link">
      <a href="#a">{props.link}</a>
    </li>
  );
};
