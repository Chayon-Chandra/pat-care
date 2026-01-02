import React from 'react';

const Profile = () => {
    return (
        <div className='my-14 py-20 w-xl mx-auto bg-gray-200 rounded-2xl shadow-lg'>
            <div className='flex justify-center'>
                <img className='w-70 h-70 rounded-full' src="https://i.ibb.co.com/1SyKtwQ/10014.png" alt="" />
            </div>
            <div className='flex justify-between px-3'>
                <div>
                    <h3>Name</h3>
                    <p>chayon</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>chayon@com</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <button>Update Profile</button>
            </div>
        </div>
    );
};

export default Profile;