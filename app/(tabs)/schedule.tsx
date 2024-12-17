import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
  TouchableOpacity,
  Button,
} from "react-native";
import { BarberCard } from "@/components/BarberCard";
import { router } from "expo-router";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import {
  ImagePickerResponse,
  launchImageLibrary,
} from "react-native-image-picker";
import RNFS from "react-native-fs";

interface BarberShopData {
  id: string;
  name: string;
  distance: string;
  openingHours: string;
  isOpen: boolean;
  imageUrl: ImageSourcePropType;
}

const barberShops: BarberShopData[] = [
  {
    id: "1",
    name: "GENTLEMEN CLUB",
    distance: "0.5 km",
    openingHours: "10 am–10 pm",
    isOpen: true,
    imageUrl: require("@/assets/images/barbearia2.png"),
  },
  {
    id: "2",
    name: "GENTLEMEN CLUB",
    distance: "0.5 km",
    openingHours: "10 am–10 pm",
    isOpen: true,
    imageUrl: require("@/assets/images/corteCabelo.png"),
  },
];

export default function TabTwoScreen() {
  const [selected, setSelected] = useState("");

  const handleBookNow = (shopId: string) => {
    schedule();
    // Função de reserva (não implementada, mas pode ser ajustada)
  };


  const schedule = () => {
    router.push("/schedule");
  };

  const [imageUri, setImageUri] = useState<string | null>(null);

  // Função para abrir a galeria e escolher uma imagem
  const handleImageSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0]; // Pega o primeiro arquivo selecionado
    console.log(file);

    if (file) {
      const reader = new FileReader(); // Criando um FileReader para ler a imagem
      reader.onloadend = () => {
        // Quando a leitura terminar, atualiza o estado com o URI da imagem
        setImageUri(reader.result as string);
      };
      reader.readAsDataURL(file); // Lê o arquivo como uma URL base64
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/Options.svg")}
          style={styles.notificationIcon}
          accessible={true}
          accessibilityLabel="Notifications"
        />
      </View>
      <View style={styles.firstPart}>
        <View style={styles.perfil}>
          <Image
            source={require("@/assets/images/images.jpg")}
            style={styles.perfil}
          />
          <Text style={styles.texts}>GENTLEMEN CLUB</Text>
          <Text style={styles.texts}>Level Up Your Look With us ! </Text>
          <Text style={styles.texts}>Address :  Casablanca , 28 rue  lmankobin</Text>
          <Text style={styles.texts}>Open Now</Text>
          <Text style={styles.texts}>Service here</Text>
          <View>
          <Text style={styles.texts}>50$</Text>
          <Text style={styles.texts}>40min</Text>
          </View>
        </View>
      </View>
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: "#202020",
          calendarBackground: "#202020",
          textSectionTitleColor: "#FFFFFFFF",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#FBFBFBFF",
          selectedDayTextColor: "#202020",
          todayTextColor: "#45B917FF",
          dayTextColor: "#FFFFFFFF",
          textDisabledColor: "#d9e1e8",
          dotColor: "#FFFFFFFF",
          selectedDotColor: "#F6F1F1FF",
          arrowColor: "white",
          disabledArrowColor: "#FFFFFFFF",
          monthTextColor: "white",
          indicatorColor: "white",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
        onDayPress={(day: { dateString: React.SetStateAction<string> }) => {
          if (day && day.dateString) {
            setSelected(day.dateString);
          }
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
      />
      <TouchableOpacity style={styles.bookNow}>
        <Image source={require("@/assets/images/button.svg")}></Image>
      </TouchableOpacity>
      <NavigationBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingTop: 39,
    paddingBottom: 17,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 333,
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationIcon: {
    width: 30,
    height: 30,
    marginLeft: 300,
  },
  calendar: {
    width: 350,
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
  },
  perfil: {
    borderRadius: 500,
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },
  input: {
    marginBottom: 20,
  },
  firstPart: {
    marginBottom: 105,
    fontSize:16,
    color: "#FFFFFF"
  },
  bookNow:{
    marginTop: 50,
    marginBottom: 75
  },
  texts:{
    color: "#FFFFFF"
  }
});

{
  /* Caso precise de input */
}
{
  /* <input type="file" accept="image/*" onChange={handleImageSelect} style={styles.input} />
          {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.perfil} />
      ) : (
        <Image source={require("@/assets/images/images.jpg")} style={styles.perfil} />
      )} */
}
