import Router from "./routes";
import { GlobalStyle } from "./styles";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router />
      <GlobalStyle />
      <Toaster />
    </>
  );
}

export default App;
