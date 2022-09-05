import React from "react";

const Input = (props) => {
    return (
        <input
            className="bg-slate-700 hover:border-slate-300 px-4 h-10 rounded text-sm w-full outline-none placeholder-slate-200"
            type="text"
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
        />
    );
};

export default Input;
