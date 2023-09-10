import './Header.css';
import { images } from '../../constants';
import slogan from '../../assets/slogan.jpg';
import { Message } from '../../container';

const images1 = {};
Object.assign(images1, images);
delete images1.slogan;
delete images1.LDNlogo;
console.log(images1);

const Header = () => {
  return (
    <div className='outer-container'>
      <Message />
      <div className='inner-container'>
        <div className='app__header-container'>
          {Object.entries(images1).map(([key, value], index) => (
            <>
              <img src={value} alt={key} key={key} />
              {index % 7 === 1 && (
                <img src={slogan} alt='slogan' key={key + '-slogan'} />
              )}
            </>
          ))}
          <img src={slogan} alt='slogan' />
        </div>
      </div>
    </div>
  );
};

export default Header;
