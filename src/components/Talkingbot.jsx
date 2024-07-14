import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './Talkingbot.css';
import {
  Link
} from "react-router-dom";
import axios from 'axios';


const Talkingbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async() => {

    console.log('loding..') 
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAxV8iFZzs3ZF6r9odNTrsvGW5m1A9SwXM",
      method:'post',
      data:{"contents":[{"parts":[{"text":input}]}]}
    })
     const answer = (response['data']['candidates'][0]['content']['parts'][0]['text']);

    if (input.trim()) {
      // Update messages with the previous state
      setMessages(prevMessages => [...prevMessages, { text: input, fromUser: true }]);
      setInput('');

      // Simulating response from chatbot after a delay
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: <pre className='answer'>{answer}</pre>, fromUser: false }]);
      }, 500); // Example delay for simulation
    }
  };

  return (
    <div className="bg-dark text-white">
    <Container className="vh-100 d-flex flex-column p-5 overflow-hidden" id="outputbox">
    <div className="logo1">
      <div className="logo">
        <h1>TALKINGBOT</h1>
        <div className="text-end">
        <div className="homelink mx-5">
        <Link to="/" type="button" class="btn btn-outline-success">goHome</Link>
      </div>
      </div>
      </div>
      </div>

      {/* <div className="text-end">
      <div className="homelink">
        <Link to="/" type="button" class="btn btn-outline-success">goHome</Link>
      </div>
      </div> */}
      <Row className="flex-grow-1">
        <Col>
          <Card className="h-100">
            <Card.Body className="p-3 bg-dark text-white">
              <div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`d-flex mb-2 ${message.fromUser ? 'justify-content-end' : 'justify-content-start'}`}
                  >
                    <div className={`p-2 rounded ${message.fromUser ? 'bg-primary text-white' : ''}`}>
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="primary" className="ms-2" onClick={handleSend}>
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Talkingbot;
