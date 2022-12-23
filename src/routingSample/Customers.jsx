import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Customers() {

    const [customers, setcustomers] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setcustomers(res.data);
            })

    }, [])


    const goToDetail = (id) => {
        navigate('/customers/' + id)
    }


    return (<>

        <table className='w3-table-all w3-hoverable'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Go to detail</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((item) => {
                        return <tr>
                            <td><Link to={'/customers/' + item.id}>{item.id}</Link>  </td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td><button onClick={() => goToDetail(item.id)}>Go to detail</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default Customers