import "./card.style.css";

export const Card = (props) => {
  return (
    <div className={`card card-${props.index}`}>
      <div
        className="bg"
        style={{
          position: "absolute",
          width: `${props.width}`,
          height: `${props.height}`,
          objectFit: "cover",
          backgroundImage: `url(${props.img})`,
          zIndex: "-1",
          backgroundSize: `${props.width} ${props.height}`,
        }}
      ></div>
      <div className="card__content">
        <h2 className="card__content--headline">{props.title}</h2>
        <p className="card__content--subhead">{props.desc}</p>
        <div className="card__content--link">
          <a href="#a" className="card__content--link__learn">
            Learn more
          </a>
          <a href="#a" className="card__content--link__buy">
            Buy
          </a>
        </div>
      </div>
    </div>
  );
};
