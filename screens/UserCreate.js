import React,{useState} from 'react';
import { Button, ScrollView, Text, TextInput, View,StyleSheet } from 'react-native';
import {db} from '../db';
export default function UserCreateScreen(props){

    const [state, setState] = useState({name:'',lastName:'',email:'',age:18,imageUrl:'https://img.icons8.com/bubbles/2x/user-male.png'});

    const changeState=(name,value)=>{
        setState({...state,[name]:value});
    }


    const save=()=>{
        const {name,lastName,email}=state;
        if(name!=null && name.length == 0){
            alert('Name is empty');
            return;
        }
        if(lastName!=null && lastName.length == 0){
            alert('Last Name is empty');
            return;
        }
        if(email!=null && email.length == 0){
            alert('Email is empty');
            return;
        }

        db.users.push({...state})

       console.log('save',state);
       props.navigation.navigate('UsersList')
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Entry name" onChangeText={(e)=>changeState('name',e)} style={styles.textInput}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Entry last name" onChangeText={(e)=>changeState('lastName',e)} style={styles.textInput}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Entry email" onChangeText={(e)=>changeState('email',e)} style={styles.textInput}/>
            </View>
            <View>
                <Button onPress={()=>save()} title="Save"/>          
            </View>
        </ScrollView> 
       
   )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:25
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    },
    textInput:{
        height:30,
        fontSize:16,
        padding:4,
    }
})
