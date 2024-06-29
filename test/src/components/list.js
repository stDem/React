import { useState } from "react";
import PropTypes from 'prop-types';

export default function MessagesList({background_theme}) {
    const [messages, setMessages] = useState([
        {id: '1', text: 'message1', heading: 'Heading1'},
        {id: '2', text: 'message2', heading: 'Heading2'},
        {id: '3', text: 'message3', heading: 'Heading3'}
    ]);
    
    return messages.map((message) =>
        <div className={background_theme}>
            <h2>{message.heading}</h2>
            <div key={message.id}>{message.text}</div>
        </div>
    );
};
MessagesList.propTypes = {
    background_theme: PropTypes.string.isRequired,
}

