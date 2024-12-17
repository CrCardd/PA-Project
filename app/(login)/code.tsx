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
    const CELL_COUNT = 4;

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

        <CodeField
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              renderCell={({index, symbol, isFocused}) => (
              <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor/> : null)}
              </Text>
              )}
          />
         

          <View style={styles.createButton}>
            <AuthButton label="CHECK" variant="primary" onPress={() => {router.push('/redefine')}} />
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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


  codeFieldRoot: {
    marginTop: 20,
    display: 'flex',
    gap: 5
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 20,
    gap: 5,
    borderRadius: 8,
    backgroundColor: '#f8f8f8f8',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});