import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function(){
    return(
        <View style={[styles.in,{marginVertical:25}]}>
        
        <View style={[styles.in, {backgroundColor:"#FBF9F7", borderRadius:13, paddingVertical:13, paddingHorizontal:10, flex:1, marginRight:20, height:48}]}>
          <Image source={require('../assets/Vector.png')}/>
        <TextInput style={{
            fontSize:17, 
            marginLeft:15}} placeholderTextColor={"black"} placeholder='Search'/>  
        </View>
        
        <View style={{
            paddingVertical:13, 
            paddingHorizontal:10,
            height:48,
            borderRadius:13,
            backgroundColor:"#F0522F"}}>
        <Image source={require("../assets/Vector1.png")}/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    in:{
        flexDirection:"row",
        alignItems:"center",
    }
})