import ListQuotes from './ListQuotes';


const CardsPictures = ({ pictures }) => {
    return (
              
   
        <section>
            {pictures.map((picture) => (
                <ListQuotes key={picture.char_id} item={picture} />
            ))}     
        </section>

        
    );
};
export default CardsPictures;