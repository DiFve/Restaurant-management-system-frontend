import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  useEffect(() => {
    console.log(token);
    const data: Object = jwtDecode(token || "");

    localStorage.setItem("token", token || "");

    navigate(`/menu/${Object.values(data)[3]}`);
  }, []);
  return <div></div>;
};

export default AuthPage;
