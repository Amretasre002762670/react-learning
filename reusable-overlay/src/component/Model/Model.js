import React, { useEffect, useRef } from 'react';
import './Model.css';

const Model = ({ isOpen, onClose, children}) => {

    const modelRef = useRef(null);

    useEffect(() => {
        // escape event is applied to window so that it closes irrespective of the current focused element
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        }

        if(isOpen) {
            window.addEventListener("keydown", handleEscape);
            if (modelRef.current) {
                modelRef.current.focus();
            }
        }

        return () => {
            window.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null; // this is a replacement for display: none; with this the component is completely removed from dom
    
    return (
        <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="model-title"
        className="model-overlay"
        onClick={onClose}>
            <div
            ref={modelRef}
            tabIndex={-1}
            className="model-content"
            onClick={(e) => e.stopPropagation()}>
                <h2 id="model-title">Model Title</h2>
                {children}
            </div>
        </div>
    );
}

export default Model;