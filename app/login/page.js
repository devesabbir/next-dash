"use client";

import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();
  const login = () => {
    document.cookie = "login" + "=" + "true";
    router.push("/dashboard");
  };
  return (
    <div>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default LoginPage;
