import React from "react";

const ContactsBar = ({ children }) => {
    return (
        <div className="bg-slate-800 flex-1 rounded-md overflow-hidden flex flex-col">
            <h1 className="p-4 text-3xl">Contact</h1>
            {children}
        </div>
    );
};

export default ContactsBar;
