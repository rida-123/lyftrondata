import './pipelineDetailData.css';
import { Modal } from 'react-bootstrap';
const PipelineDetailData = (props) => {
    return (
        <>
            <Modal {...props} scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div className='row'>
                        <div className='col-sm-12 col-12 col-lg-6'>
                            <h3 className='pipelineName'>{props.pipeline.pipeline_name}</h3>
                            <br></br>
                            <div className='row'>
                                <div className='col-sm-6 col-6'>
                                    <h5 className='pipelineD'>Source:</h5>
                                    <h5 className='pipelineD'>Target:</h5>
                                    <h5 className='pipelineD'>Load Action:</h5>
                                    <h5 className='pipelineD'>Load Status:</h5>
                                    <h5 className='pipelineD'>Key:</h5>
                                    <h5 className='pipelineD'>Target Action:</h5>

                                </div>
                                <div className='col-sm-6 col-6 col-lg-6' style={{ textAlign: "right", color: "#503989", fontWeight: "bold" }}>

                                    <h5 className='pipelineD'>{props.pipeline.source_table}</h5>
                                    <h5 className='pipelineD'>{props.pipeline.target_table}</h5>
                                    <h5 className='pipelineD'>{props.pipeline.load_action}</h5>
                                    <h5 className='pipelineD'>{props.pipeline.load_status}</h5>
                                    <h5 className='pipelineD'>{props.pipeline.natural_key}</h5>
                                    <h5 className='pipelineD'>{props.pipeline.target_table_action}</h5>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                        <div className='col-sm-12 col-12 col-lg-6' >
                        <h2 style={{textAlign:"center"}}>Params:</h2>
                           {
                               props.pipeline.params.map((param)=>{
                                   return (
                                       <>
                                       <div>
                                        <h4 style={{textAlign:"center",backgroundColor:"#503989",color:"white",fontStyle:"italic",marginTop:'20px'}}>{param.value}</h4>
                                        <div className='row' style={{textAlign:"center"}}>
                                            <div className='col-sm-6 col-6'>
                                              Group:
                                              <br></br>
                                              Param:
                                              <br></br>
                                              Table:
                                            </div>
                                            <div className='col-sm-6 col-6'>
                                             {param.group}<br></br>
                                             {param.param}<br></br>
                                             {param.table}
                                            </div>
                                            <hr></hr>
                                        </div>
                                       </div>
                                       </>
                                   )
                               })
                           }
                        </div>
                    </div>


                </Modal.Body>
            </Modal>
        </>
    )
}
export default PipelineDetailData;