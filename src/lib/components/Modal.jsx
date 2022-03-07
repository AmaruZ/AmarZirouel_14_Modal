import React from 'react'
import { useEventListener } from '../hooks'
import './Modal.css'

function Modal({ isOpen, setOpen, children }) {
    const ESCAPE_KEYS = ['27', 'Escape']
    const handler = ({ key }) => {
        if (ESCAPE_KEYS.includes(String(key))) {
            setOpen(false)
        }
    }
    useEventListener('keydown', handler)
    return isOpen ? (
        <div className="modal-container">
            <div className="modal-content">
                {children}
                <button
                    className="modal-button"
                    onClick={() => {
                        setOpen(false)
                    }}
                >
                    X
                </button>
            </div>
        </div>
    ) : null
}

export default Modal
