import { useState } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "./context/ThemeProvider"
function Comment({name,email,id,deleteComment,checkboxHandle,active}){
    const {theme} = useTheme()
    const deleteCommentHandle = ()=>deleteComment(id)
    const checkboxHandleInner = ()=>checkboxHandle(id)
    return(
        <tr style={{background : theme=="light" ? "" : "gray"}}>
            <th><input type="checkbox" checked={active} onChange={checkboxHandleInner}/></th>
            <th><p>{name}</p></th>
            <th><p>{email}</p></th>
            <th><Link to={`/comments/${id}`}><button disabled={!active}>Edit</button></Link></th>
            <th><button disabled={!active} onClick={deleteCommentHandle}>Delete</button></th>
        </tr>
    )
}
export default Comment