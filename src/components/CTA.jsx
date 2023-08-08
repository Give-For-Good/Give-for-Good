import styles from "../style";
import React from "react";

const CTA = () => {
  const users = [
    {
      name: "John Doe",
      contributedAmount: 500,
      totalAmount: 1000,
      timeLeft: "2 days",
    },
    {
      name: "Jane Smith",
      contributedAmount: 800,
      totalAmount: 1000,
      timeLeft: "1 day",
    },
    {
      name: "Will Smith",
      contributedAmount: 800,
      totalAmount: 1000,
      timeLeft: "1 day",
    },
    
    // Add more user data as needed
  ];
  // Calculate the amount left till completion of the contribution.
  // const amountLeft = totalAmount - contributedAmount;

  // Calculate the total amount contributed by all users
  const totalContributedAmount = users.reduce((acc, user) => acc + user.contributedAmount, 0);

  // Calculate the total amount left until completion of the contribution
  const totalAmount = users.reduce((acc, user) => acc + user.totalAmount, 0);
  const totalAmountLeft = totalAmount - totalContributedAmount;

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>This is our Banner</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          This is where we would be displaying heavy info,... like an alert to users opening the page
        </p>
        
         {/* Contribution Progress */}
         <div className="mt-4 mb-4 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2 text-white">Contribution Progress</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-white">
              <p className="mb-1">Total Amount Contributed:</p>
              <p className="text-2xl">${totalContributedAmount}</p>
            </div>
            <div className="text-white">
              <p className="mb-1">Total Amount Left:</p>
              <p className="text-2xl">${totalAmountLeft}</p>
            </div>
          </div>
        </div>

        {/* User's Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user, index) => {
            // Calculate the amount left till completion of the contribution.
            const amountLeft = user.totalAmount - user.contributedAmount;

            return (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-300"
              >
                <p className="text-white">User Name: {user.name}</p>
                <p className="text-white">Contributed Amount: ${user.contributedAmount}</p>
                <p className="text-white">Time Left for Contribution: {user.timeLeft}</p>
                <p className="text-white">Amount Left: ${amountLeft}</p>
              </div>
            );
          })}
        </div>


        {/* Contribution Progress */}
  {/* <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg">
  <h3 className="text-xl font-semibold mb-2 text-white">Contribution Progress</h3>
  <div className="grid grid-cols-2 gap-4">
    <div className="text-white">
      <p className="mb-1">Total Amount Contributed:</p>
      <p className="text-2xl">${totalContributedAmount}</p>
    </div>
    <div className="text-white">
      <p className="mb-1">Total Amount Left:</p>
      <p className="text-2xl">${totalAmountLeft}</p>
    </div>
  </div>
</div> */}



      </div>
    </section>
  );
};

export default CTA
