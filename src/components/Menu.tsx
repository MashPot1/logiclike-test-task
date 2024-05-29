import React, { useState } from "react";

interface MenuProps {
  handleFilterCourses: (tag: string) => void;
}

const Menu: React.FC<MenuProps> = ({ handleFilterCourses }) => {
  const [menu] = useState([
    "Все темы",
    "Логика и мышление",
    "Загадки",
    "Головоломки",
    "Путешествия",
  ]);
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => {
    setActive(index);
    handleFilterCourses(menu[index]);
  };

  return (
    <div className="Menu">
      {menu.map((item, index) => (
        <button
          className={active === index ? "active" : ""}
          onClick={() => handleClick(index)}
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Menu;
