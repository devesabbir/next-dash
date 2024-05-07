"use client";

import { useRouter } from "next/navigation";

function Logout() {
  const router = useRouter();
  const logout = () => {
    document.cookie = `login = 'false'`;
    router.push("/login");
  };
  return <button onClick={logout}>Logout</button>;
}

export default Logout;
