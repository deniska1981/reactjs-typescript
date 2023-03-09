import React, { useState, useMemo } from "react";
import { sha256 } from "js-sha256";

const MemoExample: React.FC = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  // Now we use `useMemo` to tell React
  // to memoize the calculation result for input.
  // When a user inputs the same input
  // there will be done no calculation
  // and the value will be returned right away.

  const hash = useMemo(() => {
    console.log("Izvrsavam se");
    return sha256(input);
  }, [input]);

  return (
    <div style={{ backgroundColor: "#DDDDDD" }}>
      <label>
        Input:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        Input 2:
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </label>
      Hash: {hash}
    </div>
  );
};

export default MemoExample;
