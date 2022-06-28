import React from 'react';
import tvBorder from "../../images/borderTV.png"
import tvVideo from "../../videos/video.mp4"

import ButtonPause from '../../images/buttons_pause.png'
import ButtonPlay from '../../images/buttons_play.png'
import ButtonReplay from '../../images/buttons_replay.png'

import {
    ActionItem, ActionItemText,
    ActionsList,
    ChannelsActions,
    ChannelsConditions,
    ChannelsContainer,
    ChannelsContent, ChannelsImg,
    ChannelsTitle, ChannelsVideo,
    ActionItemImg,
    ChannelsVideoBlock, ConditionsItem, ConditionsText, ConditionsTitle
} from "./SigninElements";

const actions = [
    {id: 1, title: 'ставьте \u0020 на паузу', img: ButtonPause},
    {id: 2, title: 'смотрите с начала', img: ButtonPlay},
    {id: 3, title: 'перематывайте программы', img: ButtonReplay}
]


const Channels = () => {
    return (
        <ChannelsContainer>
            <ChannelsVideoBlock>
                <ChannelsImg src={tvBorder} alt=""/>
                <ChannelsVideo src={tvVideo} autoPlay muted>
                    <source src={tvVideo} type='video/mp4'/>
                </ChannelsVideo>
            </ChannelsVideoBlock>
            <ChannelsContent>
                <ChannelsTitle>
                    Телеканалы для
                    всей семьи
                </ChannelsTitle>
                <ChannelsConditions>
                    <ConditionsItem>
                        <ConditionsTitle>
                            130
                        </ConditionsTitle>
                        <ConditionsText>
                            телеканалов
                        </ConditionsText>
                    </ConditionsItem>
                    <ConditionsItem>
                        <ConditionsTitle>
                            7 дней
                        </ConditionsTitle>
                        <ConditionsText>
                            записи эфира
                        </ConditionsText>
                    </ConditionsItem>
                </ChannelsConditions>
                <ChannelsActions>
                    <ActionsList>
                        {actions.map(action =>
                            <ActionItem>
                                <ActionItemImg src={action.img} alt=""/>
                                <ActionItemText>{action.title}</ActionItemText>
                            </ActionItem>
                        )}
                    </ActionsList>
                </ChannelsActions>
            </ChannelsContent>
        </ChannelsContainer>
    );
};

export default Channels;