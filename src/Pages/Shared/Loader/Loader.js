import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
            <div className="h-48 rounded-t bg-inherit"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-inherit">
                <div className="w-full h-6 rounded bg-inherit"></div>
                <div className="w-full h-6 rounded bg-inherit"></div>
                <div className="w-3/4 h-6 rounded bg-inherit"></div>
            </div>
        </div>
    );
};

export default Loader;