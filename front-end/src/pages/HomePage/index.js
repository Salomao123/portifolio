import React, { useEffect } from 'react';

import TextInput from '../../components/TextInput';
import OutraHome from '../OutraHome';
import { Button } from 'antd';

import { useRecoilState } from 'recoil';
import { textoState } from '../../atoms/texto';
import ApiConfig from '../../config/ApiConfig';

export default function HomePage() {

    const [, setPortifolios] = useRecoilState(textoState);

    const handlePortifolios = async () => {
        const response = await ApiConfig.get("/portifolios/");
        console.log(response.data);
        setPortifolios(response.data);
    }

    useEffect(() => {
        handlePortifolios()
    })

    return (
        <>
            <OutraHome />
        </>
    );
}