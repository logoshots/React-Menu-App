import Menu from "../Menu";

const MenuApp = ({ data }) => {
  return (
    <>
      {data.map((menu) => (
        <Menu
          key={menu.menuName}
          menuName={menu.menuName}
          menuItems={menu.menuItems}
        />
      ))}
    </>
  );
};

export default MenuApp;