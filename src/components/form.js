


import React from 'react';

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

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <p {...restProps}>{children}</p>;
}

Form.Link = function FormLink({ children, ...restProps }) {
    return <a {...restProps}>{children}</a>;
}

Form.Error = function FormError({ children, ...restProps }) {
    return <div {...restProps}>{children}</div>;
}

Form.Input = function FormInput({ children, ...restProps }) {
    return <input {...restProps} className="border border-gray-300 rounded my-2">{children}</input>;
}

Form.Label = function FormInput({ children, ...restProps }) {
    return <p {...restProps} className="text-black">{children}</p>;
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
    return <button {...restProps} className="bg-blue-500 text-white w-full rounded h-8 front-bold">{children}</button>
}