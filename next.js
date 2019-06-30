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
      }]}> What Kind of Activity you would like to have ? </Text>
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


       
       <Text style={[material.titleWhite ,{
        color:'#4e4e4e', marginTop:30 , textAlign:'center'
      }]}>
       Expected number of attendees :
         </Text>
         <TextInput  
        placeholder="#"  
        underlineColorAndroid='transparent'  
        style={{backgroundColor:'white', borderColor:'#4e4e4e', borderWidth:2, borderRadius:15, marginLeft:150, marginRight:150,marginTop:15, fontSize:20, height:40}}  
        keyboardType={'numeric'}
                 />  
   
    
    
     <TouchableOpacity
       style={{ alignItems: 'center',
       backgroundColor: '#39DB9D',
       marginRight: 50,
       marginLeft :50,
       marginTop :40,
       padding: 10,
       color:'white',
       borderRadius:200
       
    }}
       
     >
       <Text style={{color:'white', fontSize:20}}>Next</Text>

     </TouchableOpacity>

     <View style ={{ justifyContent: 'center',
                      alignItems: 'center',}}>
          <Image  source={require('./images/next.png')}  style={{width: 240, height: 150 ,marginTop :15}}>
          </Image>
      </View>
      
    

     
    </View>
  );
}