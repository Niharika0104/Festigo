import React from "react";

const payments = [
  {
    name: "Harshika",
    dueDate: "Sat, 20 Apr 2024",
    paymentDate: "-",
    amount: "$8 crore",
    status: "To be done",
  },
  {
    name: "Suraj",
    dueDate: "Fri, 19 Apr 2024",
    paymentDate: "-",
    amount: "$70.03",
    status: "Pending",
  },
  {
    name: "Sambodhii",
    dueDate: "Wed, 09 Apr 2024",
    paymentDate: "Tue, 19 May 2024",
    amount: "$30 billion",
    status: "Completed",
  },
  {
    name: "Sneha",
    dueDate: "Mon, 23 Mar 2024",
    paymentDate: "Thurs, 27 Mar 2024",
    amount: "$380.57",
    status: "Completed",
  },
];

const tableHeading = [
  "Name",
  "Due Date",
  "Date of payment",
  "Amount",
  "Status",
];

const statusColors: any = {
  "To be done": "bg-red-200 text-red-800",
  Pending: "bg-yellow-200 text-yellow-800",
  Completed: "bg-green-200 text-green-800",
};

export function Payout() {
  return (
    <div>
      <div className="w-full flex-col flex gap-8 bg-white rounded-[40px] py-10 px-7">
        {/* page-title | search-bar | filter  */}
        <div className="w-full">
          {/* title */}
          <div>
            <p className="text-[#FF0000] text-3xl">Transactions</p>
          </div>

          {/* search | filter */}
          <div className="">
            {/* Search */}
            <div></div>
            {/* filter */}
            <div></div>
          </div>
        </div>

        {/* Transaction table */}
        <div className="w-full">
          <table className="w-full overflow-hidden">
            {/* Heading */}
            <thead className="bg-[#ED1212]/[75%] font-normal rounded-xl text-white">
              <tr>
                {tableHeading.map((value, index) => {
                  return (
                    <th
                      key={index}
                      className="border border-white px-4 py-3 text-left"
                    >
                      <p className="text-xl font-normal">{value}</p>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Body */}
            <tbody className="text-[#282458]">
              {payments.map((payment, index) => (
                <tr key={index} className="">
                  <td className="px-4 py-2 text-start">{payment.name}</td>
                  <td className=" px-4 py-2 text-start">{payment.dueDate}</td>
                  <td className=" px-4 py-2 text-center">
                    {payment.paymentDate}
                  </td>
                  <td className=" px-4 py-2 text-center">{payment.amount}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block text-base w-2/3 text-center py-2 rounded ${
                        statusColors[payment.status]
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
