import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,TextInput,View,Button, TouchableOpacity, Alert, } from 'react-native';
export default class persona extends Component{


  constructor(props){
        super(props);
        this.state ={TextInput_id_alumno:'', TextInput_id_asignatura:'', TextInput_id_curso_escolar};

    }

    //direccion ip:172.16.6.8

    insertarMatricula = ()=>{
      //consumir API
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/insertarMatriculaAlumno.php',
      {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'content-type':'application/json',
        },

        body: JSON.stringify(
          {
           id_alumno:this.state.TextInput_id_alumno,
           id_asignatura:this.state.TextInput_id_asignatura,
           id_curso_escolar:this.state.TextInput_id_curso_escolar
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
    actualizarMatricula = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/editarMatriculaAlumno.php',
      {
        method: 'PUT',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
           id_alumno:this.state.TextInput_id_alumno,
           id_asignatura:this.state.TextInput_id_asignatura,
           id_curso_escolar:this.state.TextInput_id_curso_escolar
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
    eliminarMatricula = ()=>{
      
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/eliminarMatriculaAlumno.php',
      {
        method: 'DELETE',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            id_alumno:this.state.TextInput_id_alumno
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
    listarMatricula = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/listarMatriculaAlumno.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
           id_alumno:this.state.TextInput_id_alumno,
           id_asignatura:this.state.TextInput_id_asignatura,
           id_curso_escolar:this.state.TextInput_id_curso_escolar
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
              TextInput_id_alumno: responseJson[0]['id_alumno'],
              TextInput_id_asignatura: responseJson[0]['id_asignatura'],
              TextInput_id_curso_escolar: responseJson[0]['id_curso_escolar']
            }
        )   
      }
      )
      
      
    }
    listarMatriculaId = ()=>{
      fetch('http://192.168.1.57:8080/ApiMatriculasGrupoSabado/Modelo/listarMatriculaAlumnoid.php',
      {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-type':'application/json',

        },
        body: JSON.stringify(
          {
            id_alumno:this.state.TextInput_id_alumno,
           id_asignatura:this.state.TextInput_id_asignatura,
           id_curso_escolar:this.state.TextInput_id_curso_escolar
          }
        )
      }

      ).then((response)=> response.json)
      .then((responseJson)=>
      {
            this.state({
                TextInput_id_alumno: responseJson[0]['id_alumno'],
                TextInput_id_asignatura: responseJson[0]['id_asignatura'],
                TextInput_id_curso_escolar: responseJson[0]['id_curso_escolar']
            }
        )   
      }
      )
      
      
    }
   
    render() {     
            return (  
 
              <View style = {MisEstilos.Maincontainer}>
              <Text style ={{fontSize:20, textAlign: 'center', marginBottom: 7}}>Registro de curso</Text>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el id alumno" onChangeText={id_alumno => this.setState({TextInput_id_alumno:id_alumno})} underlineColorAndroid='transparent' value={this.state.TextInput_id_alumno}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el id asignatura" onChangeText={id_asignatura => this.setState({TextInput_id_asignatura:id_asignatura})} underlineColorAndroid='transparent' value={this.state.TextInput_id_asignatura}/>
              <TextInput style = {MisEstilos.TextoInput} placeholder="Ingrese el id curso escolar" onChangeText={id_curso_escolar => this.setState({TextInput_id_curso_escolar:id_curso_escolar})} underlineColorAndroid='transparent' value={this.state.TextInput_id_curso_escolar}/>
            
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.insertarMatricula}><Text style={{textAlign:'center'}}>agregar</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.actualizarMatricula}><Text style={{textAlign:'center'}}>editar</Text></TouchableOpacity>
              <TouchableOpacity activeOpacity={0.4} style={MisEstilos.EstiloBoton} onPress={this.eliminarMatricula}><Text style={{textAlign:'center'}}>eliminar</Text></TouchableOpacity>

                
           </View> 
        );
      }
}
const MisEstilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '50%',
    backgroundColor: '#00BCD4' 

  },
  TextoTitulos:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
});