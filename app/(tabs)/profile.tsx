import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
  TouchableOpacity
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function profileScreen() {
  

  // interface IData{
  //   service: string,
  //   haircutDate: string,
  //   price: string
  // }

  // const [data, setData] = React.useState<IData[]>(
  //   [
  //     {
  //       service: "",
  //       haircutDate: "",
  //       price: ""
  //     }
  //   ]  
  // )

  // React.useEffect(() => {
  //   try{
  //     const dat: IData[] = await AsyncStorage.getItem('serviceHistory')
  //     setData(dat)
  //   }
  // }, [])




  // const defaultWidth = 372
  // const defaultColor = '#eccc10'
  // const tableBorder = 1



  return (
    <ScrollView style={styles.background}>
        <TouchableOpacity style={styles.options}>
          <View style={styles.optionsLabels}>
            <Text style={styles.optionsLabel}>.</Text>
            <Text style={styles.optionsLabel}>.</Text>
            <Text style={styles.optionsLabel}>.</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.profile}>
          <View style={styles.profileImageBackground}>
            {/* <Image style={styles.profileImage} source={require('@/assets/images')}/> */}
            <View style={styles.profileImage}></View>
          </View>

          <View style={styles.profileDescription}>
            <Text style={[styles.profileLabelName, styles.profileLabel]}>Name</Text>
            <Text style={[styles.profileLabelCity, styles.profileLabel]}>City</Text>
          </View>
        </View>

        <View style={styles.tableSection}>
          <View style={styles.history}>
            <Text style={styles.historyLabel}>History</Text>
          </View>
          <View>

            <View style={styles.table}>
              <View style={[styles.tableHeader, styles.tableGeneric]}>
                <Text style={[styles.tableText, styles.tableHeaderText, {borderRightWidth: 1, borderColor: '#eccc10'}]}>Service</Text>
                <Text style={[styles.tableText, styles.tableHeaderText]}>Haircute date</Text>
                <Text style={[styles.tableText, styles.tableHeaderText, {borderLeftWidth: 1, borderColor: '#eccc10'}]}>Price</Text>
              </View>

              {/* {
                __map((item, index) => {*/}
                  <View style={[styles.tableData, styles.tableGeneric]}>
                    <Text style={[styles.tableText, styles.tableDataText, {borderRightWidth: 1, borderColor: '#eccc10'}]}>Barba</Text>
                    <Text style={[styles.tableText, styles.tableDataText]}>hoje</Text>
                    <Text style={[styles.tableText, styles.tableDataText, {borderLeftWidth: 1, borderColor: '#eccc10'}]}>R2.00</Text>
                  </View>
              {/*
                })
              } */}
            </View>


          </View>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    flex: 1,
  },
  options: {
    backgroundColor: '#eccc10',
    borderRadius: 35,
    width: 40,
    height: 40,
    position: 'absolute',
    top: 30,
    right: 30
  },
  optionsLabels: {
    position: 'absolute',
    right: '38%',
    top: '-16%'
  },
  optionsLabel: {
    color: '#00000',
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 10
  },
  history: {
    width: 372,
    backgroundColor: '#eccc10',
    padding: 5,
    borderRadius: 12,
  },
  historyLabel: {
    color: '#0f0f0f',
    textAlign: 'center',
    fontWeight: '500'
  },
  table: {
    display: 'flex',
  },
  tableHeader: {
    
  },
  tableHeaderText: {
    borderBottomWidth: 1
    ,
    borderColor: '#eccc10'
  },
  tableData: {},
  tableDataText: {},

  tableText: {
    width: 124,
    textAlign: 'center',
    color: '#f5f5f5',
    padding: 5
  },
  tableGeneric: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 372
  },
  tableSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 28,
    marginTop: 40
  },
  profileImageBackground: {
    backgroundColor: '#eccc10',
    borderRadius: 70,
    width: 140,
    height: 140
  },
  profileImage: {
    backgroundColor: '#de4a1b',
    width: 125,
    height: 125,
    borderRadius: 62,
    position: 'absolute',
    bottom: 0,
    left: '5%'
  },
  profileLabelName: {
    color: '#f5f5f5',
    textAlign: 'center'
  },
  profileLabelCity: {
    color: '#a5a5a5',
    textAlign: 'center'
  },
  profileLabel: {
    fontWeight: '700'
  },
  profileDescription: {
    display: 'flex',
    gap: 5,
    width: 372
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 150,
    height: 200
  }
});
