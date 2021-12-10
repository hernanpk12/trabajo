import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,TextInput,View,Button, TouchableOpacity, Alert, } from 'react-native';


export default class persona extends Component{
  
  

  constructor(props){
        super(props);
        this.state ={TextInput_id:'',
        TextInput_nif:'',
        TextInput_nombre: '',
        TextInput_apellido1: '',
        TextInput_apellido2: '',
        TextInput_ciudad: '',
        TextInput_clave:'',
        TextInput_direccion:'',
        TextInput_telefono:'',
        TextInput_fecha_nacimiento:'',
        TextInput_sexo:'',
        TextInput_tipo:'',

      };

    }

    //direccion ip:172.16.6.8

    insertarPersona = ()=>{
      //consumir API
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/insertarPersona.php',
      {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'content-type':'application/json',
        },

        body: JSON.stringify(
          {
            nombre: this.state.TextInput_nombre,
            id: this.state.TextInput_id,
            apellido1: this.state.TextInput_apellido1,
            nif: this.state.TextInput_nif,
            apellido2: this.state.TextInput_apellido2,
            ciudad: this.state.TextInput_ciudad,
            clave: this.state.TextInput_clave,
            direccion: this.state.TextInput_direccion,
            telefono: this.state.TextInput_telefono,
            fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
            sexo: this.state.TextInput_sexo,
            tipo: this.state.TextInput_tipo
            
          }
        )
      }
      ).then((response)=> response.json())
      .then((responseJson)=> 
      {
        alert(responseJson);

      }).catch((error)=>
      {
        console.error(error);
      }
      );




    }
    actualizarPersona = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/editarPersona.php',
      {
        method: 'PUT',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            id: this.state.TextInput_id,
            nif: this.state.TextInput_nif,
            nombre: this.state.TextInput_nombre,
            apellido1: this.state.TextInput_apellido1,
            apellido2: this.state.TextInput_apellido2,
            ciudad: this.state.TextInput_ciudad,
            clave: this.state.TextInput_clave,
            direccion: this.state.TextInput_direccion,
            telefono: this.state.TextInput_telefono,
            fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
            sexo: this.state.TextInput_sexo,
            tipo: this.state.TextInput_tipo
            
          }
        )
      }

      ).then((response)=> response.json())
      .then((responseJson)=>
      {
        alert('registro Actualizado');
      }
      ).catch((error)=>
      {
        console.error(error);
      }
      )
      
    }
    eliminarPersona = ()=>{
      
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/eliminarpersona.php',
      {
        method: 'DELETE',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            persona_id: this.state.TextInput_id
          }
        )
      }

      ).then((response)=> response.json())
      .then((responseJson)=>
      {
        alert('registro eliminado');
      }
      ).catch((error)=>
      {
        console.error(error);
      }
      )
      
      
    }
    listarPersona = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/ListarTodasPersonas.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            id: this.state.TextInput_id,
            nif: this.state.TextInput_nif,
            nombre: this.state.TextInput_nombre,
            apellido1: this.state.TextInput_apellido1,
            apellido2: this.state.TextInput_apellido2,
            ciudad: this.state.TextInput_ciudad,
            clave: this.state.TextInput_clave,
            direccion: this.state.TextInput_direccion,
            telefono: this.state.TextInput_telefono,
            fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
            sexo: this.state.TextInput_sexo,
            tipo: this.state.TextInput_tipo

          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
              TextInput_id: responseJson[0]['id'],
              TextInput_nif: responseJson[0]['nif'],
              TextInput_nombre: responseJson[0]['nombre'],
              TextInput_apellido1: responseJson[0]['apellido1'],
              TextInput_apellido2: responseJson[0]['apellido2'],
              TextInput_ciudad: responseJson[0]['ciudad'],
              TextInput_clave: responseJson[0]['clave'],
              TextInput_direccion: responseJson[0]['direccion'],
              TextInput_telefono: responseJson[0]['telefono'],
              TextInput_fecha_nacimiento: responseJson[0]['fecha_nacimiento'],
              TextInput_sexo: responseJson[0]['sexo'],
              TextInput_tipo: responseJson[0]['tipo'] 

            }
        )   
      }
      )
      
      
    }
    listarPersonaId = ()=>{
      fetch('ttp://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/ListarPersonaid.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            id: this.state.TextInput_id,
            nif: this.state.TextInput_nif,
            nombre: this.state.TextInput_nombre,
            apellido1: this.state.TextInput_apellido1,
            apellido2: this.state.TextInput_apellido2,
            ciudad: this.state.TextInput_ciudad,
            clave: this.state.TextInput_clave,
            direccion: this.state.TextInput_direccion,
            telefono: this.state.TextInput_telefono,
            fecha_nacimiento: this.state.TextInput_fecha_nacimiento,
            sexo: this.state.TextInput_sexo,
            tipo: this.state.TextInput_tipo
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
              TextInput_nif: responseJson[0]['nif'],
              TextInput_nombre: responseJson[0]['nombre'],
              TextInput_apellido1: responseJson[0]['apellido1'],
              TextInput_apellido2: responseJson[0]['apellido2'],
              TextInput_ciudad: responseJson[0]['ciudad'],
              TextInput_clave: responseJson[0]['clave'],
              TextInput_direccion: responseJson[0]['direccion'],
              TextInput_telefono: responseJson[0]['telefono'],
              TextInput_fecha_nacimiento: responseJson[0]['fecha_nacimiento'],
              TextInput_sexo: responseJson[0]['sexo'],
              TextInput_tipo: responseJson[0]['tipo'] 
            }
        )   
      }
      )
      
      
    }
   
    render() {     
            return (  
           
              
           <View style = {MisEstilos.Maincontainer}>
              <Text style ={{fontSize:20, textAlign: 'center', marginBottom: 7}}>Registro de personas</Text>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el id" onChangeText={id => this.setState({TextInput_id:id})} underlineColorAndroid='transparent' value={this.state.TextInput_id}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el nif" onChangeText={nif => this.setState({TextInput_nif:nif})} underlineColorAndroid='transparent' value={this.state.TextInput_nif}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el nombre" onChangeText={nombre => this.setState({TextInput_nombre:nombre})} underlineColorAndroid='transparent' value={this.state.TextInput_nombre}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el apellido1" onChangeText={apellido1 => this.setState({TextInput_apellido1:apellido1})} underlineColorAndroid='transparent' value={this.state.TextInput_apellido1}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el apellido2" onChangeText={apellido2 => this.setState({TextInput_apellido2:apellido2})} underlineColorAndroid='transparent' value={this.state.TextInput_apellido2}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el cuidad" onChangeText={cuidad => this.setState({TextInput_ciudad:cuidad})} underlineColorAndroid='transparent' value={this.state.TextInput_ciudad}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el direccion" onChangeText={direccion => this.setState({TextInput_direccion:direccion})} underlineColorAndroid='transparent' value={this.state.TextInput_direccion}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el telefono" onChangeText={telefono => this.setState({TextInput_telefono:telefono})} underlineColorAndroid='transparent' value={this.state.TextInput_telefono}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el fecha nacimiento" onChangeText={fecha_nacimiento => this.setState({TextInput_fecha_nacimiento:fecha_nacimiento})} underlineColorAndroid='transparent' value={this.state.TextInput_fecha_nacimiento}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el sexo" onChangeText={sexo => this.setState({TextInput_sexo:sexo})} underlineColorAndroid='transparent' value={this.state.TextInput_sexo}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el tipo" onChangeText={tipo => this.setState({TextInput_tipo:tipo})} underlineColorAndroid='transparent' value={this.state.TextInput_tipo}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el clave" onChangeText={clave => this.setState({TextInput_clave:clave})} underlineColorAndroid='transparent' value={this.state.TextInput_clave}/>


              
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.insertarPersona}><Text style={{textAlign:'center'}}>agregar</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.actualizarPersona}><Text style={{textAlign:'center'}}>editarPersona</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.eliminarPersona}><Text style={{textAlign:'center'}}>eliminarPersona</Text></TouchableOpacity>

              


           </View> 
           
        );
      }
}

const MisEstilos = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  TextoInput:{
    textAlign: 'center',
    width: '50%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,

  },
  EstiloBoton:{

    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4' 

  },
  TextoTitulos:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  RowViewContainer:{
    fontSize:20,
    paddingRight:10,
    paddingTop:10,
    paddingLeft:10,
    paddingBottom:10
  }
});