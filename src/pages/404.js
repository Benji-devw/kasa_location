import "../styles/404.scss";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found">
        <h1>404</h1>
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </Layout>
  );
};

export default NotFound;
