import React, { useState } from 'react'
import { Modal } from './lib'

function TestModal() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <button
                onClick={() => {
                    setOpen(true)
                }}
            >
                Open modal
            </button>
            <Modal isOpen={isOpen} setOpen={setOpen}>
                Content Modal
            </Modal>
        </div>
    )
}

export default TestModal
