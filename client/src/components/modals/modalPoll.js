import React, { useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import {  CustomModal } from './modalPoll.styled';

const PollModal = ({ show, onHide }) => {
    const [title, setTitle] = useState('');
    const [votingType, setVotingType] = useState('single'); 
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');

    const handleSubmit = () => {

    const options = [option1.trim(), option2.trim(), option3.trim(), option4.trim()];
        console.log({ title, votingType, options });
        postData(options);

        onHide();
    };


const postData = async (options) => {
    const token = localStorage.getItem('token');

    try {
        const response = await fetch('http://localhost:5000/polls', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ "title":title, "votingType":votingType, "options":options }),
        });

        if (response.ok) {
        const data = await response.json();
        console.log('Data from server:', data);
        } else {
        console.error('Failed to post data to the server');
        }
    } catch (error) {
        console.error('Error posting data:', error);
    }
    };

    return (
    <CustomModal show={show} onHide={onHide} centered>
    <CustomModal.Header closeButton>
    </CustomModal.Header>
    <CustomModal.Title>Create a Poll</CustomModal.Title>

    <CustomModal.Body>
    <Form>
        <Form.Group controlId="pollTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
            type="text"
            placeholder="Enter poll title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        </Form.Group>
<br />
        <Form.Group controlId="votingType">
        <Form.Group controlId="votingType">
        <Form.Label>Voting Type</Form.Label>
        <Form.Check
            type="radio"
            label="Single Choice"
            name="votingType"
            value="single"
            checked={votingType === 'single'}
            onChange={() => setVotingType('single')}
        />
        <Form.Check
            type="radio"
            label="Multiple Choice"
            name="votingType"
            value="multiple"
            checked={votingType === 'multiple'}
            onChange={() => setVotingType('multiple')}
        />
        </Form.Group>
        <br/>
        <Form.Group controlId="pollAnswers">
        <Form.Label>Answer Options</Form.Label>
        <Form.Control
            type="text"
            placeholder="Option 1"
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
        />
        <Form.Control
            type="text"
            placeholder="Option 2"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
        />
        <Form.Control
            type="text"
            placeholder="Option 3"
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
        />
        <Form.Control
            type="text"
            placeholder="Option 4"
            value={option4}
            onChange={(e) => setOption4(e.target.value)}
        />

        </Form.Group>
        </Form.Group>


    </Form>
    </CustomModal.Body>
    <CustomModal.Footer>
    <Button variant="primary" onClick={handleSubmit}>
        Create Poll
    </Button>
    </CustomModal.Footer>
    </CustomModal>
    );
};

export default PollModal;
