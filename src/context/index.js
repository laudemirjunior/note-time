import { LoginProvider } from "./loginContext";
import { UserProvider } from "./userContext";

export default function Providers({ children }) {
  return (
    <LoginProvider>
      <UserProvider>{children}</UserProvider>
    </LoginProvider>
  );
}
