"use client";

import { useEffect, useState, useContext } from "react";
import { db } from "@/components/firebase/FierbaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../context/usercontext";

const Todolist = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [val, setVal] = useState([]);
  const value = collection(db, "To-Do-List");
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  const { uid, setUid } = useContext(UserContext);
  const getData = async () => {
    const q = query(collection(db, "To-Do-List"), where("uid", "==", uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setVal(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    // const dbval = await getDocs(value);
    // dbval.docs.length > 0 &&
  };
  useEffect(() => {
    const useruid = localStorage.getItem("userUid");
    setUid(useruid);
    getData();
  }, [uid]);

  const handlesubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const handleCreate = async () => {
    if (firstname === "" && lastname === "") {
      alert("Enter a value");
    } else {
      await addDoc(value, { fname: firstname, lname: lastname, uid: uid });
    }
  };

  const handleDelete = async (id) => {
    const deleteValue = doc(db, "To-Do-List", id);
    await deleteDoc(deleteValue);
    getData();
  };

  const handleEdit = async (id, fname, lname) => {
    setFirstname(fname);
    setLastname(lname);
    setId(id);
    setShow(true);
  };

  const handleUpdate = async () => {
    const updateData = doc(db, "To-Do-List", id);
    await updateDoc(updateData, { fname: firstname, lname: lastname });
    setShow(false);
    setFirstname("");
    setLastname("");
  };
  return (
    <form onSubmit={handlesubmit}>
      <div className="flex flex-row gap-3  items-center justify-center ">
        <input
          className="border-2 border-gray-500 rounded-md py-2"
          value={firstname}
          name="firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          className="border-2 border-gray-500 rounded-md py-2"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        {!show ? (
          <button
            onClick={handleCreate}
            className="text-lg font-semibold rounded-md bg-gray-700 text-white px-6 py-2 cursor-pointer hover:bg-gray-300 hover:text-gray-800"
          >
            Create
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="text-lg font-semibold rounded-md bg-gray-700 text-white px-6 py-2 cursor-pointer hover:bg-gray-300 hover:text-gray-800"
          >
            UP-Date
          </button>
        )}
      </div>
      <div>
        {val.length > 0 &&
          val.map((values) => (
            <div>
              <h1>{values.fname}</h1>
              <h1>{values.lname}</h1>
              <button
                onClick={() => handleDelete(values.id)}
                className="text-lg font-semibold rounded-md bg-gray-700 text-white px-6  cursor-pointer hover:bg-gray-300 hover:text-gray-800"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  handleEdit(values.id, values.fname, values.lname)
                }
                className="text-lg font-semibold rounded-md bg-gray-700 text-white px-6 ml-3 cursor-pointer hover:bg-gray-300 hover:text-gray-800"
              >
                Edit
              </button>
            </div>
          ))}
      </div>
    </form>
  );
};

export default Todolist;
