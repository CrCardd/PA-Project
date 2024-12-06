import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  
  const onPress = () => {
    // router.push("/(login)");
  };

  return (
    <View style={{flex: 1}}>
        <View style={styles.background}>
          <Image 
            source={require('@/assets/images/login_bg.png')} 
            height={10000}
            width={10000}
            style={styles.image}
          />
        </View>
        <LinearGradient
            colors={['rgba(8,9,0,1)', 'transparent']}
            start={{ x: 0, y: 1 }} 
            end={{ x: 0, y: 0 }}   
            style={styles.gradient}  
        />
    </View>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '80%',
    },
    image: {
        width: '100%',
        height: '100%',  
        resizeMode: 'cover',
    },
});
