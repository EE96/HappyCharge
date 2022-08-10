import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from "react-router-dom";


import { auth } from '../../firebaseAuth';
import Footer from './Footer'
import NavBar from './Navbar'


export default function ({ children }: { children: any }) {
    const [user, loading, error] = useAuthState(auth);
    // check here if user is signed in
    const navigate = useNavigate()



    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
    }, [user, loading]);

    return (
        loading ?
            <p>checking credentials...</p>
            :
            <>
                <NavBar />
                {children}
                <Footer />
            </>
    )
}