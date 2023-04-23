import { signInWithUsernameAndPassword } from "@/composables/dbLogin";
import { useCallback, useState } from "react";

export default function Login() {
  const [checker, setChecker] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toggleFailed(setChecker, setLoggedIn) {
    setChecker(false);
    setLoggedIn(false);
  }

  function toggleSuccess() {
    setChecker(false);
    setLoggedIn(true);
  }

  const printLoginJson = async (e) => {
    e.preventDefault();
    setChecker(true);
    const response = await signInWithUsernameAndPassword(email, password);
    if (response == undefined) {
      toggleFailed(setChecker, setLoggedIn);
    } else {
      toggleSuccess();
    }
  };

  const handleEmailChanged = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChanged = (e) => {
    setPassword(e.target.value);
  };
  return (
    <main>
      <div className="flex max-w-5xl mx-auto items-start flex-col lg:flex-row mt-44">
        <form onSubmit={printLoginJson} className="w-1/2 space-y-6">
          <h1 className="text-2xl font-bold">BlankBox Front End Test</h1>
          <div>
            <label>Username</label>
            <input
              type="email"
              required
              onChange={handleEmailChanged}
              value={email}
              placeholder="kurtweller@blindspot.com"
              className="border-[1px] border-gray-400 flex w-full p-3"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={handlePasswordChanged}
              placeholder="********"
              className="border-[1px] border-gray-400 flex w-full p-3"
            />
            {loggedIn ? (
              <small className="text-green-600">
                User loggedIn Successfully!
              </small>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-red-500 mt-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
          <button
            type="submit"
            className="flex w-1/2 text-center items-center justify-center bg-gradient-to-r from-blue-700 to-blue-800 p-3 rounded-lg text-white"
          >
            {checker ? (
              <div role="status" className="pr-6">
                <svg
                  aria-hidden="true"
                  className="mr-2 w-4 h-4 my-auto text-white animate-spin dark:text-gray-600 fill-white"
                  viewBox="0 0 100 101"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#ffffff"
                  ></path>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div></div>
            )}
            <span> Signin</span>
          </button>
        </form>
      </div>
    </main>
  );
}
