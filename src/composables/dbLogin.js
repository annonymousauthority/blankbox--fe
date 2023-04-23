import axios from "axios";
async function signInWithUsernameAndPassword(username, password) {
  const url = "https://blankbox.onrender.com/signinwithusernameandpassword";

  const data = {
    username: username,
    password: password,
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    project: process.env.NEXT_PUBLIC_PROJECT_ID,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status != 200) {
      return undefined;
    } else {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
}

export { signInWithUsernameAndPassword };
