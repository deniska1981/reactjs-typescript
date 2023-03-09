import React, { useState, useCallback } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

const CallbackExample = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = useCallback(
    (newValue: string): void => setEmail(newValue),
    []
  );
  const updatePassword = useCallback(
    (newValue: string): void => setPassword(newValue),
    []
  );

  return (
    <>
      <div>CallbackExample</div>
      <form>
        <EmailInput value={email} onChange={updateEmail} />

        <PasswordInput value={password} onChange={updatePassword} />
      </form>
    </>
  );
};

export default CallbackExample;