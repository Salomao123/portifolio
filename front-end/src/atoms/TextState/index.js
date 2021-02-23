import React from 'react';
import { atom } from 'recoil';

export const textState = atom({
    key: "textState",
    default: ''
});