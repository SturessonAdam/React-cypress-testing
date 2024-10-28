import { useState } from "react";

function Name() {
    const [name, setName] = useState("");
    const [inputValue, setInputvalue] = useState("");

    return (
        <div>
            <h1>{name}</h1>
            
            <input
                type="text"
                placeholder="skriv ditt namn"
                value={inputValue}
                onChange={(e) => setInputvalue(e.target.value)}
            />
            <button
                type="button"
                onClick={(e) => {
                    setName(inputValue);
                    setInputvalue("");
                }}
            >
                {name ? "Logga ut" : "Spara namn"}
            </button>
        </div>
    )
}

export default Name;