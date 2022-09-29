import React from "react";
import Button from "react-bootstrap/Button";
import '../styles.css';

const CreateEntryBtn = () => {
    
    return (
        <Button as="input" type="submit" value="Create Entry" className="custom-btn" />
    );
}

export default CreateEntryBtn;


//Make props and useState. Define onClick