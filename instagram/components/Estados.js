import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default class Estados extends React.Component {
  render() {
    return (
      <ScrollView  horizontal={true} style={styles.container}>
      <View>
            <Image style={styles.logo1} source={require('../assets/estado.jpg')} />
            <Text style={styles.paragraph}>
          yuralo2014
        </Text >
       </View>
       <View>
          <Image style={styles.logo1} source={require('../assets/estado1.jpg')} />
            <Text style={styles.paragraph}>
          yuralo2014
        </Text >
        </View>
        <View>
          <Image style={styles.logo1} source={require('../assets/estado2.jpg')} />
            <Text style={styles.paragraph}>
          yuralo2014
        </Text >
        </View>
          <View>
          <Image style={styles.logo1} source={require('../assets/estado3.jpg')} />
            <Text style={styles.paragraph}>
          yuralo2014
        </Text >
        </View>
         <View>
          <Image style={styles.logo1} source={require('../assets/estado4.jpg')} />
            <Text style={styles.paragraph}>
          yuralo2014
        </Text >
        </View>
         <View>
          <Image style={styles.logo1} source={require('../assets/estado3.jpg')} />
            <Text style={styles.paragraph}>
          yuralo2014
        </Text >
        </View>
      </ScrollView>
    
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal:10,
    flexDirection: 'row', 
  },
   paragraph: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft:10,
  },
   logo1: {
    height: 60,
    width: 60, 
    borderRadius: 30,
    marginLeft:10,
    borderColorSolid: 'red',
    
    
  }
  });