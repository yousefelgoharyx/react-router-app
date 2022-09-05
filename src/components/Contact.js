import React from "react";

const Contact = (props) => {
    return (
        <div className="flex-[3] flex flex-col items-center justify-center">
            <div className="w-[128px] h-[128px] bg-slate-400 rounded-full mb-4">
                <img src={props.image} alt={props.name} />
            </div>
            <h2 className="text-2xl">{props.name}</h2>
            <h3>{props.phone}</h3>
        </div>
    );
};

export default Contact;
