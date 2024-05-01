import "./Unit.style.css";

import { Card } from "../../component/card/card.component";

const unit = [
  {
    title: "MacBook Air",
    desc: "Lean. Mean. M3 machine.",
    img: require("../../img/mac.jpg"),
    width: "1262px",
    height: "580px",
    class:'1st unit'
  },
  {
    title: "WATCH",
    desc: "Smarter. Brighter. Mightier",
    img: require("../../img/watch.jpg"),
    width: "1262px",
    height: "580px",
    class:'2nd unit'
  },
  {
    title: "iPad",
    desc: "Loveable. Drawable. Magical",
    img: require("../../img/ipad.jpg"),
    width: "1262px",
    height: "580px",
    class:'3rd unit'
  },
  {
    title: "AirPods Pro",
    desc: "Adaptive Audio. Now playing",
    img: require("../../img/airpod.jpg"),
    width: "1262px",
    height: "580px",
    class:'4th unit'
  },
  {
    title: "HomePod mini",
    desc: "",
    img: require("../../img/homepod.jpg"),
    width: "1262px",
    height: "580px",
    class:'5th unit'
  },
  {
    title: "Trade In",
    desc: "Get £130-£630 in credit when you trade in iPhone 11 or higher.",
    img: require("../../img/trade.jpg"),
    width: "1262px",
    height: "580px",
    class:'6th unit'
  }
];

export const Unit = () => {
  return (
    <div className="unit__content">
      {unit.map((data) => (
        <Card
          title={data.title}
          desc={data.desc}
          index={data.class}
          img={data.img}
          width={data.width}
          height={data.height}
        />
      ))}
    </div>
  );
};
