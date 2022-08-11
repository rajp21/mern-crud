import React, { useEffect, useState } from 'react'; 
import Axios from 'axios'; 
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const Home = () => {

    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(false); 
    useEffect(() => {
        async function loadUsers(){
            setLoading(true); 
            const users = await Axios.get('/get-users'); 
            setUsers(users.data); 
            setLoading(false); 
        }

        loadUsers(); 
    }, []); 


    const deleteUser = async (id) => {
        try{
            const data = await Axios.post('/delete-user',{id}); 
            setUsers(data.data); 
            toast.success('Deleted Successfully'); 
        }catch(e) {
            toast.error('Something went wrong'); 
        }
    }

  return (
    <div className="home">
        <h2 className='page-header'>**  User Manamgement System **</h2>        <div className="users">
        <div className="add">
            <Link to='add-user' className='btn btn-danger'>
            <i className="fa-solid fa-calendar-plus"></i> &nbsp;  Add User
            </Link>  
        </div>      

        <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>phone</th>
                <th>Compnay</th>
                </tr>
            </thead>
        <tbody>
            {
                loading?<h2 className='mt-3'>Loading...</h2>: 
                users.map((user) => (
                    <tr key={user._id}>
                        <td>
                            <div className="d-flex align-items-center">
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                alt=""
                                style={{width: "45px", height: "45px"}}
                                className="rounded-circle"
                                />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">{user.firstName}</p>
                                {/* <p className="text-muted mb-0">john.doe@gmail.com</p> */}
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{user.lastName}</p>
                            {/* <p className="text-muted mb-0">{user.email}</p> */}
                        </td>
                        
                        <td>
                            <span className="badge badge-success rounded-pill d-inline" style={{color: "#111"}}>{user.email}</span>
                        </td>
                        <td>{user.phone}</td>
                        <td>{user.company}</td>
                        <td> 
                        <Link to={`/edit-user/${user._id}`} className='btn btn-primary'><i className="fa-solid fa-pen-to-square"></i></Link>
                                    &nbsp; 
                                    <button onClick={e => deleteUser(user._id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                )) 
            }            
        </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home