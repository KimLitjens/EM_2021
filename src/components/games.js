import React from 'react';

export default function Games({ children, ...restProps }) {
    return <container {...restProps}>{children}</container>
}

Games.Title = function Title({ children, ...restProps }) {
    return <h3 {...restProps}>{children}</h3>
}
Games.Game = function game({ children, ...restProps }) {
    return <p {...restProps} className="text-red-500">{children}</p>;
}

