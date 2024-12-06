import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SocialIcon } from "@/components/SocialIcon";
import { AuthButton } from "@/components/AuthButton";
import { router } from "expo-router";

export default function TabTwoScreen() {
  const onPress = () => {
    router.push("/explore");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("@/assets/images/barbeiro.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.authContainer}>
   
        <AuthButton label="SIGN IN" variant="primary" onPress={() => {}} />

        <AuthButton label="SIGN UP" variant="secondary" onPress={() => {}} />

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Forgot password"
        >
          <Text style={styles.forgotPassword}>Forgot Your Password ?</Text>
        </TouchableOpacity>

        <View style={styles.socialIconsContainer}>
          <SocialIcon
            key={1}
            imageUrl={require("@/assets/images/facebook.svg")}
            alt={"icon.alt"}
            onPress={onPress}
          />

          <SocialIcon
            key={2}
            imageUrl={require("@/assets/images/google.svg")}
            alt={"icon.alt"}
            onPress={onPress}
          />

          <SocialIcon
            key={3}
            imageUrl={require("@/assets/images/twitter.svg")}
            alt={"icon.alt"}
            onPress={onPress}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingBottom: 60,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
  },
    authContainer: {
    marginHorizontal: "auto",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 60,
    alignItems: "center",
    position: "relative", // To position the image behind
    backgroundColor: "#131212FF"
  },
  backgroundImage: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    aspectRatio: 0.6,
    width: '100%',
    paddingHorizontal: 76,
    paddingTop: 590,
    paddingBottom: 22,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  forgotPassword: {
    marginTop: 22,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Segoe UI',
    fontWeight: '400',
  },
  socialIconsContainer: {
    display: 'flex',
    marginTop: 17,
    width: 118,
    maxWidth: '100%',
    gap: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});