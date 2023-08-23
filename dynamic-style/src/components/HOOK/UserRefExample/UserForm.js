import React,{useRef} from 'react'

const UserForm = () => {
    const userNameRef=useRef();
    const passwordRef=useRef();
    const handleSubmit=(event)=>{
        event.preventDefault();
        const userName=userNameRef.current.value;
        const password=passwordRef.current.value;
        console.log(userName,password);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <div className='form-field'>
                <label htmlFor='userName'>UserName:</label>
                <input type='text' id='userName' ref={userNameRef}/>
            </div>
            <div className='form-field'>
                <label htmlFor='password'>Password:</label>
                <input type='text' id='password' ref={passwordRef}/>
            </div>
            <button type='submit'>Register</button>
            <br/>
            <hr/>
        </form>
    </div>
  )
}

export default UserForm
