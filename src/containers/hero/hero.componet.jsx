import "./hero.style.css";

import { Card } from "../../component/card/card.component";
const hero = [
  {
    title: "Apple Event",
    desc: "Watch online on 07/05 at 3 pm.",
    img: require("../../img/apple.jpg"),
    width: "3008px",
    height: "624px",
  },
  {
    title: "iPhone 15 Pro",
    desc: "Titanium. So Strong. So light. So Pro.",
    img: require("../../img/iphonepro.jpg"),
    width: "3008px",
    height: "624px",
  },
  {
    title: "iPhone 15",
    desc: "New camera. New design. Newphoria",
    img: require("../../img/iphone15.jpg"),
    width: "3008px",
    height: "624px",
  },
];
export const Hero = () => {
  return (
    <div>
      {hero.map((data, index) => (
        <Card
          title={data.title}
          desc={data.desc}
          index={index}
          img={data.img}
          width={data.width}
          height={data.height}
        />
      ))}
    </div>
  );
};
