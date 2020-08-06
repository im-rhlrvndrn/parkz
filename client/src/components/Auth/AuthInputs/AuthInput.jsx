import React, { useState } from 'react';

// SCSS files
import './AuthInput.scss';

const AuthInput = ({ htmlFor, type, dropdownItems, required }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(
        `${htmlFor[0].toUpperCase()}${htmlFor.slice(1)}`
    );

    return (
        <>
            {type === 'dropdown' && dropdownItems.length ? (
                <div className='inputContainer inputDropdownContainer'>
                    <input
                        type='text'
                        name={htmlFor}
                        id={htmlFor}
                        value={dropdownValue}
                        onClick={() => setDropdownActive(!dropdownActive)}
                        onKeyPress={(e) => e.key === 'Enter' && setDropdownActive(!dropdownActive)}
                        required={required ? true : false}
                        placeholder={htmlFor}
                    />
                    {dropdownActive && (
                        <div className='dropdownItemsContainer'>
                            {dropdownItems.map((item) => (
                                <span
                                    onClick={() => {
                                        setDropdownValue(item);
                                        setDropdownActive(false);
                                    }}
                                    className='dropdownItems'
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div className='inputContainer' onFocus={() => setIsFocused(true)}>
                    <label className={isFocused && 'focused'} htmlFor={htmlFor}>
                        {`${htmlFor[0].toUpperCase()}${htmlFor.slice(1)}`}{' '}
                        {!required && '(Optional)'}
                    </label>
                    <input
                        type={!type ? 'text' : type}
                        name={htmlFor}
                        id={htmlFor}
                        required={required ? true : false}
                        onBlur={(e) => (e.target.value === '' ? setIsFocused(false) : null)}
                    />
                </div>
            )}
        </>
    );
};

export default AuthInput;
