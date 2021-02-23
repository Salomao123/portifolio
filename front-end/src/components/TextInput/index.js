import React from 'react';
import { Input } from 'antd';
import { useRecoilState } from 'recoil';
import { textoState } from '../../atoms/texto';

export default function TextInput() {

    const [texto, setTexto] = useRecoilState(textoState);

    const onChange = (event) => {
        setTexto(event.target.value);
    }

    return (
        <div>
            <Input onChange={onChange} value={texto} />
            <br />
            saida: {texto} 
        </div>
    )
}