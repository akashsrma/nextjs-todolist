"use client";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db } from "../firebase/FierbaseConfig";
import { UserContext } from "../context/usercontext";
import { useRouter } from "next/navigation";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [val, setVal] = useState([]);
  const { userLogin } = useContext(UserContext);
  const router = useRouter();
  const value = collection(db, "Akash");
  const getData = async () => {
    const dbVal = await getDocs(value);
    await setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    // console.log(val);
  };
  useEffect(() => {
    getData();
  }, []);

  const LoginUser = (e) => {
    e.preventDefault();
    userLogin(email, password);
    val.forEach((value) => {
      if (value.email === email && value.password === password) {
        localStorage.setItem("Akash", JSON.stringify({ email }));
        // console.log(value.email);
      } else {
        router.push("/login");
        // console.log("signed in failed");
      }
    });
  };
  return (
    <form className="text-center mt-32" onSubmit={LoginUser}>
      <p className="font-semibold text-gray-600">LOGIN</p>
      <hr className="w-[5rem] ml-[10.6rem] border-2 "></hr>

      <div className="flex  items-center justify-center mt-6 ">
        <input
          type="email"
          name="email-address"
          placeholder="Email-Address"
          className="border-2 h-[2rem] w-[26rem] rounded-sm"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </div>

      <div className="flex  items-center justify-center mt-6">
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border-2 h-[2rem] w-[26rem] rounded-sm"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <div className="flex  items-center justify-center mt-6">
          <button
            type="submit"
            className="bg-gray-500 border-2 h-[2rem] w-[26rem] rounded-md text-white hover:bg-gray-700 "
          >
            Submit
          </button>
        </div>
        <div className="flex  items-center justify-center mt-5">
          <p className="flex gap-4 font-semibold ">
            If You Don't have an Account..?
            <span
              onClick={() => router.push("/signup")}
              className="bg-gray-600 px-7  rounded-md text-white animate-bounce transition-all duration-150 hover:animate-none"
            >
              SignUp
            </span>
          </p>
          {/* <button
            type="signup"
            onClick={() => router.push("/signup")}
            className="bg-gray-500 border-2 h-[2rem] w-[14rem] rounded-md text-white hover:bg-gray-700"
          >
            Signup
          </button> */}
        </div>
      </div>
    </form>
  );
};

export default Login;
