// components/CongratulationsAnimation.tsx

import React, { useState, useEffect } from "react";

const CongratulationsAnimation: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-opacity duration-1000 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl text-green-500 font-bold">Congratulations!</h1>
        <p className="text-lg text-gray-600 mt-4">
          You've achieved something great!
        </p>
      </div>
    </div>
  );
};

export default CongratulationsAnimation;
