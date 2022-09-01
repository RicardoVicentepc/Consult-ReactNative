import React,{useState} from 'react';
import {Text,View,TextInput,Button,StyleSheet, Image} from 'react-native';
export default function Aplicacao(){
  const [gasolina,setGasolina] = useState()
  const [alcool,setAlcool] = useState()
  const [resultado,setResultado] = useState()
  const [imagem,setImagem] = useState()

  const imc = ()=>{
    const r = parseFloat(alcool) / parseFloat(gasolina);
    if(r < 0.7){
      setResultado("Combustivel mais viavel é o Alcool")   
      var img = require('./assets/images/download.jfif')
      setImagem(<Image source={img} style={{width:200, height:200}}></Image>)

    }else{
      setResultado("Combustivel mais viavel é a Gasolina")
      var img = require('./assets/images/gasosa.jfif')
      setImagem(<Image source={img} style={{width:200, height:200}}></Image>)
    }
  }
  return( 
        <View style={styles.tudo}>
          <View>
            <Text style={styles.titulo}> Combustivel </Text>
          </View>
          <View style={{margin:15}}>
            <Text>Alcool:  </Text>          
            <TextInput              
              style={styles.caixaDeTexto}
              placeholder='Insira o alcool'
              placeholderTextColor='#000'
              autoFocus={true}
              keyboardType={'numeric'}
              onChangeText = {text =>setAlcool(text)}
            />            
          </View>   
          <View style={{margin:15}}>
            <Text>Gasolina:  </Text>          
            <TextInput              
              style={styles.caixaDeTexto}
              placeholder='Insira a gasolina'
              placeholderTextColor='#000'
              autoFocus={true}
              keyboardType={'numeric'}
              onChangeText = {text =>setGasolina(text)}
            />            
          </View> 
          <View style={{margin:15,}}>
            <Button
              title='Consultar '
              //onPress={msg}
              onPress = {()=>imc()}
            />
          </View>
          <View style={{margin:15}}>
              <Text style={styles.resposta}>{resultado}</Text>
              <Text style={styles.resposta}>{imagem}</Text>
          </View>
          <View style={{margin:15}}>
          </View>
        </View>
  );
}
const styles = StyleSheet.create({
  tudo:{
    backgroundColor:'#fff',
    height:'100%',
    margin: 0,
    padding:0,
  },
  titulo:{
    fontSize:30,
    textAlign:'center',
    marginTop:25,
    marginBottom:10
  },
  caixaDeTexto:{
    borderWidth:1,
    borderRadius:40,
    paddingLeft: 25,
    height:60    
  },
  resposta:{
    color:'#000',
    fontSize:25,
    textAlign:'center',
    marginTop:30
  }
});