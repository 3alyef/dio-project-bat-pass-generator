import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles/styles';

interface propsText {
    placeholder: string;
    value: string;
    ref: React.MutableRefObject<TextInput | null>;
}
export function BatTextInput({placeholder, value, ref }: propsText) {
  return (
    <TextInput style={styles.inputer} placeholder={placeholder} value={value} ref={ref}/>
  );
}