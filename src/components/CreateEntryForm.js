import React from "react";
import CreateEntryBtn from "./CreateEntryBtn";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import '../styles.css';


const CreateEntryForm = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <Form>
                    <Row>
                        <Col>
                            <h2>What they say</h2>
                            <Form.Control type="text" placeholder="Word or phrase" />
                        </Col>
                        <Col>
                            <h2>What they may mean</h2>
                            <Form.Control as="textarea" placeholder="Word, phrase or example" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CreateEntryBtn />
                        </Col>

                    </Row>

                </Form>
            </div>
        </div>



    );
}

export default CreateEntryForm;

//Is this an HOC? Do I need 1, 2, or 3 button components? I need Login, Sign Up and Create Entry buttons

//<Button as="input" type="submit" value="Create Entry" className="custom-btn" />