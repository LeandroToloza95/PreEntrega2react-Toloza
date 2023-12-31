import Container from 'react-bootstrap/Container';
import data from '../data/products.json'
import { useState } from 'react';
import { useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (prop) => {
    const [products, setProducts] = useState([])
    const { id } = useParams()



    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        })

        promesa.then(result => {
            if (id) {
                setProducts(result.filter(
                    product => product.difficulty === id
                ))
            } else {
                setProducts(result)
            }
        }
        )
    }, [id])

    return (
        <Container>
            <h1>{prop.greeting}</h1>
            {products.length === 0 ?
                <div>Loading...</div>
                : <ItemList products={products} />
            }
        </Container>)

}