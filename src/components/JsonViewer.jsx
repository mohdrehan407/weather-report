import { useState } from 'react';
import './JsonViewer.css';

const JsonViewer = ({ data }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="json-viewer-container">
            <button
                className="toggle-json-button"
                onClick={toggleVisibility}
            >
                {isVisible ? '🔽 Hide JSON Data' : '🔼 View JSON Data'}
            </button>

            {isVisible && (
                <div className="json-content">
                    <div className="json-header">
                        <h3>API Response</h3>
                        <button
                            className="copy-button"
                            onClick={() => {
                                navigator.clipboard.writeText(JSON.stringify(data, null, 2));
                                alert('JSON copied to clipboard!');
                            }}
                        >
                            📋 Copy
                        </button>
                    </div>
                    <pre className="json-pre">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default JsonViewer;
