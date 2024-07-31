import React from 'react'
import Buttons from './components/Buttons'

const NotFound = () => {
    return (
        <div>
            <div className='w-[80%] flex flex-col items-center justify-center mx-auto'>
                <img src='/upload.png' />
                <div>
                    <h2 className="text-4xl font-bold text-indigo-600">Page not found</h2>
                    <div className='flex items-center justify-center text-center mt-8'>
                        <Buttons sr={'/'} text="Go Back" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound