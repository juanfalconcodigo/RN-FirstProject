import React,{useEffect,useState} from 'react';
import { View,Text, ScrollView } from 'react-native';
import { ListItem, Avatar } from "react-native-elements";
import {db} from '../db';


export default function UserListScreen(props){

   const [users, setUsers] = useState({data:[]});

   useEffect(()=>{
       setUsers({data:db.users})
   },[])

   

    return(
        <ScrollView>
           {users.data.map((e,i)=>(<ListItem key={i}  onPress={()=>alert(e.email)} bottomDivider>
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:e.imageUrl
              }}
              rounded
            />
            <ListItem.Content>
                <ListItem.Title>{e.name}</ListItem.Title>
                <ListItem.Subtitle>{e.lastName}</ListItem.Subtitle>
            </ListItem.Content>
            
           </ListItem>))}

        </ScrollView>
        
    )

}