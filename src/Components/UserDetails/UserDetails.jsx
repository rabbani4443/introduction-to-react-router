

import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const {id,name,email,phone,website,address} = user;

    return (
        <div>
            <div key={id} className="bg-slate-600 rounded-lg text-white py-4 w-2/4 mx-auto ">
            <h1 className="text-3xl font-bold pb-6"> User Details Information : {id} </h1> 
                <h1 className="text-xl  font-semibold">Name: {name}</h1>
                <h1 className="text-lg py-3 font-medium">Phone No: {phone}</h1>
                <h1 className="">Email: {email}</h1>
                <h1 className="py-3">Website: {website}</h1>
                <h1 className="font-medium text-xl">Address:</h1>
                <div className="flex gap-3 justify-center">
                <p className="" >  Street: {address.street} </p>
                <p className="" >    Suite: {address.suite} </p>
                <p className="" >    City: {address.city} </p>
                <p className="" >    Zipcode: {address.zipcode} </p>
                </div>
            </div>
        </div>
    );
};


export default UserDetails;