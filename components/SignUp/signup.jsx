"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/components/firebase/FierbaseConfig";
import { useRouter } from "next/navigation";
const Signup = () => {
  const [userData, setUserdata] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phonenumber: "",
    email: "",
    country: "",
    password: "",
    confirmpassword: "",
  });
  const router = useRouter();
  const handlesubmit = async (e) => {
    try {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "Akash"), {
        firstname: userData.firstname,
        lastname: userData.lastname,
        username: userData.username,
        phonenumber: userData.phonenumber,
        email: userData.email,
        country: userData.country,
        password: userData.password,
        confirmpassword: userData.confirmpassword,
      });
      await router.push("/login");
      await setUserdata({
        firstname: "",
        lastname: "",
        username: "",
        phonenumber: "",
        email: "",
        country: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      console.error("error adding documents: ", e);
    }
  };
  return (
    <form className="text-center mt-32 " onSubmit={handlesubmit}>
      <p className="font-semibold text-gray-600">SIGN UP</p>
      <div className="flex gap-3 items-center justify-center mt-6">
        <input
          type="text"
          name="firstname"
          placeholder="First-Name"
          className="border-2 h-[2rem] "
          onChange={(e) =>
            setUserdata({ ...userData, firstname: e.target.value })
          }
          required
        />
        <input
          type="text"
          name="last-name"
          placeholder="last-Name"
          className="border-2 h-[2rem]"
          onChange={(e) =>
            setUserdata({ ...userData, lastname: e.target.value })
          }
          required
        />
      </div>
      <div className="flex gap-3 items-center justify-center mt-6">
        <input
          type="text"
          name="user-name"
          placeholder="User-Name"
          className="border-2 h-[2rem] "
          onChange={(e) =>
            setUserdata({ ...userData, username: e.target.value })
          }
          required
        />
        <input
          type="number"
          name="phonenumber"
          placeholder="phone-number"
          className="border-2 h-[2rem]"
          onChange={(e) =>
            setUserdata({ ...userData, phonenumber: e.target.value })
          }
          required
        />
      </div>
      <div className="flex  items-center justify-center mt-6">
        <input
          type="email"
          name="email"
          placeholder="Email-Address"
          className="border-2 h-[2rem] w-[29rem]"
          onChange={(e) => setUserdata({ ...userData, email: e.target.value })}
          required
        />
      </div>
      <div className="flex  items-center justify-center mt-6">
        <input
          type="country"
          name="country"
          placeholder="country"
          className="border-2 h-[2rem] w-[29rem]"
          onChange={(e) =>
            setUserdata({ ...userData, country: e.target.value })
          }
          required
        />
      </div>
      <div className="flex  items-center justify-center mt-6">
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border-2 h-[2rem] w-[29rem]"
          onChange={(e) =>
            setUserdata({ ...userData, password: e.target.value })
          }
          required
        />
      </div>
      <div className="flex  items-center justify-center mt-6">
        <input
          type="password"
          name="confirm-password"
          placeholder="confirm-password"
          className="border-2 h-[2rem] w-[29rem]"
          onChange={(e) =>
            setUserdata({ ...userData, confirmpassword: e.target.value })
          }
          required
        />
      </div>
      <div className="flex  items-center justify-center mt-6">
        <button
          type="submit"
          className="bg-gray-500 border-2 h-[2rem] w-[29rem] rounded-md text-white hover:bg-gray-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Signup;
