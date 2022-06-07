import './dataTable.css';
import { useState } from 'react';
import CardDetail from '../cardDetail/cardDetail';

import { Button } from 'react-bootstrap';



const DataTable = ({ data }) => {
    const [modalShow, setModalShow] = useState(false)
    return (
        <>
            <tbody>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.source.name}</td>
                    <td>{data.target.name}</td>


                    <td className='statusbtn'><span className='status'>{data.status}</span></td>
                    <td>
                        <div className='div1'>
                            <Button className="btn1" onClick={() => setModalShow(true)}>
                                More Detail
                            </Button>
                        </div>

                        {
                            <CardDetail
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                data={data}
                            />


                        }

                    </td>
                </tr>

            </tbody>





        </>
    )
}
export default DataTable;