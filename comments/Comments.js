import { useCallback, useEffect, useRef, useState } from "react"
import CommentsList from "./CommentsList"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "./context/ThemeProvider"

function Comments(){
    const [comments,setComments] = useState({
        comments : [],
        filtered : [],
        active : []
    })
    const [value,setValue] = useState("")
    const [loading,setLoading] = useState(true)
    const location = useLocation()
    const {theme,setTheme} = useTheme()
    
    useEffect(()=>{
        setLoading(true)
        try{
            fetch('https://jsonplaceholder.typicode.com/comments?_start=1&_limit=10')
                .then(response => response.json())
                .then(json => {
                    setComments({
                        comments : json,
                        filtered : json,
                        active : json.map(val=>{
                            return {id : val.id,active : false}
                        })
                    })
                    setLoading(false)
                })
        }catch(er){
            setLoading(false)
        }
    },[])


    useEffect(()=>{
        if(location.state !== null && !loading){
            switch (location.state.from){
                case "create":
                    setComments(prev=>{
                        return{
                            comments : [location.state,...prev.comments],
                            filtered : [location.state,...prev.filtered],
                            active : [{id : location.state.id,active : false},...prev.active]
                        }
                    })
                    break
                case "edit" : 
                    setComments(prev=>{
                        return{
                            comments : prev.comments.map((val)=>{
                                            if(val.id == location.state.id){
                                                val.name = location.state.name
                                                val.email = location.state.email
                                            }
                                            return val
                                        }),
                            filtered : prev.filtered.map((val)=>{
                                            if(val.id == location.state.id){
                                                val.name = location.state.name
                                                val.email = location.state.email
                                            }
                                            return val
                                        }),
                            active : prev.active
                        }
                    })
                    break
            }
        }
    },[location,loading])



    const deleteComment = (id)=>{
        setComments(prev=>{
            return {
                comments : prev.comments.filter(val=>val.id !== id),
                filtered : prev.filtered.filter(val=>val.id !== id),
                active : prev.active.filter(val=>val.id !== id),
            }
        })
    }
    const checkboxHandle = (id)=>{
        setComments(prev=>{
            return {
                ...prev,
                active : prev.active.map(val=>{
                    if(id === val.id){
                        val.active = !val.active
                    }
                    return val
                })
            }
        })
    }
    const valueChangeHandle = (e)=>{
        setComments(prev=>{
            return{
                ...prev,
                filtered : prev.comments.filter((val)=>new RegExp(e.target.value).test(val.name))
            }
        })
        setValue(e.target.value)
    }
    if(loading){
        return <p>loading...</p>
    }
    return(
        <div>
            <button><Link to={"/comments/create"}>Create</Link></button>
            <input value={value} onChange={valueChangeHandle}/>
            <button onClick={()=>setTheme(theme=>theme==="light" ? "dark": "light" )}>{theme}</button>
            <CommentsList comments={comments.filtered} deleteComment={deleteComment} activeList={comments.active} checkboxHandle={checkboxHandle}/>
        </div>
    )
}
export default Comments