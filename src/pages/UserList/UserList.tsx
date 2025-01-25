import { useState } from 'react'
import { Button } from '../../components/Button/Button'

interface User {
    id: number;
    name: string;
    email: string;
}

export const UserList = () => {
    const [users] = useState<User[]>([
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ]);

    return (
        <div className="container">
            <h1>Users</h1>
            <Button variant="primary">Add New User</Button>

            <div className="user-grid">
                {users.map(user => (
                    <div key={user.id} className="user-card">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <Button variant="secondary">Edit</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}