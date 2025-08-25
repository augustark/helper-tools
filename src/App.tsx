import { useState, useEffect } from 'react'
import data from './data'
import './assets/css/styles.css'

function App() {
    const [envData, setEnvData] = useState({
        name: '',
    })

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const repository = formData.get('env-repo') as string;
        // const staging = formData.get('env-staging') as string;

        // Get hostname from repository link
        const hostLink = new URL(repository);
        const hostPath = hostLink.pathname.split('/').filter(Boolean)[1];
        const pathname = hostPath.slice(0, hostPath.indexOf('.com'));

        setEnvData(prev => ({
            ...prev,
            name: pathname
        }));
    }

    const dotenv = data.replaceAll('[site-name]', envData.name).trim();

    return (
        <>
            <div className="generate-env">
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <div className="form-field">
                            <label htmlFor="env-repo">Repository Link</label>
                            <input type="text" id="env-repo" name="env-repo" required />
                        </div>
                        {/* <div className="form-field">
                            <label htmlFor="env-staging">Staging Link</label>
                            <input type="text" id="env-staging" name="env-staging" required />
                        </div> */}
                        <div className="form-submit">
                            <button type="submit">Generate</button>
                        </div>
                    </div>
                </form>
                {envData.name && (
                    <div className="env-display">
                        <p>Don't forget to generate your keys here: <a href="https://roots.io/salts.html" target="_blank">https://roots.io/salts.html</a> </p>
                        <pre>{dotenv}</pre>
                    </div>
                )}
            </div>
        </>
    )
}

export default App
