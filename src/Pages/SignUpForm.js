import React, { useState } from 'react';
import '../Styles/SignUpForm.css'

const countries = ['Palestine', 'Jordan', 'Egypt', 'UAE', 'Tunisia'];

export default function SignUpForm() {
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState();
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({});

    const clearForm = () => {
        setUsername('');
        setFullName('');
        setMobileNumber('');
        setAge('');
        setEmail('');
        setCountry();
        setPassword('');
        setPasswordConfirmation('');
        setErrors({});
    };

    //Validation can be applied using libraries such as Yup , but i tried to build it JS pure.
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // if (username.length < 3 || !/^[a-zA-Z0-9-_@]+$/.test(username)) {
        //     newErrors.username = 'Username must be at least 3 characters and Accept only letters, numbers, - , _ , or @.';
        // }
        if (username.length < 3 || !/^[a-zA-Z0-9-_@]+$/.test(username)) {
            newErrors.username = ['must be at least 3 characters', 'Only letters, numbers, - , _ , or @'];
        }
        if (fullName.length < 3 || fullName.length > 15) {
            newErrors.fullName = '-Must be between 3 and 15 characters';
        }
        if (!mobileNumber.startsWith('05') || mobileNumber.length !== 10) {
            newErrors.mobileNumber = '-Must be 10 digits long';
        }
        if (age && (age < 18 || age > 100)) {
            newErrors.age = '-Must be between 18 and 100';
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = '-Please enter a valid email address';
        }
        if (!password || password.length < 6 || password.length > 24 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password) || !/[@#$%^&+=]/.test(password)) {
            newErrors.password = ['Password must be 6-24 characters' , 'Contain letters, numbers','At least one special character'];
        }
        if (password !== passwordConfirmation) {
            newErrors.passwordConfirmation = 'Password confirmation must match the password.';
        }

        if (Object.keys(newErrors).length === 0) {
            // Form submission success
            alert('Form submitted successfully');
            clearForm();
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className='SignUpForm'>
            <span className='formTitle'>Sign up</span>
            <form onSubmit={handleSubmit} className='formStyle'>
                <div className='rowAlign'>
                    <div className='field'>
                        <label>Name</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='inputField' />
                        {errors.username &&
                            errors.username.map((x) =>
                                <div>
                                    <span className="error">-</span>
                                    <span className="error">{x}</span>
                                </div>
                            )
                        }
                    </div>
                    <div className='field'>
                        <label>Full Name</label>
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className='inputField' />
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                    </div>
                </div>
                <div className='rowAlign'>
                    <div className='field'>
                        <label>Age</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className='inputField' />
                        {errors.age && <span className="error">{errors.age}</span>}
                    </div>
                    <div className='field'>
                        <label>Country</label>
                        <select value={country} onChange={(e) => setCountry(e.target.value)} className='countryField'>

                            <option disabled value="" selected>
                                Select a Country
                            </option>
                            {countries.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='rowAlign'>
                    <div className='field'>
                        <label>Mobile Number</label>
                        <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className='inputField' placeholder='05-xxxxxxxx' />
                        {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='inputField' />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                </div>
                <div className='rowAlign'>
                    <div className='field'>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='inputField' />
                        {/* {errors.password && <span className="error">{errors.password}</span>} */}
                        {errors.password &&
                            errors.password.map((x) =>
                                <div>
                                    <span className="error">-</span>
                                    <span className="error">{x}</span>
                                </div>
                            )
                        }
                    </div>
                    <div className='field'>
                        <label>Confirm Password</label>
                        <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className='inputField' />
                        {errors.passwordConfirmation && <span className="error">{errors.passwordConfirmation}</span>}
                    </div>
                </div>
                <div className='buttons'>
                    <button type="button" className='clearBtn' onClick={clearForm}>Clear</button>
                    <button type="submit" className='saveBtn'>Save</button>
                </div>
            </form>
        </div>
    );
};

