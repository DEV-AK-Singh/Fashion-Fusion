import React from "react";
import { Triangle } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <div
        className="bg-white d-flex justify-content-center align-items-center"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: 100,
          top: 0,
        }}
      >
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#dc3545"
          ariaLabel="triangle-loading"
        />
      </div>
    </>
  );
}
