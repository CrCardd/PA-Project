import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { BarberCard } from '@/components/BarberCard';
import { NavigationBar } from '@/components/NavigationBar';
import { router } from 'expo-router';

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
    id: '1',
    name: 'GENTLEMEN CLUB',
    distance: '0.5 km',
    openingHours: '10 am–10 pm',
    isOpen: true,
    imageUrl: require("@/assets/images/barbearia2.png"),
  },
  {
    id: '2',
    name: 'GENTLEMEN CLUB',
    distance: '0.5 km',
    openingHours: '10 am–10 pm',
    isOpen: true,
    imageUrl: require("@/assets/images/corteCabelo.png"),
  },
];

export default function TabTwoScreen() {
  const handleBookNow = (shopId: string) => {
  
  };

  const back = () => {
    router.push("/explore")
  };

  return (
    <ScrollView>

      <View style={styles.screenContainer}>
        <View style={styles.header}>
            <TouchableOpacity onPress={back}>
          <Image
            source={require("@/assets/images/seta.svg")}
            style={styles.menuIcon}
            accessible={true}
            accessibilityLabel="Menu"
          />
            </TouchableOpacity>
          <Text style={styles.welcomeText}>Welcome Youlakou</Text>
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

        <View style={styles.barberList}>
          {barberShops.map((shop) => (
            <BarberCard
              key={shop.id}
              shop={shop}
              onBookNow={handleBookNow}
            />
          ))}
        </View>

        <NavigationBar />
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingTop: 39,
    paddingBottom: 17,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 333,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  welcomeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Segoe UI',
  },
  notificationIcon: {
    width: 30,
    height: 30,
  },
  tagline: {
    color: '#959595',
    fontSize: 12,
    fontFamily: 'Segoe UI',
    marginTop: 10,
  },
  citySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(157, 178, 206, 0.47)',
    borderRadius: 12,
    padding: 10,
    marginTop: 13,
    width: '100%',
    maxWidth: 311,
  },
  locationIcon: {
    width: 25,
    height: 25,
  },
  cityTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  cityText: {
    color: '#9DB2CE',
    fontSize: 15,
    fontFamily: 'Segoe UI',
  },
  dropdownIcon: {
    width: 25,
    height: 25,
  },
  sectionTitle: {
    color: '#9DB2CE',
    fontSize: 16,
    fontFamily: 'Segoe UI',
    marginTop: 24,
    marginBottom: 20,
  },
  barberList: {
    width: '100%',
    marginBottom: 20,
  },
});