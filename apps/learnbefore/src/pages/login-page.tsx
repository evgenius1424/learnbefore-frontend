import { Button } from "@/components/ui/button";
import { useAuthentication } from "@/hooks/useAuthentication";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "@/routes.ts";

export default function AuthenticationPage() {
  const { userToken, login } = useAuthentication();

  const navigate = useNavigate();

  useEffect(() => {
    if (userToken != null) navigate(RoutePaths.index);
  }, [navigate, userToken]);

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-no-repeat bg-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Learnbefore™
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Learnbefore is a platform designed to help you discover unfamiliar
              words, allowing you to learn them in advance, before encountering
              them in films, books, blogs, etc.
            </p>
          </div>
          {!userToken && (
            <div className="w-full max-w-sm space-y-2 flex items-center justify-center">
              <form className="flex space-x-2">
                <Button onClick={() => login()}>Sign In with Google</Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}