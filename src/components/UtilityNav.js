import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles.css';

//Should I use class component or functional component? Depends on if I need to access state I think
const UtilityNav = () => {
    return (
        <div>
            <nav className="d-flex justify-content-center">
                <Button href="#" className="utility-nav">
                    <Link to="/create-entry" className='link'>Create Entry</Link>
                </Button>
                <Button href="#" className="utility-nav">
                    <Link to="/view-all-entries" className='link'>View All Entries</Link>
                </Button>
                
            </nav>
        </div>
    )
};

export default UtilityNav;

//Will I need to change anchor tags to something else in order to add JS functionality later?

// eslint-disable-next-line
{/* <a href="#" className="utility-nav">Create Entry</a>
<a href="#" className="utility-nav">View All Entries</a> 
<Button href="#" className="utility-nav">View All Entries</Button> */}


//To change react bootstrap component defaults, download SASS?
// https://create-react-app.dev/docs/adding-bootstrap/#using-a-custom-theme
//This sounds like for global default changes, not 1-time overrides. Can you do 1-time react bootstrap component style overrides in regular css?