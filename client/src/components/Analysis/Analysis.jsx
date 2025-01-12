import './Analysis.css';

function Analysis(props) {
    return (
        <div className='analysis-container'> {/* Use a container class */}
            <div className='analysis-card'> {/* Card for the content */}
                <h2>Results Summary</h2>
                <div className='ac-content'>
                    <h3>Your entered URL is:</h3>
                    <a href={props.url} target="_blank" rel="noopener noreferrer">
                        <h3 style={{ color: 'lightblue', marginBottom: '1rem', cursor: 'pointer' }}>{props.url}</h3>
                    </a>
                    {
                        props.pred.label === 'Safe' ? (
                            <div className='legitimate-div'>
                                <img width="64" height="64" src="https://img.icons8.com/dusk/128/verified-badge.png" alt="verified-badge"/>
                                <h3 className='legitimate'>It is Legitimate URL. You can trust this URL.</h3>
                            </div>
                        ) : (<></>)
                    }
                    {
                        props.pred.label === 'Danger' ? (
                            <div className='danger-div'>
                                <img width="64" height="64" src="https://img.icons8.com/color/128/self-destruct-button--v1.png" alt="self-destruct-button--v1"/>
                                <h3 className='danger'>It is Phishing URL. You should not trust this URL.</h3>
                            </div>
                        ) : (<></>)
                    }
                    {
                        props.pred.label === 'Warning' ? (
                            <div className='warning-div'>
                                <img width="64" height="64" src="https://img.icons8.com/color/128/error--v1.png" alt="error--v1"/>
                                <h3 className='warning'>It may be a Phishing URL. You should not trust this URL.</h3>
                            </div>
                        ) : (<></>)
                    }
                    <div className='trust-score'>
                        <p>It has a trust score of </p>
                        <h3>{Math.trunc(props.pred.avg_prediction * 100)}/100.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analysis;
