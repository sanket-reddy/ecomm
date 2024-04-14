// components/Popup.js

import { TextField } from "@mui/material";
import { useState } from "react";
const Popup = (props: {
  isOpen: boolean;
  onClose: any;
  token: string;
  title: string;
  category: string;
  handleRating: any;
}) => {
  const [rating, setRating] = useState<number>(0);
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-70 backdrop-blur-sm  ">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          🎊 🎊 Congratulation you have successfully bought the product 🎊 🎊
        </h2>
        <div className="flex flex-cols justify-center items-center">
          <TextField
            variant="outlined"
            placeholder="Please give your rating out of 5 stars"
            className="w-[260px]"
            onChange={(e) => {
              let y = Number(e.target.value);
              setRating(y);
            }}
          ></TextField>
        </div>

        <div className="flex justify-center items-center gap-6">
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              if (rating < 0 || rating > 5) {
                alert("pls enter a rating between 1 and 5");
              } else {
                props.handleRating(
                  rating,
                  props.token,
                  props.title,
                  props.category
                );
                props.onClose();
              }
            }}
          >
            Submit
          </button>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
