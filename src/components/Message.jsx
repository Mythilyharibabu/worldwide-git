import React from "react";

export default function Message({ message }) {
  return (
    <div>
      <p style={{ color: "#fff" }}>
        <b>
          <span style={{fontSize:'25px'}}>👋Hi </span> {message}
        </b>
      </p>
    </div>
  );
}
