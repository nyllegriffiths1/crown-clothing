import { 
    createUserDocumentFromAuth, 
    signInWithGooglePopup ,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';


const Authentication = () => {
    return (
        <div>
            <h1>Sign in page</h1>
            <SignInForm />
            <SignUpForm />
        </div>
        
    );
};

export default Authentication;