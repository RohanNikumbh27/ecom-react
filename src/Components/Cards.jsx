import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Styles/index.css';

function Cards( props ) {
  return (<>
      <Card style={{ width: '18rem' }} className='card-flex' >
      <Card.Img alt={props.item.alt} variant="top" src={props.item.url} className='cardimg' />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>{props.item.text}</Card.Text>
        <div className='btndiv'>
          <Button className='action-button'>Buy</Button>
          <Button className='action-button'>Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>
    </>
  );
}

export default Cards;