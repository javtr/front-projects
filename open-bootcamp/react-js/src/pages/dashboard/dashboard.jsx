import React from 'react';
import Button from '@mui/material/Button';
import Footer from '../../components/pure/footer';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    function logout() {
        navigate('/login')
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Contained</Button>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;
