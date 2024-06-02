import { StyleSheet,View,Text } from "react-native"

export default function TaskCard({task}){
    return(
        <View style={styles.cont}>
            <Text style={{fontSize: 16, fontWeight:"bold"}}>{task}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cont:{
        paddingHorizontal:20,
        height:128,
        borderWidth: 1,
        borderColor:"#E8D1BA",
        borderRadius: 10,
        backgroundColor:"#FBF9F7",
        marginBottom:16,
        justifyContent:"center"
    }
})