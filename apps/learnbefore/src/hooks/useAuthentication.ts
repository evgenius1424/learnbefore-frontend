import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { atom, useAtom } from "jotai";

const userTokenAtom = atom<TokenResponse | null>(null);

export const useAuthentication = () => {
  const [userToken, setUserToken] = useAtom(userTokenAtom);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      setUserToken(tokenResponse);
      console.log(tokenResponse);
    },
  });

  return {
    userToken,
    login,
  };
};
