import React, { useEffect, useState } from 'react';

const UserInfoPage = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('http://localhost:4000/userinfo')
            .then((response) => response.json())
            .then((data) => setUserInfo(data))
            .catch((error) => console.error('Error fetching user info:', error));
    }, []);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-info-page max-padd-container">
            <h2 className="text-2xl font-bold mb-6">User Information</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Profile Details</h3>
                    <p><strong>Name:</strong> {userInfo.name}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Phone:</strong> {userInfo.phone}</p>
                    <p><strong>Address:</strong> {userInfo.address}</p>
                    <p><strong>Registration Date:</strong> {new Date(userInfo.registrationDate).toLocaleDateString()}</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Other Information</h3>
                    <p><strong>Role:</strong> {userInfo.role}</p>
                    <p><strong>Status:</strong> {userInfo.status}</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfoPage;
