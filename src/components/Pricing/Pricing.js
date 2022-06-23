import React from 'react';
import './Pricing.css';
import { Button } from '../ButtonElement';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { FaGem } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section' id='tarifs'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Тарифы</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                <BsXDiamondFill />
                </div>
                <h3>Fast</h3>
                <h4>3 700</h4>
                <p>тг/мес</p>
                <ul className='pricing__container-features'>
                  <li>Cкорость - 50 мбит/с</li>
                  <li>Трафик - Безлимитный</li>
                  <li>Бесплатное подключение</li>
                  <li> Wi-Fi роутер</li>
                </ul>
                <Button primary="true" dark="true">
                  Подключить
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Super Fast</h3>
                <h4>4 900</h4>
                <p>тг/мес</p>
                <ul className='pricing__container-features'>
                  <li>Скорость - 100 мбит/с</li>
                  <li>Трафик - Безлимитный</li>
                  <li>Бесплатное подключение</li>
                  <li> Wi-Fi роутер</li>
                </ul>
                <Button primary="true" dark="true">
                  Подключить
                </Button>
              </div>
            </Link>
            <Link to='/sign-' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaGem />
                </div>
                <h3>Ultra Fast</h3>
                <h4>9 900</h4>
                <p>тг/мес</p>
                <ul className='pricing__container-features'>
                  <li>Скорость - 200 мбит/с</li>
                  <li>Трафик - Безлимитный</li>
                  <li>Бесплатное подключение</li>
                  <li>Wi-Fi роутер</li>
                </ul>
                <Button buttonSize='btn--wide' primary="true" dark="true">
                  Подключить
                </Button>
              </div>
            </Link>
          </div>
          
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;