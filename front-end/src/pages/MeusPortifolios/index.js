import React, { useEffect } from 'react';
import ListagemPortifolios from '../../components/listas/ListagemPortifolios';
import { Typography } from 'antd';

const { Title } = Typography;

const MeusPortifolios = () => {

    return (
        <>
            <Typography>
                <Title level={4}>Lista de Portifolios</Title>
            </Typography>
            <ListagemPortifolios />
        </>
    )
}

export default MeusPortifolios;