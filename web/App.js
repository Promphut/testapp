import React from 'react';
import Request from 'superagent'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg:'',
            onload:false,
            email:'',
            password:''
        };
      }
    toDo(e){
        e.preventDefault()
        this.setState({onlond:true})
        Request.post('http://localhost:3000/api/login')
        .send({
            email : "example@appman.co.th",
            password : "password"
          })
		.set('Accept', 'application/json')
		.then(res => {
            alert('Login Successed')
			this.setState({msg:'',onlond:false})
        })
        .catch(err =>{
            this.setState({msg:'',onlond:false})
        })
    }

    onChangeEmail(e){
        this.setState({email:e.target.value})
    }
    onChangePassword(e){
        this.setState({password:e.target.value})
    }

    render() {
        // start your code here
        var {msg,email,password,onload} = this.state
        return (
            <div className='container'>
                <form onSubmit={this.toDo.bind(this)}>
                    <img src='./logo.svg' className={'logo '+onload&&'logo-spin'}/>
                    <div className='input-box'>
                        <label>E-mail address</label> 
                        <input type='email' value={email} onChange={this.onChangeEmail.bind(this)}/>
                    </div>
                    <div className='input-box'>
                        <label>Password</label> 
                        <input type='password' value={password} onChange={this.onChangePassword.bind(this)}/>
                    </div>
                    <p style={{color:"red"}}>{msg}</p>
                    <button type='submit' className='btn-submit'>SIGN IN</button>
                    <div className='row'>
                        <a href='#'>Forget password ?</a>
                        <a href='#'>Create a new account</a>
                    </div>
                </form>                
            </div>
        )
    }
}

export default App;
