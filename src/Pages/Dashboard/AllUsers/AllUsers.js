import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://full-doctors-portal-server-code.vercel.app/users');
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    console.log('jdfn',id)
    fetch(`https://full-doctors-portal-server-code.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data ,'kjk')
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful');
          refetch();
        }
      });
  };

  return (
    <div className="ml-10">
      <h1 className="text-3xl text-primary">All Users</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id} className="bg-base-200">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  
                  { user?.role !== 'admin' && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                   )}
                </td>
                <td>
                  <button className="btn btn-xs btn-primary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
