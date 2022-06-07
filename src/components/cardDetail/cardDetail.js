import './cardDetail.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import PipelineData from '../pipelineData/pipelinedata';



const CardDetail = (props) => {
    const [show, setShow] = useState(false);
    let startDate = props.data.startAt;
    let startingDate = startDate.slice(0, 10);
    let endDate = props.data.endAt;
    let endingDate = endDate.slice(0, 10);
    return (

        <>
            <Modal

                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div className="modal-content">
                    <Modal.Header closeButton >
                        <Modal.Title id="contained-modal-title-vcenter">

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >

                        <h4 className='author'>Author Name:</h4>
                        <p className='authorName'>{props.data.created_by.first_name}   {props.data.created_by.last_name}</p>
                        <hr></hr>
                        <h4 className='author'>Process Name:</h4>
                        <p className='authorName'>{props.data.name}  </p>
                        <hr></hr>

                        <h4 className='author'>Frequency:</h4>
                        <p className='authorName'>{props.data.frequency}  </p>
                        <hr></hr>
                        <h4 className='author'>Starting Date:</h4>
                        <p className='authorName'>{startingDate}  </p>
                        <hr></hr>
                        <h4 className='author'>Ending Date:</h4>
                        <p className='authorName'>{endingDate}  </p>
                        <hr></hr>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn2" onClick={() => setShow(true)}>
                            Show Pipelines
                        </Button>

                        {
                            <PipelineData
                                show={show}
                                onHide={() => setShow(false)}
                                data={props.data}
                            />


                        }

                    </Modal.Footer>
                </div>
            </Modal>
        </>
    )
}
export default CardDetail;