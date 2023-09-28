import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/Io"

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
                                                        <IoIosArrowBack className="back" />
                                                </Link>

                                                <form className="login-form">

                                                        <span className="login-form-title2">Quer mesmo sair?</span>
                                                        <span className="login-form-title"></span>

                                                        <div className="container-login-form-btn">
                                                                <button className="login-form-btn3" onClick={() => {logOut()}}>Sim</button>
                                                        </div>

                                                </form>
                                        </div>
                                </div>
                        </div>

                </>




        )
}


export default ConfirmaSaida;