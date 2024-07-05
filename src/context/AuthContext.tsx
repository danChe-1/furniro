import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface ITokenContext {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}
export const AuthContext = createContext<ITokenContext>({
  token: "",
  setToken: () => {},
});

const AuthContextProvider = (props: PropsWithChildren) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token") || "");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
