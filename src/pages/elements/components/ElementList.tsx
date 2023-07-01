import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

interface Props {
  elementList   : string[];
  removeElement : (indexItem: number) => void;
}

export const ElementList = ({ elementList, removeElement } : Props ) => {
  return (
    <>
      <ListGroup>
        { elementList.map(( element : string, index : number ) => (
            <ListGroupItem key={`${element}-${index}`}>
              <Row>
                <Col sm={10} className='header-col-img'>{ element }</Col>
                <Col sm={2} className='header-col-img'>
                  <Button variant="light" className='header-form-btn' onClick={ () => removeElement(index)}>Eliminar</Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))
        }
      </ListGroup>
    </>
  )
}
