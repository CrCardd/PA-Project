import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Link, router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  
  const onPress = () => {
    // router.push("/(login)");
  };



  return (
    <View style={{flex: 1}}>
        <View style={styles.background}>
          {/* <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btnText}>ENTRAR</Text>
          </TouchableOpacity> */}
          <Image src={require('@/assets/images/login_bg.png')}/>
        </View>
        <LinearGradient
            colors={['rgba(8,9,0,0.98)', 'transparent']}
            start={{ x: 0, y: 1 }} 
            end={{ x: 0, y: 0 }}   
            style={styles.gradient}  
        />
    </View>
  );
}

const styles = StyleSheet.create({
    background: {
        // ...StyleSheet.absoluteFillObject,
        // width: '100%',
        // height: '100%',
        
        flex: 1,
        backgroundColor: '#d1f4a9'
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
      },


    button: {
      backgroundColor: "#090909",
    },
    btnText: {
      fontFamily: "Inter",
      color: "#ffffff",
    },
});
