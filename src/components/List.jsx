import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

function List({ list, clickHandler }) {
  return (
    <ListGroup>
      {list.map(elem =>
        <ListGroup.Item 
          key={elem.id}
          data-id={elem.id}
          action
          onClick={clickHandler}
        >
          {elem.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}

List.propTypes = {
  list: PropTypes.array,
  clickHandler: PropTypes.func,
};

export default List;
