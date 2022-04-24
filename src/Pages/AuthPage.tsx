import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  useEffect(() => {
    const data: Object = jwtDecode(token || "");
    localStorage.setItem("token", token || "");
  }, []);
  return <div></div>;
};

export default AuthPage;
