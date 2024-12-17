import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AuthButton } from "@/components/AuthButton";
import { Link, router } from "expo-router";

export default function TabTwoScreen() {
  // const onPress = () => {
  //   router.push("/index");
  // };

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
              placeholder="Input your email"
              style={styles.inputs}
            />
          </View>

          <View style={styles.createButton}>
            <AuthButton label="Send code" variant="primary" onPress={() => {router.push('/code')}} />
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
  }
});