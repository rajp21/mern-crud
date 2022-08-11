import React, {useState, useEffect} from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Axios from 'axios'; 


export const Adduser = () => {

    const navigate = useNavigate(); 

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [company, setCompany] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState(""); 

    // use Effect
    
        
    // submit user
    const submitUser  = async (e) => {
        e.preventDefault(); 
        if(!firstName || !lastName || !company || !email || !phone ){
            toast.error('Please Fill All Required Fields');
            return ;
        }

        try{
            const post = await Axios.post('/add-user', {firstName, lastName, company, email, phone}); 
            toast.success('User Successfully Saved'); 
            setFirstName(""); 
            setLastName(""); 
            setCompany(""); 
            setPhone(""); 
            setEmail(""); 
            navigate('/');           
        
        }catch(e){
            console.log(e); 
            toast.error('Something went Wrong'); 
        }

    }

  return (
    <div className='adduser'>
        <h2 className='page-header'>**  Add User  **</h2>    


        <div className='adduser-form'>
            
            <Link to='/' className='btn btn-danger mb-3'>Back</Link>
            <form className='add-user-form'>

            <div className="row mb-4">
                <div className="col">
                <div className="form-outline">
                    <input 
                        type="text" 
                        id="form6Example1"
                        className="form-control"
                        value={firstName}
                        onChange= {e => setFirstName(e.target.value)}                  
                    />
                    <label className="form-label" htmlFor="form6Example1">First name <span className='required-filed'>*</span></label>
                </div>
                </div>
                <div className="col">
                <div className="form-outline">
                    <input type="text" id="form6Example2" className="form-control" 
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form6Example2">Last name <span className='required-filed'>*</span></label>
                </div>
                </div>
            </div>

            
            <div className="form-outline mb-4">
                <input type="text" id="form6Example3" className="form-control" 
                    value={company}
                    onChange ={ e => setCompany(e.target.value)}
                />
                <label className="form-label" htmlFor="form6Example3">Company name <span className='required-filed'>*</span></label>
            </div>

            
                    
            <div className="form-outline mb-4">
                <input type="email" id="form6Example5" className="form-control"
                value={email}
                onChange ={ e => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form6Example5">Email <span className='required-filed'>*</span></label>
            </div>

            
            <div className="form-outline mb-4">
                <input type="number" id="form6Example6" className="form-control" 
                value={phone}
                onChange ={ e => setPhone(e.target.value)}
                />
                <label className="form-label" htmlFor="form6Example6">Phone <span className='required-filed'>*</span></label>
            </div>

  
            <div className='text-center'>
                <button onClick={submitUser} type="submit" className="btn btn-dark btn-block mb-4">Add User</button>
            </div>
          </form>
            
        </div>
    </div>
  )
}
