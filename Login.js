function Login() {

    const submitHandler = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email === '' || password === ''){
            console.log("flaco las cosas no pueden estar vacias")
            return;
        }


        if(email !== '' && !regexEmail.test(email)){
            console.log("la direccion de correo no es valida, pone otra pls ")
            return;
        }        
        
        console.log("Ok, estamos listos para mandar la info")
    }   
    return (
        <>
            <h2>Ey! queres que te robe todos tus datos con este login verdad?</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Ingrese su Mail</span>
                    <br/>
                    <input type="email" name="email" />
                </label>

                <br/>

                <label>
                    <span>Ingrese su Contraseña</span>
                    <br/>
                    <input type="password" name="password" />
                </label>

                <br/><br/>

                <button>Iniciar sesion</button>

            </form>
        </>
    )
}

export default Login;
