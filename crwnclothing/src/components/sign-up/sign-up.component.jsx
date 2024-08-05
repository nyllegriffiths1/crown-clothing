import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user }= await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();


        } catch (error) {
            console.error("user creation encountered error", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display name</label>
                <input 
                type="text" 
                value={displayName}
                name='displayName'
                onChange={handleChange}
                required />

                <label>Email</label>
                <input 
                type="email" 
                required 
                value={email}
                name='email'
                onChange={handleChange}
                />

                <label>Password</label>
                <input 
                type="password" 
                required
                value={password}
                name='password'
                onChange={handleChange}
                 />

                <label>Confirm Password</label>
                <input 
                type="password" 
                required
                value={confirmPassword}
                name='confirmPassword'
                onChange={handleChange}
                 />

                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}

export default SignUpForm; 