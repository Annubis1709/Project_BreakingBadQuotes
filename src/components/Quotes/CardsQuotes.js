import React from 'react';
import { Spinner } from 'reactstrap';
import ListQuotes from './ListQuotes';



const CardsQuotes = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />        
    ) : (
        <section>
            {items.map((item) => (
                <ListQuotes key={item.quote_id} item={item} />
            ))}     
        </section>

        
    );
};

export default CardsQuotes;






