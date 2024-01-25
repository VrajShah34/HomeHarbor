import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-4 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>

        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input type='text'placeholder='Name' className='border p-3 rounded-lg'
                id="name" maxLength='62' minLength='10' required/>
                <textarea type='text'placeholder='Description' className='border p-3 rounded-lg'
                id="description" required/>
                <input type='text'placeholder='Address' className='border p-3 rounded-lg'
                id="address" required/>
            <div/>

                <div className='flex gap-6 flex-wrap'>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='w-5' id='sale'/>
                        <span>Sell</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='w-5' id='rent'/>
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='w-5' id='parking'/>
                        <span>Parking Spot</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='w-5' id='furnished'/>
                        <span>Furnished</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='w-5' id='offer'/>
                        <span>Offer</span>
                    </div>
                </div>


                <div className=' flex flex-wrap gap-6'>
                    <div className='flex items-center gap-2'>
                        <input type='number' id='bedrooms' min='1' max='10' required 
                        className='border p-3 border-gray-400 rounded-lg'  />
                        <span>Beds</span>
                    </div>
                
                
                    <div className='flex items-center gap-2'>
                        <input type='number' id='bathrooms' min='1' max='10' required 
                        className='border p-3 border-gray-400 rounded-lg'  />
                        <span>Bathrooms</span>
                    </div>
                
                
                    <div className='flex items-center gap-2'>
                        <input type='number' id='regularPrice' min='1' max='10' required 
                        className='border p-3 border-gray-400 rounded-lg'  />
                        <div className='flex felx-col items-center' >
                            <span>Regular Price</span>
                            <span className='text-xs'>($ / month)</span>
                        </div>
                    </div>
                
                
                    <div className='flex items-center gap-2'>
                        <input type='number' id='discountPrice' min='1' max='10' required 
                        className='border p-3 border-gray-400 rounded-lg'  />
                        <div className='flex felx-col items-center'>
                            <span>Discounted Price</span>
                            <span className='text-xs'>($ / month)</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex flex-col flex-1 gap-4 ml-6 border-slate-600'>
                <p className='font-semibold text-center'>
                    Images: 
                    <span className='font-normal text-gray-600 ml-2'> 
                        The first page will be the cover (max 6)
                    </span>
                </p>

                <div className='flex g-4'>
                    <input type='file' id='images' accept='image/*' multiple
                    className='p-3 border-slate-600 rounded-lg w-full' />
                    <button className='p-3 text-green-700 border border-green-700
                    rounded uppercase hover:shadow-md disabled:opacity-80'>Upload</button>
                </div>

                <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity80'>
                Create Listing
            </button>

            </div>          

        </form>
    </main>
  )
}
