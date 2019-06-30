import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,Image,TouchableOpacity,YellowBox,Picker } from 'react-native';

import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import { material } from 'react-native-typography';
import Checkbox from 'react-native-modest-checkbox';
import RangeSlider from 'rn-range-slider';

export default class FlatListBasics extends Component {

  state = {user: ''}
  updateUser = (user) => {
     this.setState({ user: user })
  }
  

  render() {
    return (
      <View style={styles.container}>

        <View style ={{ justifyContent: 'center',
                        alignItems: 'center',}}>
            <Image  source={require('./images/name.png')}  style={{width: 180, height: 90 ,paddingTop :-10}}>
            </Image>
        </View>
       <Text style={[material.titleWhite ,{
        color:'#4e4e4e', marginTop:50 , marginRight:45,marginLeft:45 , textAlign:'center'
      }]}>Select the Price </Text>



<View style ={{ justifyContent: 'center',
                        alignItems: 'center',flexDirection: 'row', marginTop:-15}}>

<Text style={[material.titleWhite ,{
        color:'#39C8DC', marginTop:35 ,  textAlign:'center'
      }]}> 10$ </Text>

           <RangeSlider
    style={{width: 250, height: 80}}
    gravity={'center'}
    min={10}
    max={1000}
    step={20}
    selectionColor="#39C8DC"
    blankColor="#39C8DC"
    onValueChanged={(low, high, fromUser) => {
        this.setState({rangeLow: low, rangeHigh: high})
    }}/>
    <Text style={[material.titleWhite ,{
        color:'#39C8DC', marginTop:35 ,  textAlign:'center'
      }]}> 1000$ </Text>
        </View>

        <Text style={[material.titleWhite ,{
        color:'#4e4e4e', marginTop:50 , marginRight:45,marginLeft:45 , textAlign:'center'
      }]}> Select the location  ? </Text>
      <View style={{marginRight:45,marginLeft:45 ,borderColor: '#4e4e4e', borderWidth:2,
       marginRight: 50,
       marginLeft :50,
       marginTop :25,
       borderRadius:25}}>
          <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
             <Picker.Item label = "Steve" value = "steve" />
             <Picker.Item label = "Ellen" value = "ellen" />
             <Picker.Item label = "Maria" value = "maria" />
          </Picker>
         
       </View>
      
   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,

   
  },
  item: {
    flex:1,
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor:"green",
    textAlign:'center'
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold"
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
 }
})

