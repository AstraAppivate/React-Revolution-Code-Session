import React, { useState } from "react";
import MuiExample from "../components/MuiExample";

const SecondPage = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            {/** This is an example of modular components using Props */}
            <MuiExample text={{ currentCount: count }} />
            {/** This is useState being used for State Management */}
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    )
}

export default SecondPage;