import { useState } from "react";
import './CollapseBox.css';

export const CollapseBox = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleBox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse-box">
            <div className="collapse-box-header" onClick={toggleBox}>
                <h2>{title}</h2>
                <span className="collapse-box-icon">
                    {isOpen ? '▼' : '›'}
                </span>
            </div>
            {isOpen && (
                <div className="collapse-box-content">
                    {children}
                </div>
            )}
        </div>
    );
};
