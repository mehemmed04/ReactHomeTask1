import './App.css';
import NavbarComponent from './NavbarComponent';
import SideNavBar from './SideNavBar';
import {Row,Col} from 'reactstrap';

function App() {
  return (
    <div className="App" style={{overflowY:'hidden',overflowX:'hidden'}}>
      <Row>
      <Col xl='2'>
        <SideNavBar></SideNavBar>
        </Col>
        <Col>
        <Col>
        <Row>

        <NavbarComponent></NavbarComponent>
        </Row>
        <Row>
            <img style={{width:'70%'}} src='https://madewithnetworkfra.fra1.digitaloceanspaces.com/spatie-space-production/28872/reactstrap-2.jpg'></img>
        </Row>
        </Col>
        </Col>
      </Row>
    </div>
  );
}

export default App;
