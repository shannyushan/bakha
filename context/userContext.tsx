import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import Cookies from "jscookie";

type Props = {
  children: ReactNode;
};

type AuthContextType = {
  user: Object;
  islogged: Boolean;
  loading: Boolean;
  login: (username: string, password: string) => Promise<Object>;
  logout: () => Promise<Object>;
};

//Defining the structre and initial value of the Auth Context/User context
const AuthContextStructure: AuthContextType = {
  user: null,
  islogged: false,
  loading: false,
  login: async (username: string, password: string): Promise<Object> => {
    return {};
  },
  logout: async (): Promise<Object> => {
    return {};
  },
};

//using context structre to create Context using CreateContext
const AuthContext = createContext<AuthContextType>(AuthContextStructure);

//
export default function useAuth() {
  return useContext(AuthContext);
}

///Context provider to use in the root
export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<Object>(null);
  const [islogged, setIslogged] = useState<boolean>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    function loadUserFromCookies() {
      const authToken = Cookies.get("token");
      if (authToken) {
        // const uri = process.env.BASE_URL;
        // console.log(uri);
        fetch(`/api/user/auth`, {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          }),
        }).then((resp) => {
          setUser(resp.json());
        });
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (username, password): Promise<Object> => {
    fetch(`/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success) {
          Cookies.set("token", data.user._id, { expires: 60 });
          setUser(data.user);
          return { err: false, res: data.user._id };
        } else {
          setUser(null);
          return { err: false, res: null };
        }
      })
      .catch((error) => {
        console.log(` Error occured : ${error}`);
        setUser(null);
        return { err: true, res: error };
      });
    return { err: true, res: "Error Unknown" };
  };

  const logout = async (): Promise<Object> => {
    return {};
  };

  const value = {
    user,
    islogged: !!user,
    loading,
    login,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
