import './Analysis.css';

function Analysis(props) {
    return (
        <div className='analysis-container'> {/* Use a container class */}
            <div className='analysis-card'> {/* Card for the content */}
                <h2>Analysis</h2>
                <h3>Your entered URL is:</h3>
                <h3 style={{color: 'orange', marginBottom: '1rem', cursor:'pointer'}}>{props.url}</h3>

                <h4 className={props.pred.prediction_dt === 1 ? 'legitimate' : 'phishing'}>
                    It is {props.pred.prediction_dt === 1 ? 'Legitimate' : 'Phishing'}.
                </h4>
                <p>(Prediction by Decision Tree)</p>
                <h4 className={props.pred.prediction_lr === 1 ? 'legitimate' : 'phishing'}>
                    It is {props.pred.prediction_lr === 1 ? 'Legitimate' : 'Phishing'}.
                </h4>
                <p>(Prediction by Logistic Regression)</p>
            </div>
        </div>
    );
}

export default Analysis;
