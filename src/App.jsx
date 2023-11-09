import './styles/App.css';
import { Form } from './components/Form/Form';
import { data } from '../data/data';

function App() {
    return (
        <div className='main-wrapper'>
            <Form data={data} />
        </div>
    );
}


export default App;
