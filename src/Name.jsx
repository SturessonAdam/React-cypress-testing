import { useState } from "react";

function Name() {
    const [name, setName] = useState("");

    return (
        <div>
            <h1>{name}</h1>
            
            <input
            type="text"
            placeholder="skriv ditt namn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default Name;