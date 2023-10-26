import Link from 'next/link';
import React from 'react'

const Dashboard:React.FC = () => {
    return (
        <div>
            <p>Hello there, this is the dashboard.</p>
            <Link href={'/'}>Go back</Link>
        </div>
    )
}

export default Dashboard;