import { useState } from "react";

function UsersAndCount({ onInputChange }) {
    const [user, setUser] = useState("")

    const handleChange = (event) => {
        setUser(event.target.value)
        onInputChange(event.target.value)
    }
    return (
        <div>
            <label htmlFor="user">User: </label>
                <input name="user" 
                    type="textField" 
                    placeholder="User"
                    value={user}
                    onChange={handleChange}
                />
        </div>
    )
}

export default UsersAndCount;