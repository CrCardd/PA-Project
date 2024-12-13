import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { BarberCard } from "@/components/BarberCard";
import { NavigationBar } from "@/components/NavigationBar";
import { router } from "expo-router";

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
  const handleBookNow = (shopId: string) => {
    // Função de reserva (não implementada, mas pode ser ajustada)
  };

  const back = () => {
    router.push("/explore");
  };

  const schedule = () => {
    router.push("/schedule");
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

      <Text style={styles.tagline}>
        Sharp and stylish! Book your barber appointment now..
      </Text>

      <View style={styles.citySelector}>
        <Image
          source={require("@/assets/images/search.svg")}
          style={styles.locationIcon}
          accessible={true}
          accessibilityLabel="Location icon"
        />
        <View style={styles.cityTextContainer}>
          <Text style={styles.cityText}>Please Select Your City</Text>
          <Image
            source={require("@/assets/images/setaPraBaixo.svg")}
            style={styles.dropdownIcon}
            accessible={true}
            accessibilityLabel="Select city dropdown"
          />
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Available Barbers In Your Location
      </Text>

      {/* ScrollView Horizontal para a lista de barbeiros */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.barberList}
      >
        {barberShops.map((shop) => (
          <View key={shop.id} style={styles.cardContainer}>
            <BarberCard shop={shop} onBookNow={handleBookNow} />
          </View>
        ))}
      </ScrollView>


        <View style={styles.cardContainer2}>
          <View style={styles.cardWrapper2}>
            <Image
              resizeMode="cover"
              source={require("@/assets/images/backgroundCardDescont.svg")}
              style={styles.shopImage2}
              accessible={true}
              accessibilityLabel={`barber shop image`}
            />

            <Image
              resizeMode="cover"
              source={require("@/assets/images/photoBarber.svg")}
              style={styles.shopImage3}
              accessible={true}
              accessibilityLabel={`barber shop image`}
            />
            <View
              style={styles.bookButton2}
              // onPress={() => onBookNow(shop.id)}
              accessible={true}
              // accessibilityLabel={`Book appointment at ${shop.name}`}
              accessibilityRole="button"
            >
              <Text style={styles.bookButtonText2}>Book Now</Text>
            </View>
          </View>
        </View>
   

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
  menuIcon: {
    width: 24,
    height: 24,
  },
  welcomeText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Segoe UI",
  },
  notificationIcon: {
    width: 30,
    height: 30,
    marginLeft: 300,
  },
  tagline: {
    color: "#959595",
    fontSize: 12,
    fontFamily: "Segoe UI",
    marginTop: 10,
  },
  citySelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(157, 178, 206, 0.47)",
    borderRadius: 12,
    padding: 10,
    marginTop: 13,
    width: "100%",
    maxWidth: 311,
  },
  locationIcon: {
    width: 25,
    height: 25,
  },
  cityTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 10,
  },
  cityText: {
    color: "#9DB2CE",
    fontSize: 15,
    fontFamily: "Segoe UI",
  },
  dropdownIcon: {
    width: 25,
    height: 25,
  },
  sectionTitle: {
    color: "#9DB2CE",
    fontSize: 16,
    fontFamily: "Segoe UI",
    marginTop: 24,
    marginBottom: 20,
  },
  barberList: {
    width: "100%",
    // marginBottom: 20,
  },
  cardContainer: {
    marginRight: 15, // Ajuste o espaçamento entre os cards
  },
  cardWrapper: {
    borderRadius: 12,
    padding: 16,
    marginRight: 120,
  },
  shopImage: {
    borderRadius: 12,
    aspectRatio: 0.96,
    width: "200%",
    height: "72%",
  },
  bookButton: {
    borderRadius: 9,
    borderColor: "#FED60A",
    borderWidth: 1,
    marginTop: 4,
    padding: 4,
    alignItems: "center",
    width: 105,
  },
  bookButtonText: {
    fontFamily: "Viga",
    fontSize: 14,
    color: "#FFFFFFFF",
  },
  cardContainer2: {
    marginRight: 190,
  position: "relative",
     // Ajuste o espaçamento entre os cards
  },
  cardWrapper2: {
    borderRadius: 12,
  },
  shopImage2: {
    borderRadius: 12,
    aspectRatio: 1,
    width: "345%",
    position: 'absolute',
    top: -170,
    left: -32,
    zIndex: 100
  },
  bookButton2: {
    borderRadius: 9,
    borderColor: "#FED60A",
    borderWidth: 1,
    marginTop: 4,
    padding: 4,
    alignItems: "center",
    width: 105,
    height:35,
    // position: 'absolute',
    // top: 0,
    // left: 0
  },
  bookButtonText2: {
    fontFamily: "Viga",
    fontSize: 14,
    color: "#FFFFFFFF",
  },
  shopImage3: {
    borderRadius: 12,
    aspectRatio: 1,
    width: "100%",
    position: 'absolute',
    top: -160,
    left: 215,
    zIndex: 200
  },

});
