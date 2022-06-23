import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='why-us'>
      <ServicesH1>Почему мы</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Команда профессионалов</ServicesH2>
          <ServicesP>
            Наша команда состоит из исключительных мастеров своего дела.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Импортное оборудование</ServicesH2>
          <ServicesP>
            Мы заказываем импортное оборудование с самых знаменитых фабрик
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Поддержка 24/7</ServicesH2>
          <ServicesP>
            Обращайтесь к нам с любыми вопросами в любое время - мы поможем!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
