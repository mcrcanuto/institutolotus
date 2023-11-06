import { Link, useNavigate } from "react-router-dom"



import "./../css/geral.css"

function ConfirmaSaida() {

        const navigate = useNavigate();

        function logOut() {
                localStorage.removeItem("token");
                navigate("/");
        }


        return (


                <>

                        <div className="Container">



                                <div className="container-login">

                                        <div className="wrap-login">

                                                <Link to="/perfilpolicial">
                                                       <p id="voltarfeedback">❮ Voltar</p>
                                                </Link>

                                            <br></br>  <br></br>

                                                        <span id="quermesmosair">Quer mesmo sair?</span>
                                                        <span className="login-form-title"></span>

                                                        <div className="container-login-form-btn">
                                                                <button id="botaosim" onClick={() => {logOut()}}>Sim</button>
                                                           
                                                        </div>

                                               
                                        </div>
                                </div>
                        </div>

                </>




        )
}


export default ConfirmaSaida;