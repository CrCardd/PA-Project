import * as React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";

interface BarberShopData {
  id: string;
  name: string;
  distance: string;
  openingHours: string;
  isOpen: boolean;
  imageUrl: ImageSourcePropType;
}
interface BarberCardProps {
  shop: BarberShopData;
  onBookNow: (shopId: string) => void;
}

export const BarberCard: React.FC<BarberCardProps> = ({ shop, onBookNow }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image
          resizeMode="cover"
          source={shop.imageUrl}
          style={styles.shopImage}
          accessible={true}
          accessibilityLabel={`${shop.name} barber shop image`}
        />
        <View style={styles.statusContainer}>
          <View style={styles.statusWrapper}>
            <Text style={styles.openStatus}>
              {shop.isOpen ? "Open Now" : "Closed"}
            </Text>
            <Text style={styles.hours}>{shop.openingHours}</Text>
          </View>
        </View>
        <View style={styles.shopInfoContainer}>
          <Text style={styles.shopName}>{shop.name}</Text>
          <Text style={styles.distance}>{shop.distance}</Text>
        </View>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => onBookNow(shop.id)}
          accessible={true}
          accessibilityLabel={`Book appointment at ${shop.name}`}
          accessibilityRole="button"
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    marginBottom: 20,
  },
  cardWrapper: {
    borderRadius: 12,
    padding: 16,
    marginRight:120
  },
  shopImage: {
    borderRadius: 12,
    aspectRatio: 0.96,
    width: "200%",
    height: "72%"
  },
  statusContainer: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusWrapper: {
    flexDirection: "row",
    gap: 5,
  },
  openStatus: {
    color: "#79FE58",
    fontSize: 11,
    fontFamily: "Segoe UI",
  },
  hours: {
    color: "#959595",
    fontSize: 10,
    fontFamily: "Segoe UI",
  },
  shopInfoContainer: {
    marginTop: 4,
  },
  shopName: {
    color: "#FFFFFF",
    fontSize: 11,
    fontFamily: "Segoe UI",
    fontWeight: "700",
    letterSpacing: 2,
  },
  distance: {
    color: "#959595",
    fontSize: 11,
    fontFamily: "Segoe UI",
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
});
