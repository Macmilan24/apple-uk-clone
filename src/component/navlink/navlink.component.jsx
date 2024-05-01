import "./navlink.style.css";


export const Navlink = (props) => {
  return (
    <div className="Navlink">
      <ul className="Navlink__container">
        <li className="Navlink__container--link">{props.link}</li>
      </ul>
    </div>
  );
};
