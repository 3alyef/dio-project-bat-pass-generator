import React from 'react';
import * as C from '../../components/Components'
import styles from './styles/styles';
import { View, TextInput, 
Keyboard, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';
import * as services from '../../services/services';
export function Home() {

    const inputRef = React.useRef<TextInput>(null); // Ref para o TextInput
    //const buttonRef = React.useRef<Button>(null);
    const [ newPass, setNewPass ] = React.useState<string>('');

    const [passLength, setPassLength ] = React.useState<number>(8);

    const generate=(passLength: number)=>{
        setNewPass(()=>{
            const pass: string = services.passwordService(passLength)
            return pass; 
        })
  
    }

    const copy = async (pass: string) =>{
        await Clipboard.setStringAsync(pass);
        
    }

  return (
    
        <View style={styles.homeContainer}>      
                <View style={styles.logo}>
                    <C.BatLogo/>
                </View>
                <View style={styles.inputContainer}>
                    <C.BatTextInput placeholder='pass' value={newPass} ref={inputRef}/>
                
                    <C.BatBtn text='Generate' doWhat={()=> generate(passLength)}/>
                    <C.BatBtn text='⚡ Copy' doWhat={()=>copy(newPass)}/>
                </View>
                <StatusBar style='light'/>
           
        </View>
  );
}