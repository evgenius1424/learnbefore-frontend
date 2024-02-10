import { GoogleLogin } from "@react-oauth/google";
import "./App.css";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { BookOpenCheck } from "lucide-react";

function App() {
  return (
    <>
      <Alert>
        <BookOpenCheck className="h-4 w-4" />
        <AlertTitle>LearnBefore™</AlertTitle>
        <AlertDescription>
          LearnBefore is a platform designed to help you discover unfamiliar
          words, allowing you to learn them in advance, before encountering them
          in films, books, blogs, etc.{" "}
          <a
            href="https://github.com/evgenius1424/learnbefore"
            target="_blank"
            rel="noreferrer noopener"
          ></a>
        </AlertDescription>
        <GoogleLogin
          auto_select
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Alert>
    </>
  );
}

export default App;
