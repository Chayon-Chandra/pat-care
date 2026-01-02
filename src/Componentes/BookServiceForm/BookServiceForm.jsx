import React, { useState } from "react";
import { toast } from "react-toastify";

const BookServiceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const bookNowHandle = (e) => {

    e.preventDefault();
    if (!name || !email) {
      toast.error(<p className="text-xl text-red-500">Please fill all fields</p>);
      return;
    }

    toast.success(<p className="text-xl text-green-500">Book Now Successful</p>);
    setName("");
    setEmail("");
  };

  return (
    <div className="py-5">
      <h2 className="font-black text-3xl text-center py-7">Book Service</h2>
      <div className="flex justify-center">
        <form
          onSubmit={bookNowHandle}
          className=" bg-base-300 border-base-300 rounded-box w-2xl border p-4"
        >
          <label className="fieldset">
            <span className="label text-2xl">Name</span>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="input validator w-full"
              placeholder="Your Name"
              required
            />
          </label>

          <fieldset className="fieldset">
            <label className="label text-2xl">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="input validator w-full"
              placeholder="Your Email"
              required
            />
          </fieldset>
          <div className="flex justify-center py-5">
            <button
              onClick={bookNowHandle}
              className="btn btn-neutral mt-4 "
              type="submit"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookServiceForm;
