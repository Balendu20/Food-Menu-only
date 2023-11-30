import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import item from "./data";
import Catogory from "./Catogory";

const App = () => {
  const newCatogory = ["all", ...new Set(item.map((items) => items.category))];

  const [menuitem, setmenuitem] = useState(item);
  const [catogorie, setcatogorie] = useState(newCatogory);

  const filterItem = (categored) => {
    if (categored === "all") {
      setmenuitem(item);
      return;
    }
    console.log(categored);
    const filterone = item.filter(
      (catogorys) => catogorys.category === categored
    );
    setmenuitem(filterone);
  };

  return (
    <section className="menu">
      <Title title="our menu" />
      <Catogory catogory={catogorie} filterItem={filterItem} />
      <Menu item={menuitem} />
    </section>
  );
};
export default App;
