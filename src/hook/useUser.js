import { useState } from "react";

function useUser() {
  const [user, setUser] = useState(true);
  return [user, setUser];
}

export default useUser;
