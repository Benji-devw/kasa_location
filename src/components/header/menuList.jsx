import { NavLink } from "react-router-dom";

const MenuLink = ({ props }) => {
  return (
    <ul>
      {props.map((path, index) => (
        <NavLink
          key={index}
          to={path.url}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {path.link}
        </NavLink>
      ))}
    </ul>
  );
};

export default MenuLink;
