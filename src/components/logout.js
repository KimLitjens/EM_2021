import React from 'react';

export default function Logout({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>
}

Logout.Button = function Button({ children, ...restProps }) {
    return <button {...restProps} className="m-4 p-2 rounded-lg bg-blue-500 text-white ">{children}</button>
}

Logout.Error = function Error({ children, ...restProps }) {
    return <div {...restProps} className="bg-red-500 text-white text-center">{children}</div>;
}
