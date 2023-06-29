import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import ConformationModal from '../../Shared/ConformationModal';
import { toast } from 'react-hot-toast';

const ManageDoctors = () => {
    const [deletingDoctor, setDetingDoctor]=useState(null);
    
    const closeModal =()=>{
        setDetingDoctor(null)
    }

    const handleDeleteDoctor =doctor =>{
         fetch(`http://localhost:5000/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
         })
         .then(res=> res.json())
         .then(data=>{
            console.log(data)
            refetch();
            toast.success(`Doctors ${doctor.name} deleted name successful`)
         })
    }

    const { data: doctors, isLoading,refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
            }
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="ml-10">
            <h1 className="text-3xl text-primary">All Doctors {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 mask mask-squircle hover:bg-gray-600">
                                            <img src={doctor.image} />
                                        </div>
                                    </div>
                                </td>
                                <td className="hover:bg-gray-300 rounded">{doctor.name}</td>
                                <td className="hover:bg-gray-300 rounded">{doctor.email}</td>
                                <td className="hover:bg-gray-300 rounded">{doctor.specialty}
                                    <td>
                                        <label onClick={()=> setDetingDoctor(doctor)}  htmlFor="conformation-btn" className="btn btn-sm btn-error">Delete</label>
                                    </td>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <ConformationModal
            title={`Are you sure you want to delete`}
            closeModal={closeModal}
            successAction={handleDeleteDoctor}
            successActionButton='Delete'
            modalData={deletingDoctor}
            message={`If you delete ${deletingDoctor.name}`}
            ></ConformationModal>}
        </div>
    );
};

export default ManageDoctors;