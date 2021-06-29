import React from 'react'
import { Row,Col, Pagination } from 'react-bootstrap'

function Paginate({ totalItems, itemsPerPage, currentPage, pageSelected }) {
    let active = currentPage;
    let items = [];
    for (let number = 1; number <= Math.ceil(totalItems / itemsPerPage); number++) {
      items.push(
          
        <Pagination.Item  onClick={() => pageSelected(number)} key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    
   
    }
    console.log(items)
 
    return (
        <Row>
            <Col >
            <Pagination className="justify-content-end p-3 mr-5">{items}</Pagination>
            </Col>
        
        </Row>
    
    )
}

export default Paginate;
