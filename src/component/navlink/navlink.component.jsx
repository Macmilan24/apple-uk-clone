import "./navlink.style.css";

export const Navlink = (props) => {
  return (
    <li className="Navlink__container--link">
      <a href="#">{props.link}</a>
    </li>
  );
};
