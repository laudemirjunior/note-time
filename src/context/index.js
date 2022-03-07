import { LoginProvider } from "./loginContext";

export default function Providers({ children }) {
  return <LoginProvider>{children}</LoginProvider>;
}
