import { useState } from 'react';
import { Element } from '../../interfaces/interfaces';
import { useForm } from '../../hooks/UseForm';
import { ElementForm, ElementList } from './components/Components';
import { Container } from 'react-bootstrap';

export const ElementsList = () => {

    const { form, handleChange, setForm } = useForm<Element>({ element : '' });
    const { element } = form;

    const [elementList, setElementList] = useState<string[]>([]);

    const addElement = () => {
        setElementList([ ...elementList, element ]);
        setForm({ element : '' });
    }

    const removeElement = ( indexItem : number ) => {
        setElementList((prevState) =>
            prevState.filter((todo, index) => index !== indexItem)
        );
    }

    return (
        <>
            <Container>
                <ElementForm
                    element={element}
                    handleChange={handleChange}
                    addElement={addElement}
                />

                { elementList.length > 0 &&
                    <ElementList
                        elementList={elementList}
                        removeElement={removeElement}
                    />
                }
            </Container>
        </>
    )
}
