import React from 'react';
import { styles } from './styles/styles';
import { View, Image, Text } from 'react-native';
import batLogo from '../../../assets/bat-logo.png';
export function BatLogo() {
  return (
    <>
        <Text style={styles.Text}>
            Bat Pass Generator
        </Text>
        <Image source={batLogo}
        style={styles.batLogo}/>
    </>
  );
}

