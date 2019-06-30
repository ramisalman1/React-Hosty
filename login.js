render() {
    return (
      <View style={styles.container}>

        <View style ={{ justifyContent: 'center',
                        alignItems: 'center',}}>
            <Image  source={require('./images/name.png')}  style={{width: 180, height: 90 ,paddingTop :-10}}>
            </Image>
        </View>
       <View style={{flexDirection: 'row'}}>
         
          <Text style={{textAlign:'left' , paddingTop:50,  fontWeight:"bold" , color:"#39C8DC", fontSize:25, paddingLeft:60}}>
                  Login
            </Text>
            <Text style={{textAlign:'right' , paddingTop:50,  fontWeight:"bold" , color:"black", fontSize:25, paddingLeft:150}}>
                  Sign up
            </Text>
       </View>

       <TextInput placeholder="Enter you Email Please" style={{ backgroundColor: '#fff',
      padding: 10,
      marginRight: 50,
      marginLeft :50,
      marginTop :80,
      height: 40,
      borderColor:"#999",
       borderWidth:2,
       borderRadius:10}}>
       
       </TextInput>
       
       <TextInput placeholder="Password" style={{ backgroundColor: '#fff',
      padding: 10,
      marginRight: 50,
      marginLeft :50,
      marginTop :40,
      height: 40,
      borderColor:"#999",
       borderWidth:2,
       borderRadius:10}}>
       
       </TextInput>

       <TouchableOpacity
         style={{ alignItems: 'center',
         backgroundColor: '#39C8DC',
         marginRight: 50,
         marginLeft :50,
         marginTop :40,
         padding: 10,
         color:'white',
         borderRadius:25
         
      }}
         
       >
         <Text style={{color:'white', fontSize:20}}>Login</Text>

       </TouchableOpacity>

       <View style ={{ justifyContent: 'center',
                        alignItems: 'center',}}>
            <Image  source={require('./images/logo.png')}  style={{width: 240, height: 150 ,marginTop :15}}>
            </Image>
        </View>
      

       
      </View>
    );
  }