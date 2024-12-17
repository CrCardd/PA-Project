import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import { AuthButton } from "@/components/AuthButton";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

export default function TabTwoScreen() {
    const CELL_COUNT = 6;

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });



  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image
          source={require("@/assets/images/barbeiro.png")}
          style={styles.backgroundImage}
          />
      </View>
      <View style={styles.regContainer}>

          <View style={styles.regInputs}>
            <TextInput
              placeholder="Password"
              style={styles.inputs}
              textContentType="password"
              secureTextEntry
            />
            <TextInput
              placeholder="Confirm password"
              style={styles.inputs}
              textContentType="password"
              secureTextEntry
            />
          </View>

          <View style={styles.createButton}>
            <AuthButton label="SET NEW PASSWORD" variant="primary" onPress={() => {router.push('/')}} />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#0f0f0f'
  },
  regContainer: {
    
  },
  inputs: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    width: 250
  },
  tapaBuraco : {
    width: '100%',
    height: '20%'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    opacity: 0.99
  },
  regInputs: {
    gap: 10
  },
  createButton: {
    position: 'absolute',
    bottom: '-160%'
  },


  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});