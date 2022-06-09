import { ScrollView, View, StyleSheet, SafeAreaView, Pressable, Linking } from 'react-native'
import React from 'react'
import Text from '../Components/text/text'
import PlanetHeader from '../Components/planet-header'
import { spacing } from '../theme/spacing'
import { EarthSvg, MercurySvg, ChevronSvg, NeptuneSvg, VenusSvg, UranusSvg, SaturnSvg, JupiterSvg, MarsSvg } from '../svg'
import { colors } from '../theme/colors'


const PlanetSection = ({title, value}) =>{
  return (
    <View  style={styles.PlanetSection1}>
        <Text preset='small' style={{textTransform: 'uppercase'}}>
            {title}
        </Text>
        <Text preset='h2'>
          {value}
        </Text>
    </View>
  )
}

export default function Details({navigation, route}) {
 const planet = route.params.planet;
  const {name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink} = planet;
  const SVGImage = () =>{
    switch(name){
      case 'mercury': 
      return <MercurySvg></MercurySvg>;
      case "earth":
        return <EarthSvg></EarthSvg>;
      case 'chevron' : 
      return <ChevronSvg></ChevronSvg>;
      case 'neptune' : 
      return <NeptuneSvg></NeptuneSvg>;
      case 'venus' : return <VenusSvg></VenusSvg>;
      case 'uranus' : return <UranusSvg></UranusSvg>;
      case 'saturn' : return <SaturnSvg></SaturnSvg>;
      case 'jupiter' : return <JupiterSvg></JupiterSvg>;
      case 'mars' : return <MarsSvg></MarsSvg>

    }
  }
  const pressLink = () =>{
    Linking.openURL(wikiLink)
  }
  return (
   
      <View>
          <PlanetHeader backButton={true}></PlanetHeader>
      <ScrollView>
        <View style={styles.planetImageView}>
          {SVGImage(name)}
        </View>
        <View style={styles.detailsView}>
          <Text style={{color: 'white', textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>{name}</Text>
          <Text style={{color: 'white', textAlign: 'center', marginTop: spacing[3], marginBottom: spacing[18],lineHeight: 21}}>{description}</Text>
          <View style={{height: 24}}/>
         <Pressable style={styles.source} onPress={pressLink}>
         <Text style={{color: 'white', }}>Source :</Text>
          <Text  preset='h4' style={{color: 'white', fontWeight: 'bold', }}>wikipedia</Text>
         </Pressable>
        </View>
        <PlanetSection title='ROTATION TIME' value={rotationTime}/>
        <PlanetSection title='revolution time' value={revolutionTime}/>
        <PlanetSection title='redius' value={radius}/>
        <PlanetSection title='average temp' value={avgTemp}/>
        <View style={{height: 130}}/>
      </ScrollView>
      <View style={{height: 40}}/>
      </View>
    
  )
}
const styles = StyleSheet.create({
  planetImageView: {
    padding: spacing[5],
    alignItems: 'center',
    justifyContent: 'center',

  },
  detailsView: {
    padding: spacing[4],
    marginHorizontal: spacing[4],
    color: 'white',
  },
  source:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[12],
    textAlign: 'center',
  },
  PlanetSection1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[2],
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
    paddingBottom: spacing[12]

  }
})