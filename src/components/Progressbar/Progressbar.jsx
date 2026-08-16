import React from 'react';
import { ProgressBar } from 'react-bootstrap';


const Progressbar = () => {
    const nodeJs = 95;
    const expressFastify = 90;
    const typescript = 90;
    const reactJs = 92;
    const reactNative = 85;
    const vueJs = 80;
    const mongodb = 88;
    const postgresql = 82;
    const socketIo = 90;
    const rabbitMq = 80;
    const docker = 80;
    const cicd = 78;
    const git = 90;
    const testing = 78;

    return (
        <div className='bg-dark p-4 text-white rounded-3 w-100 mx-auto shadow-lg mt-3'>
            <h1 className='text-center fw-bold '>SKILLS</h1>

            <div className=' d-flex w-75 mx-auto'>

                <div className='w-50'>
                    <p>Node.js<ProgressBar animated variant="warning" now={nodeJs} label={`${nodeJs} %`} /></p>
                    <p>Express / Fastify<ProgressBar animated variant="success" now={expressFastify} label={`${expressFastify} %`} /></p>
                    <p>TypeScript<ProgressBar animated variant="primary" now={typescript} label={`${typescript} %`} /></p>
                    <p>React<ProgressBar animated variant="info" now={reactJs} label={`${reactJs} %`} /></p>
                    <p>React Native<ProgressBar animated variant="warning" now={reactNative} label={`${reactNative} %`} /></p>
                    <p>Vue.js 3<ProgressBar animated variant="success" now={vueJs} label={`${vueJs} %`} /></p>
                    <p>MongoDB<ProgressBar animated variant="danger" now={mongodb} label={`${mongodb} %`} /></p>
                </div>
                <div className='w-50 ms-3'>
                    <p>PostgreSQL<ProgressBar animated variant="primary" now={postgresql} label={`${postgresql} %`} /></p>
                    <p>Socket.IO<ProgressBar animated variant="info" now={socketIo} label={`${socketIo} %`} /></p>
                    <p>RabbitMQ<ProgressBar animated variant="warning" now={rabbitMq} label={`${rabbitMq} %`} /></p>
                    <p>Docker<ProgressBar animated variant="danger" now={docker} label={`${docker} %`} /></p>
                    <p>CI/CD (Jenkins/GitLab)<ProgressBar animated variant="success" now={cicd} label={`${cicd} %`} /></p>
                    <p>Git<ProgressBar animated variant="primary" now={git} label={`${git} %`} /></p>
                    <p>Testing (Jest/Cypress)<ProgressBar animated variant="info" now={testing} label={`${testing} %`} /></p>
                </div>
            </div>

        </div>
    );
};

export default Progressbar;
