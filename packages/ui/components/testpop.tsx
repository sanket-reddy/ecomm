import axios from "axios";
export default function ConfirmPopup(props: {
  isOpen: boolean;
  onClose: any;
  token: string;
  title: string;
  category: string;
}) {
  if (!props.isOpen) return;
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-gray-900 bg-opacity-70">
      <div className="bg-white  p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl">are you sure that you want buy the product</h1>
        <div className="flex justify-center items-center gap-3 mt-3">
          <button
            className="bg-blue-500 p-3 rounded-md w-1/4 hover:bg-blue-600"
            onClick={async () => {
              let response = await axios.post(
                "../../../apps/client/src/pages/api/buyproduct",
                {
                  title: props.title,
                  token: props.token,
                  category: props.category,
                }
              );
              console.log(response.data);
            }}
          >
            YES
          </button>
          <button
            className="bg-blue-500 p-3 rounded-md w-1/4 hover:bg-blue-600"
            onClick={props.onClose}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}
