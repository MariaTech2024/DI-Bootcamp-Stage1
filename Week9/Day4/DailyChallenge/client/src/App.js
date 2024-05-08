import React, { useEffect, useState } from 'react';

function App() {
    const [helloMessage, setHelloMessage] = useState('');
    const [postMessage, setPostMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        async function fetchMessage() {
            const response = await fetch('/api/hello');
            const data = await response.json();
            setHelloMessage(data.helloMessage);
            setPostMessage(data.postMessage);
        }
        fetchMessage();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputValue })
        });
        const data = await response.json();
        setResponseMessage(data.message);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>{helloMessage}</h1>
                <h2>{postMessage}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type something"
                    />
                    <button type="submit">Submit</button>
                </form>
                <p>{responseMessage}</p>
            </header>
        </div>
    );
}

export default App;