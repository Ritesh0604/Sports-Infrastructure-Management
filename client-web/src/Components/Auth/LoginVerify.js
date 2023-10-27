import { useCookies } from "react-cookie";
import { redirect, useNavigate } from "react-router-dom";

const LoginVerify = async () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    return null;
  } else {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      token: token,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(
      "http://localhost:9999/verify",
      requestOptions
    );
    const result = await response.json();
    console.log(result);
    if (result.rcode === 200) {
      if (result.data.Role === 5) {
        return redirect("/admin");
      } else if (result.data.Role === 4) {
        return redirect("/admin");
      } else if (result.data.Role === 3) {
        return redirect("/admin");
      } else {
        return redirect("/");
      }
    }
  }
};

export default LoginVerify;
