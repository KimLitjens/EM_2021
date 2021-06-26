import React from 'react';

export default function Games({ children, ...restProps }) {
    return <container {...restProps} >{children}</container>
}

Games.Title = function Title({ children, ...restProps }) {
    return <h3 {...restProps} className="my-2">{children}</h3>
}
Games.Game = function game({ children, ...restProps }) {
    return <p {...restProps} className="flex text-red-500">{children}</p>;
}
Games.Score = function game({ children, ...restProps }) {
    return <p {...restProps} className="text-blue-500 ml-2">{children}</p>;
}
