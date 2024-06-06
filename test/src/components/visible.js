import { useState } from "react";

function Show(props) {
    const [block, setBlock] = useState(true)
    const blockShow = () => {
        setBlock(!block)
    }
  return (
    <div>
      <button onClick={blockShow}>Show or hide</button>
          <p style={{ display: block ? 'block' : 'none' }}>{ props.data}</p>
    </div>
  );
}

export default Show;
