import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { textoPadraoState } from '../../atoms/texto/selectors';
import { Typography } from 'antd';

const { Title } = Typography;

export default function OutraHome() {
    const textoPadrao = useRecoilValue(textoPadraoState);

    useEffect(() => {
        console.log(textoPadrao);
    })

    return (
        <>
            <ul>
                {textoPadrao.map(item => {
                    return (<li key={item.id}><Title level={4}>{item.description}</Title></li>)
                })}
            </ul>
        </>
    );
}