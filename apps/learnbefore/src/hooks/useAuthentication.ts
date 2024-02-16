// authHooks.ts
import {useGoogleLogin} from "@react-oauth/google";
import {atom, useAtom} from "jotai";

const userTokenAtom = atom<string>("");

export const useAuthentication = () => {
    const [userToken, setUserToken] = useAtom(userTokenAtom);

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            setUserToken(tokenResponse.access_token);
            console.log(tokenResponse);
        },
    });

    return {
        userToken,
        login,
    };
};
