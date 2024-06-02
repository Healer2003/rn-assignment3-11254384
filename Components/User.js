import { StyleSheet,View,Text,Image } from "react-native";

export default function(){
    return(
        <View style={styles.first}>
      <View style={{flex:1}}>
      <Text style={{fontSize:32, fontWeight:"bold"}}>Hello, Devs</Text>
      <Text style={{fontSize:16,fontWeight:"medium"}}>14 tasks today</Text>
      </View>
      <View style={{
       borderRadius:50, 
       backgroundColor:"#FBF9F7",
       width:55, 
       height:55, 
       justifyContent:"center", 
       alignItems:"Center",
       flexDirection:"row"
      }}>
      <Image source={require("../assets/person.png")}/>
      </View>
      </View>
    );
}

const styles = StyleSheet.create({
    first:{
        flexDirection:"row",
        alignItems:"center",
          
    }
})