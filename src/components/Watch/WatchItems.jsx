import { Watch } from './Watch';
import './Watch.css';
import PropTypes from 'prop-types';

export const WatchItems = ({ data, onDelet }) => {
    return (
        <div className='watch-items'>
            {data.map((item) => {
                return <Watch item={item} key={item.title} onDelet={onDelet} />;
            })}
        </div>
    );
};

WatchItems.propTypes = {
  onDelet: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
}
