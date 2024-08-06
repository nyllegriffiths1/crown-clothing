import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';

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
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Display Name"
                type="text" 
                value={displayName}
                name='displayName'
                onChange={handleChange}
                required />

                
                <FormInput
                label="Email"
                type="email" 
                required 
                value={email}
                name='email'
                onChange={handleChange}
                />

                
                <FormInput
                label="Password"
                type="password" 
                required
                value={password}
                name='password'
                onChange={handleChange}
                 />

                
                <FormInput
                label="Confirm Password"
                type="password" 
                required
                value={confirmPassword}
                name='confirmPassword'
                onChange={handleChange}
                 />

                <Button type="submit">Sign up</Button>
            </form>
        </div>
    );
}

export default SignUpForm; 