import React from 'react';

export default function TopScorers({ children, ...restProps }) {
    return <container {...restProps} >{children}</container>
}

TopScorers.Title = function Title({ children, ...restProps }) {
    return <h3 {...restProps} className="my-2">{children}</h3>
}

TopScorers.Player = function Title({ children, ...restProps }) {
    return <p {...restProps} className="flex text-red-500">{children}</p>
}

TopScorers.Goals = function Title({ children, ...restProps }) {
    return <p {...restProps} className="text-blue-600 ml-2">{children}</p>
}