
import PropTypes from 'prop-types';

const User = ({user}) => {
    const{id, name, email,phone}= user;
    // console.log(user)
    return (
        <div>
            <div key={id} className="bg-slate-600 rounded-lg text-white py-4">
                <h1 className="text-xl  font-semibold">Name: {name}</h1>
                <h1 className="text-lg py-3 font-medium">Phone No: {phone}</h1>
                <h1 className="">Email: {email}</h1>
            </div>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object
};


export default User;