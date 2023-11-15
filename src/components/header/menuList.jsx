import { Link } from "react-router-dom";

const MenuLink = ({props}) => {
  return (
    <ul>
      {props.map((path, index) => (
        <li key={index}><Link to={path.url}>{path.link}</Link></li>
      ))}
    </ul>
  );
}

export default MenuLink;
