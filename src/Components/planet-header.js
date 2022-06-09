import { View, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function PlanetHeader({backButton, title='THE PLANETS'}) {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
      {
            backButton &&(
                <Pressable onPress={()=>{
                    navigation.goBack()
                    }}>
                    <AntDesign name="left" size={24} color="white"/>
                </Pressable>
            )
        }
      <Text preset='h2' style={{textTransform: 'uppercase', marginLeft: 10}}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginBottom: 30,
        padding: spacing[12],
        borderBottomWidth: .5,
        borderBottomColor: colors.white, 
        textTransform: 'uppercase',
        flexDirection: 'row',
        alignItems: 'center'


    }
})