import React from 'react';

export default function Header({ children, ...restProps }) {
    return <div {...restProps} >{children}</div>
}

Header.Title = function Title({ children, ...restProps }) {
    return <h1 {...restProps} className="flex justify-center text-red-500 my-6">{children}</h1>
}