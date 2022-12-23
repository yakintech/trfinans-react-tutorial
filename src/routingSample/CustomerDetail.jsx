import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function CustomerDetail() {

    const [detail, setdetail] = useState({});

    let { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers/' + id)
            .then(res => {
                setdetail(res.data);
            })

    }, [])


    return (<>
        <button onClick={() => navigate(-1)}>Go to back!</button>
        <h1>Id: {detail.id}</h1>
        <h1>Company Name: {detail.companyName}</h1>
        <h1>Contact Name: {detail.contactName}</h1>
        <h1>Contact Title: {detail.contactTitle}</h1>
        <h1>City: {detail.address?.city}</h1>
        <h1>Country: {detail.address?.country}</h1>

    </>)
}

export default CustomerDetail