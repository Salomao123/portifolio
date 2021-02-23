import React from 'react';
import {useRecoilValue} from 'recoil';
import { charCountState } from '../../atoms/TextState/selector';
import { Typography } from 'antd';

const { Title } = Typography
export default function CharacterCount() {
    const count = useRecoilValue(charCountState);

    return (
        <>
            <Title level={4}>Character Count : {count}</Title>
        </>
    )
}