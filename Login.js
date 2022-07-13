function Login() {

    const Formulario = e =>{
        e.preventDefault();
        const email = e.target.email;
        const password = e.target.password;
        console.log(email, password);

    }
    return (
        <>
            <h2>Ey! queres que te robe todos tus datos con este login verdad?</h2>
            <form onSubmit={Formulario}>
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
