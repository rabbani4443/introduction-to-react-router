import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    // console.log(post)

    const navigate = useNavigate();

    const handelShoDetails=()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div>
               <div className="bg-slate-600 rounded-lg text-white py-4 h-full  ">
                <h1 className="text-2xl  font-semibold">Post id : {id} </h1>
                <h1 className="text-lg py-3 font-semibold">Title : {title} </h1>
                <p className="text-lg ">Body : {body} </p>

                
                <div className='py-3 '>
                <Link to={`/post/${id}`}  >
                <button className='rounded-lg py-2 px-5 bg-slate-800'> Show Details </button> 
                </Link>
                </div>
                <div className='py-3'>
                <button onClick={handelShoDetails} className='rounded-lg py-2 px-5 bg-slate-800'> Details </button> 
                </div>

            </div>
        </div>
    );
};
Post.propTypes = {
    post:PropTypes.object
};

export default Post;
