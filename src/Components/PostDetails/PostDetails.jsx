import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    const {id, title, body} = post;
     const navigate = useNavigate()

     const handelBack = ()=>{
        navigate(-1)
     }

    return (
        <div>
            <div key={id} className="bg-slate-600 rounded-lg text-white py-4 w-2/4 mx-auto ">
            <h1 className="text-3xl font-bold pb-6"> Post ID : {id} </h1> 
                <h1 className="text-xl font-semibold">{title}</h1>
                <h1 className=" py-3"> {body}</h1>
                <button onClick={handelBack} className="btn"> Back </button>
                </div>
            </div>
    );
};

export default PostDetails;