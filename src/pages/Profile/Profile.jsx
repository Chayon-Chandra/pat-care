import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { AuthConText } from "../../Context/AuthContext/AuthContext";

const Profile = () => {
  const { user, setLoading, setUser} = useContext(AuthConText);
  const handleProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    const profileUpdate = {
      displayName: name,
      photoURL: photo,
    };
    updateProfile(user, profileUpdate)
      .then(() => {
        setUser((prev)=> { return {...prev, ...profileUpdate}})
      }).finally(() =>{
            setLoading(false)
          })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="my-14 py-14 w-sm mx-auto bg-gray-200 rounded-2xl shadow-lg">
      <div className="flex justify-center">
        <img
          className=" w-40 h-40 rounded-full flex justify-center "
          src={user?.photoURL || "https://i.ibb.co.com/fzHgBZ2d/images-15.jpg"}
          alt=""
        />
      </div>
      <div className="pt-5 ml-7 ">
        <div className=" flex flex justify-start gap-3">
          <h3 className="font-semibold text-2xl">Name :</h3>
          <p className="font-normal text-2xl">
            {user?.displayName || "your name"}
          </p>
        </div>
        <div className=" flex flex justify-start gap-3 py-1">
          <h3 className="font-semibold text-2xl">E-mail :</h3>
          <p className="font-normal text-2xl">{user?.email}</p>
        </div>
      </div>

      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className="flex justify-center pt-5">
        <button
          className="btn btn-outline btn-primary flex justify-center font-normal text-xl"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Profile Update
        </button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleProfile}>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your Name"
                    name="name"
                  />
                  <label className="label">Photo</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Photo URL"
                    name="photo"
                  />
                </fieldset>
                <button className="btn btn-neutral mt-4">Update</button>
              </div>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
