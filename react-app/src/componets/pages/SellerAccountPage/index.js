import { Routes, Route } from 'react-router-dom';

// Componets
import SignIn from './SignIn';
import SignUp from './SignUp';


function SellerAccountPage() {
    return (
        <Routes>
            <Route index element={<h1>SellerAccountPage</h1>} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    )
}

export default SellerAccountPage;