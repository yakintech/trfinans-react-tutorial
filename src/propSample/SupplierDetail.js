import React from 'react'
import PropTypes from 'prop-types';

function SupplierDetail({companyName, contactName, country}) {
  return (<>
    <h1>Company Name: {companyName}</h1>
    <h1>Contact Name: {contactName}</h1>
    <h1>Country: {country}</h1>
  </>
  )
}


SupplierDetail.defaultProps = {
    country: 'Türkiye'
}

SupplierDetail.propTypes = {
  companyName: PropTypes.string,
  contactName: PropTypes.string,
  year: PropTypes.number
}


export default SupplierDetail