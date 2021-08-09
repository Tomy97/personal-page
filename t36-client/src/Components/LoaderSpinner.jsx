import React from 'react'
import { Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

const SpinnerLoader = () => (
    <div className="center_loader">
        <Spinner animation="border" variant="primary" />
    </div>
)

export default SpinnerLoader
