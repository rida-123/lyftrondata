import { Modal } from "react-bootstrap";
import PipelineDiv from "../pipelineDiv/pipelineDiv";
const PipelineData = (props) => {
    return (
        <>

            <Modal
                {...props}

                size="md"
                aria-labelledby="example-custom-modal-styling-title"
                scrollable={true}
            >
                <Modal.Header closeButton>
                    <h2 style={{ fontWeight: "bold" }}>Pipelines</h2>
                </Modal.Header>
                <Modal.Body>
                    {
                        props.data.pipeline.map((pipeline) => {
                            return <PipelineDiv pipeline={pipeline}></PipelineDiv>
                        })
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}
export default PipelineData;