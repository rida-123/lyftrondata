import './pipelineDiv.css';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import PipelineDetailData from '../pipelineDetailData/pipelineDetailData';
import Data from '../sample.json'

const PipelineDiv = ({ pipeline }) => {
    const values = 'xxl-down';
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);

    }
    return (
        <>
            <div className="pipeline">
                <h4 style={{ color: "#2dc1ba", fontWeight: "bold", fontSize: "21px" }}>{pipeline.pipeline_name}</h4>

                <div className='up-down'>

                    <button className="btn4" onClick={() => handleShow(values)}>Pipeline Detail</button>
                </div>
                <PipelineDetailData pipeline={pipeline}
                    show={show}
                    onHide={() => setShow(false)}
                    fullscreen={fullscreen}></PipelineDetailData>
            </div>









        </>
    )
}
export default PipelineDiv;