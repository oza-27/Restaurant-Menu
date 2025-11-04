import { useEffect } from 'react'

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration)
        return () => clearTimeout(timer)
    }, [onClose, duration])

    return (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 animate-slide-in ${type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white`}>
            <div className="flex items-center justify-between">
                <span>{message}</span>
                <button onClick={onClose} className="ml-4 text-white hover:text-gray-200">×</button>
            </div>
        </div>
    )
}

export default Toast