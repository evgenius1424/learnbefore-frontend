import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useAuthentication } from "@/hooks/useAuthentication";
import { BookOpenCheck } from "lucide-react";

export default function AuthenticationPage() {
  const { userToken, login } = useAuthentication();

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="w-full max-w-md mx-auto">
        <Alert className="mb-4">
          <BookOpenCheck className="h-4 w-4" />
          <AlertTitle>LearnBefore™</AlertTitle>
          <AlertDescription>
            LearnBefore is a platform designed to help you discover unfamiliar
            words, allowing you to learn them in advance, before encountering
            them in films, books, blogs, etc.
          </AlertDescription>
        </Alert>
      </div>
      {!userToken && (
        <Button onClick={() => login()}>Sign In with Google</Button>
      )}
    </div>
  );
}