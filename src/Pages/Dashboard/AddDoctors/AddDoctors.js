import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddDoctors = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError] = useState('');
    const navigate = useNavigate();
  
    const imageHostKey = process.env.REACT_APP_imgbb_key;
  
    const { data: specialties, isLoading } = useQuery({
      queryKey: ['specialy'],
      queryFn: async () => {
        const res = await fetch('http://localhost:5000/appointmentSpecialty');
        const data = await res.json();
        return data;
      }
    });
  
    const  handleSAddDoctor = data => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      
      fetch(url, {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(ImgData => {
        if (ImgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: ImgData.data.url,
          };
  
          // SAVE DOCTORS TO THE DATABASE
          fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
          .then(res => res.json())
          .then(result => {
            console.log(result);
            toast.success(`${data.name} is added doctor`);
             navigate('/dashboard/managedoctor')
          });
        }
      });
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) || "Invalid email address";
    };


    return (
        <div className='shadow w-96 p-7 ml-10'>
            <form onSubmit={handleSubmit(handleSAddDoctor)}>
                <div className="form-control w-full max-w-xs pb-4">
                    <label className="label">
                    <span className="label-text text-xl">Name</span>
                    </label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Type name here"
                        className={`input input-bordered w-full max-w-xs ${errors.name ? "input-error" : ""
                            }`}
                    />
                    {errors.name && (
                        <span className="text-red-500">Name is required</span>
                    )}
                </div>     
                

                <div className="form-control w-full max-w-xs pb-4">
                    <label className="label">
                        <span className="label-text text-xl">Email</span>
                    </label>
                    <input
                        type="email"
                        {...register("email", { required: true, validate: validateEmail })}
                        placeholder="Type here"
                        className={`input input-bordered w-full max-w-xs ${errors.email ? "input-error" : ""
                            }`}
                    />
                    {errors.email && (
                        <span className="text-red-500">{errors.email.message}</span>
                    )}
                </div>
                <div className="form-control w-full max-w-xs pb-4">
                    <label className="label">
                        <span className="label-text text-xl">Specialty</span>
                    </label>
                    <select className="select input-bordered w-full max-w-xs">

                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}

                            </option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs pb-4">
                    <label className="label">
                    </label>
                    <input
                        type="file"
                        {...register("image", { required: true })}
                        placeholder="upload img here"
                        className={`input input-bordered w-full max-w-xs ${errors.img ? "input-error" : ""
                            }`}
                    />
                    {errors.img && (
                        <span className="text-red-500">Name is required</span>
                    )}
                </div>  

                <input
                    type="submit"
                    value='Add Doctors'
                    className="input input-bordered w-full btn btn-accent"
                />
                <div>
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                </div>
            </form>
        </div>
    );
};

export default AddDoctors;