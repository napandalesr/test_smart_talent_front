import { useState, type ReactElement, type ReactNode, useEffect } from "react";
import Login from "../Pages/Login";
import { IsLogin } from "../utils/helpers";

interface Props {
  children: ReactNode | ReactNode
}

const GuardComponent = ({ children }: Props): ReactElement => {
  const [login, setLogin] = useState<boolean>(false);
  const verifyLogin = async () => {
    setLogin(await IsLogin());
  };
  useEffect(() => {
    verifyLogin();
  }, []);
  return (
    <>
    {
      login
        ? <>{ children }</>
        : <Login/>
    }
    </>
  );
};

export default GuardComponent;
