import React from 'react';

const Breeds = () => {
    return (
        <div className='bg-black p-16'>
            <div className='mb-7'>
                <h2 className='font-bold text-3xl text-center text-white'>Breeds we handle.</h2>
                <p className='font-normal text-xl text-center text-gray-100 py-3'>We help save lives of your beloved pets. Our expert pet trainers are <br /> always here to help your pet in need.</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5">
                <div className='hover:scale-105 transition ease-in-out'>
                    <div className='flex justify-center'>
                        <img className="w-30 h-30 rounded-full "
                         src="https://i.ibb.co.com/TBmd7P3B/10025.png" alt="" />
                    </div>
                    <div>
                        <h6 className='font-semibold text-xl text-center text-white py-3'>Bolognese</h6>
                    </div>
                </div>
                <div className='hover:scale-105 transition ease-in-out'>
                    <div className='flex justify-center'>
                        <img className="w-30 h-30 rounded-full "
                         src="https://i.ibb.co.com/Q3B08CZy/10026.png" alt="" />
                    </div>
                    <div>
                        <h6 className='font-semibold text-xl text-center text-white py-3'>Bulldog</h6>
                    </div>
                </div>
                <div className='hover:scale-105 transition ease-in-out'>
                    <div className='flex justify-center'>
                        <img className="w-30 h-30 rounded-full "
                         src="https://i.ibb.co.com/JjhK5dzD/10027.png" alt="" />
                    </div>
                    <div>
                        <h6 className='font-semibold text-xl text-center text-white py-3'>Greyhound</h6>
                    </div>
                </div>
                <div className='hover:scale-105 transition ease-in-out'>
                    <div className='flex justify-center'>
                        <img className="w-30 h-30 rounded-full "
                         src="https://i.ibb.co.com/gMnr5Z4L/10028.png" alt="" />
                    </div>
                    <div>
                        <h6 className='font-semibold text-xl text-center text-white py-3'>Dalmatian</h6>
                    </div>
                </div>
                <div className='hover:scale-105 transition ease-in-out'>
                    <div className='flex justify-center'>
                        <img className="w-30 h-30 rounded-full "
                         src="https://i.ibb.co.com/XfvssfXd/10029.png" alt="" />
                    </div>
                    <div>
                        <h6 className='font-semibold text-xl text-center text-white py-3'>Collie</h6>
                    </div>
                </div>
                <div className='hover:scale-105 transition ease-in-out'>
                    <div className='flex justify-center'>
                        <img className="w-30 h-30 rounded-full "
                         src="https://i.ibb.co.com/rKT9pRX0/10030.png" alt="" />
                    </div>
                    <div>
                        <h6 className='font-semibold text-xl text-center text-white py-3'>Dachshund</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breeds;