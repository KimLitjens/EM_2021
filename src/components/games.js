import React from 'react';

export default function Games({ children, ...restProps }) {
    return <div {...restProps} >{children}</div>
}

Games.Title = function Title({ children, ...restProps }) {
    return <h3 {...restProps} className="my-2">{children}</h3>
}
Games.Game = function game({ children, ...restProps }) {
    return <p {...restProps} className="flex text-red-500">{children}</p>;
}
Games.Score = function game({ children, ...restProps }) {
    return <p {...restProps} className="text-blue-600 ml-2">{children}</p>;
}

Games.Time = function game({ children, ...restProps }) {
    return <p {...restProps} className="text-blue-600 mx-2">{children}</p>;
}