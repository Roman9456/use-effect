import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Details({ item }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.avatar} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City: {item.details.city}</ListGroup.Item>
        <ListGroup.Item>Company: {item.details.company}</ListGroup.Item>
        <ListGroup.Item>Position: {item.details.position}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

Details.propTypes = {
  item: PropTypes.object,
};

export default Details
