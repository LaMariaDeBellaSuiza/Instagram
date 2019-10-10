import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import config from '../config';
import { Video } from 'expo-av';


export default class AssetExample extends React.Component {

constructor(){
  super();
  this.state = {
    liked: false,
    screenWidth:Dimensions.get('window').width
  };
}

likedToggled(){
  this.setState({
    liked: !this.state.liked
  })
}
  render() {
    const imagHeight = Math.floor(this.state.screenWidth * 1.1);
    const imagUri = 'https://images.pexels.com/photos/2996020/pexels-photo-2996020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' + '=s' + imagHeight + '-c';
    const heartIcon = this.state.liked ? 'red': null;
    return (
      <ScrollView style={{flex:1, width:100 + "%", height: 100 + "%"}}>
        <View style={styles.tempNav}>
        <View style={{flexDirection: 'row', alignItems:"center"}}> 
         <Image style={{height:30, width:30}} source={require('../assets/camara.png')}/>  
          <Text style={{marginLeft:10}}>Instagram</Text>
        </View>
        <View style={{flexDirection: 'row',alignItems:'center'}}> 
        <Image style={{height:30, width:30}} source={require('../assets/televisor.png')}/>
         <Image style={{height:30, width:30, marginLeft:20}} source={require('../assets/enviar.png')}/>      
        </View>
        </View>

        <ScrollView  horizontal={true} style={styles.perfil}>
      <View >
            <Image style={styles.logo1} source={require('../assets/estado.jpg')} />
            <Text style={styles.paragraph}>
          felipepelaez
        </Text >
       </View>
         <View>
          <Image style={styles.logo1} source={require('../assets/lokillo.jpg')} />
            <Text style={styles.paragraph}>
          lokilloflorez
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
          dahian_lorena
        </Text >
        </View>
          <View>
          <Image style={styles.logo1} source={require('../assets/estado3.jpg')} />
            <Text style={styles.paragraph}>
          vanepelaez1
        </Text >
        </View>
         <View>
          <Image style={styles.logo1} source={require('../assets/estado4.jpg')} />
            <Text style={styles.paragraph}>
          linatejeiro
        </Text >
        </View>
         <View>
          <Image style={styles.logo1} source={require('../assets/estado3.jpg')} />
            <Text style={styles.paragraph}>
          arturosierra
        </Text >
        </View>
      </ScrollView>
        
        <View style={styles.perfil}>
        <View style={{flexDirection: 'row', alignItems:"center"}}> 
         <Image style={styles.userPic} source={require('../assets/estado.jpg')}/>  
          <Text style={{marginLeft:10}}>felipepelaez</Text>
        </View>
        <View style={{alignItems:'center'}}> 
         <Text style={{ fontSize: 30}} >...</Text>
        </View>
        </View>
        
        <TouchableOpacity onPress={()=>{this.likedToggled();}}>
        <Image style={{width: this.state.screenWidth , height: 425}} source={{ uri: imagUri}}/>    
        </TouchableOpacity> 
        <View style={styles.iconBar}>
        <Image style={[styles.icon, {height:25, width:25, tintColor:heartIcon}]} source={config.images.heartIcon}/>
        <Image style={[styles.icon, {height:25, width:25, marginLeft:18}]} source={config.images.bubbleIcon}/>
        <Image style={[styles.icon, {height:25, width:25, marginLeft:18}]} source={config.images.arrowIcon}/>
        </View> 
            
        <View style={styles.comentBar}>

        <Text>120 Likes</Text>
        <Text>tourcolegios Seguimos de promoción con</Text>
         <Text>@danielmondragonmusic </Text>
         <Text>. </Text>
         <Text>. </Text>
         <Text>. </Text>
         <Text>@producciones.rm </Text>
         <Text>@marketingescolar</Text>
         <Text>Contacto! 3132758853</Text>
        </View>


 <View style={styles.perfil}>
        <View style={{flexDirection: 'row', alignItems:"center"}}> 
         <Image style={styles.userPic} source={require('../assets/lokillo.jpg')}/>  
          <Text style={{marginLeft:10}}>lokilloflorez</Text>
        </View>
        <View style={{alignItems:'center'}}> 
         <Text style={{ fontSize: 30}} >...</Text>
        </View>
        </View>
        
        <TouchableOpacity onPress={()=>{this.likedToggled();}}>
          <Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{width: this.state.screenWidth , height: 425 }}/>   
  
        </TouchableOpacity> 
        <View style={styles.iconBar}>
        <Image style={[styles.icon, {height:25, width:25, tintColor:heartIcon}]} source={config.images.heartIcon}/>
        <Image style={[styles.icon, {height:25, width:25, marginLeft:18}]} source={config.images.bubbleIcon}/>
        <Image style={[styles.icon, {height:25, width:25, marginLeft:18}]} source={config.images.arrowIcon}/>
        </View> 
            
        <View style={styles.comentBar}>

        <Text>120 Likes</Text>
        <Text>tourcolegios Seguimos de promoción con</Text>
         <Text>@danielmondragonmusic </Text>
         <Text>. </Text>
         <Text>. </Text>
         <Text>. </Text>
         <Text>@producciones.rm </Text>
         <Text>@marketingescolar</Text>
         <Text>Contacto! 3132758853</Text>
        </View>


      
      </ScrollView>
    
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width:100 + "%",
     height: 56, 
     paddingHorizontal: 10,
     backgroundColor: "rgb(250,250,250)",
     borderBottomColor: "rgb(233,233,233)",
     borderBottom: StyleSheet.hairlineWidth,
     justifyContent: 'space-between',
     alignItems:'center',
     flexDirection: 'row',
 }, 
 perfil: {
    width:'100%',
    height: config.styleConstants.rowHeight,  
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  userPic:{
    height: 40,
    width: 40,
    borderRadius: 20,
  }, 
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: '100 %',
    borderColor: 'rgb(233,233,233)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 6,
  } ,
  comentBar:{
    width: '100 %',
    height: config.styleConstants.rowHeight, 
    borderColor: 'rgb(233,233,233)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
   logo1: {
    height: 60,
    width: 60, 
    borderRadius: 30,
    marginHorizontal: 18,
    borderColorSolid: 'red',  
  },
     paragraph: {
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
});
