import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../../atoms/TextState';
import { Input } from 'antd';

import CharacterCount from '../CharacterCount';

function TextInput () {

    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <Input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    )
    
}

export default function CharacterCounter () {
    return (
        <div>
            <TextInput />
            <CharacterCount />
        </div>
    )
}

