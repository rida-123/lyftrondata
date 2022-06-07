import DataTable from './DataTable/dataTable';
import Data from './sample.json';

import "./Home.css"
const Home = () => {
    return (
        <>
            <h1 className='heading' >Data Management System</h1>
            <table className='table' >
                <thead >
                    <tr>
                        <th>id</th>
                        <th>Process Name</th>
                        <th>Source</th>
                        <th>Target</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    Data.map((data) => {
                        return <DataTable data={data} ></DataTable>
                    })
                }
            </table>

        </>
    )
}
export default Home;