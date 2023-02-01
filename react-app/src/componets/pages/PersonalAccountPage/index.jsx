import { Routes, Route } from 'react-router-dom';

// Componets
import SignIn from './SignIn';
import SignUp from './SignUp';
import Main from './Main';


function PersonalAccountPage() {
    return (
        <Routes>
            <Route path="/*" element={ <Main />  }/>
            <Route path="signin" element={ <SignIn /> } />
            <Route path="signup" element={ <SignUp /> } />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default PersonalAccountPage;