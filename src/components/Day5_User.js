import React, { useState, useEffect } from "react";

export default function User({ endpoint = "/api/user" }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        if (isMounted) setUser(data);
      } catch {
        if (isMounted) setError(true);
      }
    }

    loadUser();

    return () => {
      isMounted = false; // cleanup to avoid state update on unmounted component
    };
  }, [endpoint]);

  if (error) return <div>Error loading user</div>;
  if (!user) return <div>Loading...</div>;

  return <div>{user.name || "No user found"}</div>;
}
