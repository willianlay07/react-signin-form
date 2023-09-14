import { useState } from "react";

const App = () => {
  const [inStatus, setInstatus] = useState(true);

  const handleInStatus = () => {
    setInstatus((prev) => !prev);
  };

  return (
    <>
      {inStatus ? "" : ""}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-black text-[30px] font-bold py-5">
          Is it better for {inStatus ? "Sign In" : "Sign Up"}?
        </h2>
        <div className="formbox">
          <div className="text-center text-2xl text-gray-800">
            {inStatus ? "Sign In" : "Sign Up"}
          </div>
          <div className="text-center text-sm text-gray-800 py-2">
            {inStatus ? "Do not have account? " : "Already have account? "}
            <button className="text-blue-500" onClick={() => handleInStatus()}>
              {inStatus ? "Sign Up" : "Sign In"}
            </button>
          </div>

          {inStatus ? (
            <>
              <div className="w-full text-left text-sm text-gray-800">
                Email Address
              </div>
              <div className="w-full mt-1">
                <input type="text" className="inputStyle" />
              </div>

              <div className="w-full text-left text-sm text-gray-800 mt-5">
                Password
              </div>
              <div className="w-full mt-1">
                <input type="password" className="inputStyle" />
              </div>
            </>
          ) : (
            <>
              <div className="w-full text-left text-sm text-gray-800">
                First Name
              </div>
              <div className="w-full mt-1">
                <input type="text" className="inputStyle" />
              </div>

              <div className="w-full text-left text-sm text-gray-800 mt-5">
                Last Name
              </div>
              <div className="w-full mt-1">
                <input type="text" className="inputStyle" />
              </div>

              <div className="w-full text-left text-sm text-gray-800 mt-5">
                Email Address
              </div>
              <div className="w-full mt-1">
                <input type="text" className="inputStyle" />
              </div>

              <div className="w-full text-left text-sm text-gray-800 mt-5">
                Password
              </div>
              <div className="w-full mt-1">
                <input type="password" className="inputStyle" />
              </div>
            </>
          )}

          <div className="w-full mt-5">
            <button className="w-full h-10 bg-blue-500 text-white text-sm rounded-sm hover:bg-blue-700">
              {inStatus ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <div className="w-full py-4 text-center text-sm text-gray-700">
            OR
          </div>

          <div className="w-full">
            <button className="w-full flex flex-row justify-center gap-2 text-sm text-gray-800 py-2 ring-1 ring-slate-300 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="#0053ed"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              <span>{inStatus ? "Sign In" : "Sign Up"} with Facebook</span>
            </button>
          </div>

          <div className="w-full mt-5">
            <button className="w-full flex flex-row justify-center gap-2 text-sm text-gray-800 py-2 ring-1 ring-slate-300 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="#0053ed"
                viewBox="0 0 24 24"
              >
                <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" />
              </svg>
              <span>{inStatus ? "Sign In" : "Sign Up"} with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
