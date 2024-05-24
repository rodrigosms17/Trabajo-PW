import { useUser } from '../../context/User.jsx'

const Header = () => {

    const { user } = useUser()

    console.log(useUser())

    return (<header>

                <h1>Pagina</h1>
                { user.usuario 
                    ?? 
                    <a href="/login">Login</a> }

            </header>)
}

export default Header