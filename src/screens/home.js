import { View, StyleSheet, FlatList, Pressable, SafeAreaView, TextInput} from 'react-native'
import React, { useState } from 'react'
import Text from '../Components/text/text'
import PlanetHeader from '../Components/planet-header'
import { PlanetList } from '../Components/data/planet-list'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons' 
import { useNavigation } from '@react-navigation/native'



const PlanetItems = ({item}) =>{
  const {name, color} = item;
  const navigation = useNavigation();

  return(
    <Pressable onPress={()=>{
      navigation.navigate('Details', {planet: item})
 }} style={styles.item}>
   <View style={{flexDirection: 'row', alignItems: 'center'}}>
   <View style={[styles.circle, {backgroundColor: color}]}></View>
     <Text preset='h4' style={styles.container}>{name}</Text>
   </View>
     <AntDesign name="right" size={20} color="white" />
 </Pressable>
  )
 
}

export default function Home({navigation}) {
  const [list, setList] = useState(PlanetList)

  const renderItem = ({item}) =>{
    return <PlanetItems item={item}></PlanetItems>
  }
  const searchFilter = (text) => {
    const filterList = PlanetList.filter(item =>{
      const itemName = item.name.toLowerCase();
      const textName = text.toLowerCase();
      return itemName.indexOf(textName) > -1;
    })
    setList(filterList);
  }
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholder="Type Your Planet Name"
        placeholderTextColor={colors.white}
        autoCorrect = {false}
        style={styles.searchInput}
        onChangeText={(text)=>{searchFilter(text)
        }}
      >

      </TextInput>
         <FlatList
           contentContainerStyle={styles.list}
            data={list}
            // keyExtractor={(item) => item.name}
            renderItem={renderItem}
            ItemSeparatorComponent = {()=><View style={styles.separator}/>}
            />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        color: colors.white,
        textTransform: "uppercase",
        marginLeft: spacing[5],
        
    },
    list: {
      padding: spacing[3]
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: spacing[3]
    },
    circle: {
      width: 20,
      height: 20,
      borderRadius: 10,
    },
    separator: {
      borderBottomWidth: .5,
      borderBottomColor: colors.white,
    },
    searchInput: {
      color: colors.white,
      padding: spacing[4]

    }
})