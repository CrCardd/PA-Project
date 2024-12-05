import { Image, StyleSheet,View, ScrollView } from 'react-native';
import { SocialIcon } from '@/components/SocialIcon';
import { AuthButton} from '@/components/AuthButton';
import { router } from 'expo-router';


export default function HomeScreen() {
  const onPress = () => {
    router.push("/explore");
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View>
      <SocialIcon imageUrl={require("@/assets/images/barbeiro.png")} alt={''} onPress={onPress}></SocialIcon>
      <AuthButton label={'sla papai'} variant={'primary'} onPress={onPress}></AuthButton>
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  authContainer: {
    borderRadius: 30,
    marginHorizontal: 'auto',
    maxWidth: 480,
    width: '100%',
    paddingBottom: 60,
    alignItems: 'center',
  },
  backgroundImage: {
    alignSelf: 'stretch',
    aspectRatio: 0.6,
    width: '100%',
  },
  forgotPassword: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Segoe UI',
    fontWeight: '400',
    marginTop: 22,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 17,
    width: 118,
    maxWidth: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
