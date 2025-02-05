import React, { useState } from "react";
import { googleSignIn } from "./firebase-config";

const GoogleSignInButton = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await googleSignIn();
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <GoogleSignInButton />
    </Router>
  );
};
};


export default GoogleSignInButton;
