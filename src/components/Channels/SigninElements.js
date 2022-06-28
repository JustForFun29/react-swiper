import styled from 'styled-components'

export const ChannelsContainer = styled.section`
  max-width: 1620px;
  margin: 200px auto;
  display: flex;
  justify-content: center;
  position: relative;
  height: 400px;
  @media (max-width: 910px) {
    height: auto;
    justify-content: flex-start;
    padding: 0 40px;
  }
`
export const ChannelsVideoBlock = styled.div`
  position: absolute;
  left: -15%;
  top: 0;
  width: 100%;
  @media (max-width: 910px) {
    left: 40px;
    top: 582px;
    @media (max-width: 480px) {
      top: 492px;
    }
  }
`
export const ChannelsVideo = styled.video`
  top: 10px;
  position: absolute;
  width: 50%;

  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 910px) {
    width: 80%;
  }

  @media (max-width: 720px) {
    top: 5px;
  }
`
export const ChannelsImg = styled.img`
  top: 0;
  z-index: 10;
  position: absolute;
  width: 50%;

  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 910px) {
    width: 80%;
  }
`
export const ChannelsContent = styled.div`
  margin-left: 450px;
  @media (max-width: 910px) {
    margin-left: 0;
    padding-bottom: 50%;
    margin-bottom: 140px;
  }

`
export const ChannelsTitle = styled.h3`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 80px;
  max-width: 400px;
  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 50px;
  }
`
export const ChannelsConditions = styled.ul`
  display: flex;
  column-gap: 80px;
  margin-bottom: 65px;
  @media (max-width: 480px) {
    column-gap: 40px;
  }
`
export const ConditionsItem = styled.li`
  list-style-type: none;

`
export const ConditionsTitle = styled.h5`
  font-size: 40px;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 32px;
  }
`
export const ConditionsText = styled.p`
  font-size: 22px;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`
export const ChannelsActions = styled.div`

`
export const ActionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 512px) {
    row-gap: 10px;
  }
`
export const ActionItem = styled.li`
  list-style-type: none;
  width: 99px;
  margin-right: 35px;

  @media (max-width: 518px) {
    width: auto;
    margin-right: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1 1 100%;
  }

  @media (max-width: 480px) {
  }

`
export const ActionItemImg = styled.img`
  width: 52px;
  height: 52px;
  box-shadow: 0px 0px 38px 12px rgb(201 44 123 / 45%);
  border-radius: 50%;

`
export const ActionItemText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 15px;
  @media (max-width: 518px) {
    width: auto;
    font-size: 18px;
    margin-left: 15px;
    margin-top: 0px;
  }

`