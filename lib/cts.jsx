import { useContext, createContext, useState, useEffect } from "react";
import { deleteToken, getToken, saveToken } from "../store/useStorageState";

const AuthContext = createContext({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getUserInfo() {
      setIsLoading(true);
      const token = await getToken("token");
      const user = await getToken("user");
      if (token && user) {
        setSession(token);
        setUserInfo(JSON.parse(user));
      }
      setIsLoading(false);
    }
    getUserInfo();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn: async (datas) => {
          console.log(datas, datas.email);
          setUserData(datas);
          setIsLoading(true);
          try {
            const response = await fetch(
              `https://tranzaxx.com/api/auth/login`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  // 'Accept': 'application/json'
                },
                body: JSON.stringify({
                  login: datas.email,
                  password: datas.password,
                  captcha_key: datas.captcha_key,
                }),
              }
            );

            if (!response.ok) {
              alert("Failed to sign in. Please check your credentials.");
            }

            const data = await response.json();
            // console.log(data);
            if (!data?.success) {
              if (data?.errors?.email) {
                alert(data?.errors?.email[0]);
                return;
              }
              alert(`${data?.message}`);
              return false;
            }

            if (data.success) {
              // token
              setSession(data.extra.authToken);
              saveToken("token", data.extra.authToken);
              // Save user info
              setUserInfo({ ...data.result, isAdmin: data.extra.isAdmin });
              saveToken(
                "user",
                JSON.stringify({ ...data.result, isAdmin: data.extra.isAdmin })
              );
              return true;
            }
          } catch (error) {
            console.error("Sign-in error:", error);
          } finally {
            setIsLoading(false);
          }
        },
        signOut: async () => {
          setSession(null);
          setUserInfo(null);

          await deleteToken("token");
          await deleteToken("user");
        },
        session,
        isLoading,
        userInfo,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
