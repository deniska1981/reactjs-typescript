import React, { useEffect, memo } from "react";

// First one to render a user's password:

type PasswordInputProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
  useEffect(() => {
    console.log("Password renderiran");
  });
  return (
    <label>
      Your password:
      <input
        type="password"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </label>
  );
};

export default memo(PasswordInput);
