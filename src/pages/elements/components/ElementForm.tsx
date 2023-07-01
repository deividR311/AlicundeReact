import React from 'react';
import { Button, Form } from 'react-bootstrap';

interface Props {
    element      : string;
    handleChange : ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
    addElement   : () => void;
};

export const ElementForm = ({ element, handleChange, addElement} : Props ) => {
  return (
    <>
        <Form className="d-flex header-form">
            <Form.Control
                className='header-form-control'
                type="text"
                placeholder="Escribe algo"
                aria-label="Search"
                name='element'
                value={element}
                onChange={handleChange}
            />
            <Button variant="light" className='header-form-btn' onClick={addElement}>Añadir</Button>
        </Form>
    </>
  )
}
