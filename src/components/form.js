import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom'

export default function Form({ children, ...restProps }) {
    return <div {...restProps} className="border border-gray-300 rounded-md max-w-lg m-auto p-2">{children}</div>;
}

Form.Base = function FormBase({ children, ...restProps }) {
    return <form {...restProps} className="flex flex-col">{children}</form>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
    return <h2 {...restProps} className="text-center mb-4">{children}</h2>;
}

Form.Text = function FormText({ children, ...restProps }) {
    return <p {...restProps} className="text-center text-gray-600">{children}</p>;
}

Form.Link = function FormLink({ children, ...restProps }) {
    return <ReachRouterLink {...restProps} className="text-blue-500">{children}</ReachRouterLink>;
}

Form.Error = function FormError({ children, ...restProps }) {
    return <div {...restProps} className="bg-red-500 text-white text-center">{children}</div>;
}

Form.Input = function FormInput({ children, ...restProps }) {
    return <input {...restProps} className="border border-gray-300 text-black rounded my-2 px-2">{children}</input>;
}

Form.Label = function FormLabel({ children, ...restProps }) {
    return <p {...restProps} className="text-black">{children}</p>;
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <button {...restProps} className="bg-blue-500 text-white w-full rounded h-8 front-bold">{children}</button>
}