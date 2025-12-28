import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="bg-[#f5f5f4] text-stone-900 font-sans p-4 md:p-8 min-h-screen flex items-center justify-center">
            <main className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                {children}
            </main>
        </div>
    );
};

export default Layout;
