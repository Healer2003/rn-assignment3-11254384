import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import User from './Components/User';
import Search from './Components/Search';
import { category } from './Components/ScrollItems';
import CategoryCard from './Components/CategoryCard';
import { tasks } from './Components/ScrollItems';
import TaskCard from './Components/TaskCard';

export default function App() {
  const items = ({item})=>{
    return <TaskCard task={item.name}/>
  }
  return (
    <View style={styles.container}>
      <User/>
      <Search/>
      <Text style={[styles.text,{fontWeight:600}]}>Categories</Text>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {
            category.map((item, index)=>{
              return(
              <CategoryCard key={index} big={item.name} small={item.task} pic={item.image}/>)
            })
          }
        </ScrollView>
      </View>
      <Text style={[styles.text,{fontWeight:600}]}>Ongoing Task</Text>

      <View style={{marginVertical: 15,flex:1}}>
        <FlatList data={tasks} showsVerticalScrollIndicator={false} renderItem={items} keyExtractor={item =>item.id}/>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop:60,
    paddingHorizontal:15,
  },
  text:{
    fontSize:20,
  }


});
