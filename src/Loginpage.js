import React,{useState} from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';

const Login=()=>{ 
	const [email,setEmail]=useState(""); 
	const [passw,setPassw]=useState(""); 
	const[dataInput, setDataInput]=useState(""); 

const navigate = useNavigate();
const submitThis=(e)=>{
    e.preventDefault();
    navigate('/home');
}

	return(
        
	<div>
		<form action="home" onSubmit={submitThis} class="container"> 
			<div> 
				<label htmlFor="email" class="labels">Set Your NickName</label>
				<input type="text" name="email" id="email" class="labelsbox" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
			<button class="sub" type="submit">MoveOn</button>
		</form>
	</div>
)} 
export default Login;