import React, { useState } from "react";

const BillPopUp = ({ setShow, addBill }) => {
  const handleClickDisappear = () => {
    setShow(false);
  };

  const [formData, setFormData] = useState({
    billName: "",
    frequency: "",
    dueDate: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendPostRequest = async () => {
    if (
      !formData.billName.trim() ||
      !formData.frequency.trim() ||
      !formData.dueDate.trim() ||
      !formData.amount.trim()
    ) {
      alert("Please fill in all the fields before adding the bill.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/bills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          amount: Number(formData.amount), // Ensure amount is a number
          dueDate: `${formData.dueDate}th`, // Format due date if necessary
          status: "none",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add the bill. Please try again.");
      }

      const newBill = await response.json();
      addBill(newBill); // Call addBill to update the bills list
      alert("Bill added successfully!");
      handleClickDisappear(); // Hide the popup after submission
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while adding the bill.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    sendPostRequest(); // Directly call sendPostRequest on form submit
  };

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[560px] p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Add New Bill</h2>
          <button
            onClick={handleClickDisappear}
            className="text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-600 mt-2">
          Create New Bill. These can help keep you on track as you save for
          special purchases.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="billName"
              className="block text-sm font-medium text-gray-700"
            >
              Bill Name
            </label>
            <input
              id="billName"
              name="billName"
              value={formData.billName}
              onChange={handleChange}
              type="text"
              maxLength="30"
              placeholder="e.g. Rainy Days"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>

          <div>
            <label
              htmlFor="frequency"
              className="block text-sm font-medium text-gray-700"
            >
              Frequency
            </label>
            <input
              id="frequency"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              type="text"
              placeholder="e.g. Monthly"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>

          <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              type="text"
              placeholder="e.g. 14th"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              type="number"
              placeholder="e.g. 300"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 rounded-md"
            >
              Add Bill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillPopUp;
