import Comment from "./Comment"
function CommentsList({comments,deleteComment,checkboxHandle,activeList}){


    return(
        <table>
            <thead>
                <tr>
                    <th scope="col">active</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">edit</th>
                    <th scope="col">save</th>
                </tr>  
            </thead>
            <tbody>
                {comments.map((comment,i)=>{
                    return <Comment 
                    name={comment.name} 
                    email={comment.email} 
                    key={comment.id} 
                    deleteComment={deleteComment}
                    id={comment.id}
                    checkboxHandle={checkboxHandle}
                    active={activeList[i].active}
                    />
                })}
            </tbody>                 
        </table>

    )
}

export default CommentsList