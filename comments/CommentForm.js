import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function CommentForm(){
    const {id} = useParams()
    const [comment,setComment] = useState({})
    const navigate = useNavigate()
    const [form,setForm] = useState({name : "",email : ""})
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        if(id){
            setLoading(true)
            try{
                fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
                .then(response => response.json())
                .then(json => {
                    setComment(json)
                    setForm({name : json.name,email : json.email})
                    setLoading(false)
                })
            }catch(er){
                setLoading(false)
            }
        }
    },[id])



    const saveCommentHandle = ()=>{
        navigate("/comments",{
            state : {
                id : id===undefined ? Math.random() : id,
                name : form.name,
                email : form.email,
                from : id===undefined ? "create" : "edit",
            }
        })
    }
    if(loading){
        return <p>loading...</p>
    }
    return(
        <div>
            <h1>{comment.id}</h1>
            <p>{comment.body}</p>
            <label>name <input placeholder="name" value={form.name} onChange={(e)=>setForm(prev=>{
                return{...prev,name : e.target.value}})}/></label>
            <br/>
            <label>email <input placeholder="email" value={form.email} onChange={(e)=>setForm(prev=>{
                return{...prev,email : e.target.value}})}/>
            <br/></label>
            <button onClick={saveCommentHandle}>Save</button>
        </div>
    )
}

export default CommentForm