import { Link } from "react-router-dom"

export const Error = () => {
    return (
        <div>
            <h1 style={{color:'red'}}>Error 404</h1>
            <p>Page not found</p>
            <Link to="/">Go back to Home</Link>
        </div>
    )
}