import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRef , useState, useEffect} from 'react';
import default_profilePic from '../assets/profile_image_default.png'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import { app } from '../firebase';
import { updateUserFailure,updateUserStart, updateUserSuccess } from '../redux/user/userSlice';
import { set } from 'mongoose';



// //firestore storage -
// allow read;
// allow write: if
// request.resource.size < 2*1024*1024 &&
// request.resource.contentType.matches('image/.*');

export default function Profile() {

  const fileRef = useRef(null);
  const {currentUser, loading, error} = useSelector((state) => state.user);
  
  const [file,setFile] = useState(undefined);
  // console.log(file);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const dispatch = useDispatch();



  useEffect(()=>{
    if(file){
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime()+ file.name;
      const storageRef = ref(storage, fileName );
      const uploadTask = uploadBytesResumable(storageRef,file);

      uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        // console.log('upload is ' +progress+'% done');
        setFilePerc(Math.round(progress));
      },
      
      (error)=>{
        setFileUploadError(true);
      },
      () =>{
        getDownloadURL(uploadTask.snapshot.ref).then
        ((downloadURL) => 
          setFormData({...formData, avatar:downloadURL})
        );
      }
      );

  }

  const handleChange = (e) => {
        setFormData({...formData, [e.target.id]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateUserStart());
        const res = await fetch(`/api/user/update/${currentUser._id}`
        , {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',

          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if(data.success === false){
          dispatch(updateUserFailure(data.message));
          return;
        }

        dispatch(updateUserSuccess(data));
        setUpdateSuccess(true);
      
    } catch (error) {
        dispatch(updateUserFailure(error.message));
    }
  }

  return (
    <div className='p-3 max-w-lg  mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'> Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          <input type="file" ref = {fileRef} hidden accept='image/*'
          onChange={(e) => setFile(e.target.files[0])}/>

          <img onClick={() => fileRef.current.click()} src ={formData.avatar || default_profilePic} alt='profile' 
          className='rounded-full h-24 w-24 object-cover self-center mt-2 cursor-pointer'
          />

          <p className='text-sm self-center'>
            {fileUploadError? (
            <span className='text-red-700'>Error uploading image</span>
            ): filePerc >0 && filePerc <100 ?(
            <span className='text-slate-700'>
              {`Uploading ${filePerc}% `} 
            </span>
            ):
            filePerc===100 ?(
              <span className='text-green-700'>Image Uploaded</span>
              ): ("")
            }
          </p>
          

          <input type='text' 
          placeholder='Username' 
          defaultValue={currentUser.username}
          className='border p-3 rounded-lg' 
          onChange={handleChange}
          id='username'/>
          <input 
            type='email'
           placeholder='email'
           defaultValue={currentUser.email}
            className='border p-3 rounded-lg'
            onChange={handleChange} 
            id='email'/>
          <input 
            type='password' 
            placeholder='password' 
            className='border p-3 rounded-lg' 
            onChange={handleChange}
            id='password'/>

          <button disabled={loading} className='bg-slate-700 text-white rounded-lg p-3 uppercase size max-w-sm
          hover:opacity-90 disabled:opacity-80 mt-7'>{loading? 'Loading...':'Update'}</button>

      </form>

      <div className='flex justify-between mt-7'>
        <span className='text-red-600 cursor-pointer font-semibold' >Delete Account</span>
        <span className='text-red-600 cursor-pointer font-semibold'>Sign Out</span>
        
      </div>

            <p className='text-red-700 mt-5'>{error?error:""}</p>
            <p className='text-green-700'>{updateSuccess?'User Updated Successfully' : ""}</p>
    </div>

  )
}
