import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button, Alert, Dimensions, TouchableOpacity  } from 'react-native';
import config from '../config';

export default class Imagen extends React.Component {
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
    const imagUri = 'https://images.pexels.com/photos/2909761/pexels-photo-2909761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' + '=s' + imagHeight + '-c';
     const imagUri3 = 'https://images.pexels.com/photos/2049561/pexels-photo-2049561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' + '=s' + imagHeight + '-c';
      const imagUri4 = 'https://images.pexels.com/photos/3007318/pexels-photo-3007318.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' + '=s' + imagHeight + '-c';
       const imagUri5 = 'https://images.pexels.com/photos/2944191/pexels-photo-2944191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' + '=s' + imagHeight + '-c';
    const heartIcon = this.state.liked ? 'red': null;
    return (
      <ScrollView>
         <View style={styles.perfil}>
        <View style={{flexDirection: 'row', alignItems:"center"}}> 
         <Image style={styles.userPic} source={require('../assets/estado1.jpg')}/>  
          <Text style={{marginLeft:10}}>dahian_lorena</Text>
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
         <Image style={styles.userPic} source={require('../assets/estado2.jpg')}/>  
          <Text style={{marginLeft:10}}>vanepelaez1</Text>
        </View>
        <View style={{alignItems:'center'}}> 
         <Text style={{ fontSize: 30}} >...</Text>
        </View>
        </View>
        
        <TouchableOpacity onPress={()=>{this.likedToggled();}}>
        <Image style={{width: this.state.screenWidth , height: 425}} source={{ uri: imagUri3}}/>    
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
         <Image style={styles.userPic} source={require('../assets/estado3.jpg')}/>  
          <Text style={{marginLeft:10}}>linatejeiro</Text>
        </View>
        <View style={{alignItems:'center'}}> 
         <Text style={{ fontSize: 30}} >...</Text>
        </View>
        </View>
        
        <TouchableOpacity onPress={()=>{this.likedToggled();}}>
        <Image style={{width: this.state.screenWidth , height: 425}} source={{ uri: imagUri4}}/>    
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
         <Image style={styles.userPic} source={require('../assets/estado4.jpg')}/>  
          <Text style={{marginLeft:10}}>arturosierra</Text>
        </View>
        <View style={{alignItems:'center'}}> 
         <Text style={{ fontSize: 30}} >...</Text>
        </View>
        </View>
        
        <TouchableOpacity onPress={()=>{this.likedToggled();}}>
        <Image style={{width: this.state.screenWidth , height: 425}} source={{ uri: imagUri5}}/>    
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
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: '100 %',
    borderColor: 'rgb(233,233,233)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
   userPic:{
    height: 40,
    width: 40,
    borderRadius: 20,
  }, 
  perfil: {
    width:'100%',
    height: config.styleConstants.rowHeight,  
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
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
  });