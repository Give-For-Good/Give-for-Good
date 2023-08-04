import styles from "../style";
import React, { useState } from "react";

const Forms = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    reason: "",
    amount: 0,
    comments: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    // Your form submission logic here
    
    setLoading(false);
    
    // Resetting form fields
    setUserDetails({
      firstName: "",
      lastName: "",
      reason: "",
      amount: 0,
      comments: ""
    });
  };

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow w-1/2`}>
      <div className="flex-1 flex flex-col">
        {loading ? <p className="font-bold text-white">Loading...</p> : ""}
        <h2 className={styles.heading2}>Apply for Fund.</h2>
        <form onSubmit={handleSubmit}>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>First name:</p>
          <input
            value={userDetails.firstName}
            onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
            className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"
          />
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Last name:</p>
          <input
            value={userDetails.lastName}
            onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
            className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"
          />
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Story:</p>
          <input
            value={userDetails.reason}
            onChange={(e) => setUserDetails({ ...userDetails, reason: e.target.value })}
            className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"
          />
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Goal (optional):</p>
          <input
            value={userDetails.amount}
            onChange={(e) => setUserDetails({ ...userDetails, amount: e.target.value })}
            className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"
          />

          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Comments:</p>
          <input
            value={userDetails.comments}
            onChange={(e) => setUserDetails({ ...userDetails, comments: e.target.value })}
            className="bg-dimWhite text-black p-2 rounded-sm font-poppins rounded-full cursor-pointer sm:w-[100%] border-[#3d4f7c]"
          />
          <div>
            <button
              disabled={loading}
              onClick={handleSubmit}
              className={`py-4 mt-3 px-6 ${
                loading ? "bg-dimWhite text-black" : "bg-blue-gradient text-primary"
              } font-poppins font-medium text-[18px]  outline-none ${styles} rounded-[10px] `}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Forms;
