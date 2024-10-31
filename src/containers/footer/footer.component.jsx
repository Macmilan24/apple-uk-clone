import React, { useState } from "react";
import "./footer.style.css";

const footerData = [
  {
    title: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "Vision",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    title: "Account",
    links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
  },
  {
    title: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Financing",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    title: "For Business",
    links: ["Apple and Business", "Shop for Business"],
  },
  {
    title: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Privacy",
      "Supplier Responsibility",
    ],
  },
  // Add more sections if needed
];

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer>
      <div className="footer-content">
        {footerData.map((section, index) => (
          <div key={index} className="footer-section">
            <h4 onClick={() => toggleDropdown(index)}>{section.title}</h4>
            <ul
              className={
                activeIndex === index ? "footer-links show" : "footer-links"
              }
            >
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#a">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
