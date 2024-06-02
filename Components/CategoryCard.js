import { Image, StyleSheet, View,Text} from "react-native";

export default function CategoryCard({big,small,pic}){
    return(
        <View style={{
            backgroundColor:"#FBF9F7", 
            marginRight:20,
            marginVertical:20,
            paddingHorizontal:10,
            justifyContent:"center",
            width:186,
            height:192,
            borderRadius:10
            }}>
            <View>
                <Text style={styles.big}>{big}</Text>
                <Text style={[styles.small]}>{small}</Text>
            </View>
            
            <Image  style={styles.img} source={pic}/>
            
        </View>
    );
}
const styles = StyleSheet.create({
    big:{
        fontSize:16,
        fontWeight:"bold"
        
    },
    small:{
        fontSize:12,
        fontWeight:"500"
    },
    img:{
        alignSelf:"center",
        resizeMode:"contain",
        width:130,
        height:130,
    }
})