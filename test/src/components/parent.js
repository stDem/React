import { useState } from "react";
import Button from '@mui/material/Button';

function ParentCount() {
    const [count, setCount] = useState(0)

    const upCount = () => {
        setCount(count+1)
    }
    const downCount = () => {
        setCount(count-1)
    }
    return ( 
        <div>
            <h3>Parent</h3>
            <ChildCount count={count} />
            <Button onClick={upCount} variant="contained">+1</Button>
            <Button onClick={downCount} variant="contained">-1</Button>

        </div>
    );
}

function ChildCount({count}) {
    return ( 
        <div>
            <p>Count inside</p>
            <p>Count value: {count}</p>
        </div>
     );
}

export default ParentCount;