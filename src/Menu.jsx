import Menuitem from "./Menuitem";

const Menu = ({ item }) => {
  return (
    <div className="section-center">
      {item.map((prop) => {
        return <Menuitem key={prop.id} {...prop} />;
      })}
    </div>
  );
};

export default Menu;
