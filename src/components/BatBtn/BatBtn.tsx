import React from 'react';
import { styles } from './styles/styles';
import { Text, TouchableOpacity } from 'react-native';

interface propsBatBtn{
    text: string;
    doWhat: ()=> void;
}

export function BatBtn({text, doWhat}: propsBatBtn) {
  return (
    <TouchableOpacity style={styles.button} onPress={doWhat}>
        <Text style={styles.text}>
            {text}
        </Text>
    </TouchableOpacity>
  );
}