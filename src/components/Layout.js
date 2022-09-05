import React from "react";
import ContactsBar from "./ContactsBar";
import ContactsList from "./ContactsList";
const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <div className="h-14 bg-slate-600 flex items-center px-4">Navbar</div>
      <div className="flex flex-1 m-4 gap-4">
        <ContactsBar>
          <ContactsList data={[{ name: "s", id: "s" }]} />
        </ContactsBar>
        <div className="flex-[3] flex flex-col items-center justify-center">
          content here
        </div>
      </div>
    </div>
  );
};

export default Layout;
