const ITEMS_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

import { useEffect, useState, useRef } from 'react';
import List from './components/List';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fetchData from './functions/fetchData';


function App() {
  const [list, setList] = useState([]);
  const [details, setDetails] = useState({});

  const timestampRef = useRef();
  useEffect(() => {
    const timestamp = Date.now();
    timestampRef.current = timestamp;
    fetchData(ITEMS_URL)
      .then(result => {
        if (timestampRef.current === timestamp) {
          setList(result);
        }
      })
      .catch(error => console.error(error));
  }, [list]);

  const clickHandler = (evt) => {
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if (parseInt(element.id, 10) === parseInt(evt.target.dataset.id, 10)) {
        setDetails(element.details);
        break;
      }
    }
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <List list={list} clickHandler={clickHandler} />
        </Col>
        <Col>
        {details.id &&
          <Details item={details} />
        }
        </Col>
      </Row>
    </Container>
  )
}

export default App
