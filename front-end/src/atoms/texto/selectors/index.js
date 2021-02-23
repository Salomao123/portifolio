import { selector } from 'recoil';
import { textoState } from '../index';
import ApiConfig from '../../../config/ApiConfig';

export const textoPadraoState = selector({
    key: 'textoPadraoState',
    get: ({ get }) => {
        const _textos = get(textoState);
        return _textos;
    }
})
