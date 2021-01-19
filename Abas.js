import React, {Component} from 'react';
import {Text, View, Image, TextInput, ScrollView} from "react-native";
import SampleComponent from "./SampleComponent"

const App = () => {
  return (
  
    <View>
      <ScrollView>
    <Text>Hello world</Text>
    <Text>Bullshit</Text>
 <SampleComponent/>
 
</ScrollView>
    </View>
    
    )
}

const BiarCepet = () => {
  return (
  <View>
  <Hudoro/>
  <Dasha/>
  <Fuck/>
  <Snake/>
  
  
  </View>
  
 ) 
  
}



const Hudoro = () => {
  return <Text style={{fontSize:30}} >Paper planes</Text>
}

const Dasha = () => {
  return (
    <View>
    <Text>Pussy ass nigga</Text>
    <Text>chickenshit</Text>
    <Text>Taran</Text>
    
    
    
    
    </View>
    
    
    )
}

const Fuck = () => {
  return (
    <Image source={{uri: "https://www.linkpicture.com/q/Screenshot_2020-12-26-23-28-24-77.jpg"}} style={{width:100, height:100}}/>
    
    
    
    )
}

class Snake extends Component {
  render() {
    return(
      <View>
      <Image 
      source={{uri: 'https://www.linkpicture.com/q/Screenshot_2020-12-26-23-28-24-77.jpg'}}
      style={{width:100, height:100}} />
      <Text style={{color: 'blue', fontSize: 24}}>Caption</Text>
      </View>
      )
  }
}

export default App;
