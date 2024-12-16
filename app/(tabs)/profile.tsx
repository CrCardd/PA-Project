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
    
  };



  return (
    <View>
        
    </View>
  );
}

const styles = StyleSheet.create({

});
