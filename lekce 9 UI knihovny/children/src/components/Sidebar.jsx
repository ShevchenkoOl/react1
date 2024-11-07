import './sidebar.css';
export const Sidebar = ({children}) => {

    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <hr />
            {children}
            <hr />
        </div>
    )
};