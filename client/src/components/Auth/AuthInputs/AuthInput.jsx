import React, { useState } from 'react';

const AuthInput = ({ htmlFor, type }) => {
    const [isFocused, setIsFocused] = useState(false);

    const processedHtmlFor = htmlFor.split().map((item) => console.log(item));
    console.log(processedHtmlFor);

    return (
        <div className='inputContainer' onFocus={() => setIsFocused(true)}>
            <label className={isFocused && 'focused'} htmlFor={htmlFor}>
                {`${htmlFor[0].toUpperCase()}${htmlFor.slice(1)}`}
            </label>
            <input type={!type ? 'text' : type} name={htmlFor} />
        </div>
    );
};

export default AuthInput;
