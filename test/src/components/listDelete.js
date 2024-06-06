import { useState } from "react";

function ListDelete() {

    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);
    
    const deleteComment = (id) => {
        const updateComments = comments.filter(comment => comment.id !== id);
        setComments(updateComments);
      };

return ( 
        <div>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.text}
                        <button onClick={()=>deleteComment(comment.id)}>Delete</button>
                    </li>
                    
                ))}
            </ul>
        </div>
     );
}

export default ListDelete;