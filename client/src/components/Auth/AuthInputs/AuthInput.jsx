import React, { useState } from 'react';

// SCSS files
import './AuthInput.scss';

const AuthInput = ({ htmlFor, type, dropdownItems }) => {
    const [isFocused, setIsFocused] = useState(false);

    const processedHtmlFor = htmlFor.split().map((item) => console.log(item));
    console.log(processedHtmlFor);

    return (
        <>
            {type === 'dropdown' && dropdownItems.length ? (
                <div className='inputDropdownContainer'>
                    <input type='text' name='dropdown' />
                    <div className='dropdownItemsContainer'>
                        {dropdownItems.map((item) => (
                            <span className='dropdownItems'>{item.name}</span>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='inputContainer' onFocus={() => setIsFocused(true)}>
                    <label className={isFocused && 'focused'} htmlFor={htmlFor}>
                        {`${htmlFor[0].toUpperCase()}${htmlFor.slice(1)}`}
                    </label>
                    <input type={!type ? 'text' : type} name={htmlFor} id={htmlFor} />
                </div>
            )}
        </>
    );
};

export default AuthInput;
