import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Layout() {
    return (
<Tabs>
<Tabs.Screen
name='Home'
options={{
    tabBarLabel:'Início',
    tabBarLabelStyle:{color:"#F98B88"},
    headerShown:false,
    tabBarIcon:({focused})=>
    focused?(
        <AntDesign name="home" size={24} color="black" />

    ):(
        <AntDesign name="home" size={24} color="black" />
    )
}}
 />

<Tabs.Screen
name='Activity'
options={{
    tabBarLabel:'Atividade',
    tabBarLabelStyle:{color:"#F98B88"},
    headerShown:false,
    tabBarIcon:({focused})=>
    focused?(
        <MaterialIcons name="notes" size={24} color="#7CB9E8" />
    ):(
        <MaterialIcons name="notes" size={24} color="black" />
    )
}}
 />
 
 
 <Tabs.Screen
name='settings'
options={{
    tabBarLabel:'Configurações',
    tabBarLabelStyle:{color:"#F98B88"},
    headerShown:false,
    tabBarIcon:({focused})=>
    focused?(
        <Feather name="settings" size={24} color="#7CB9E8" />
    ):(
      <Feather name="settings" size={24} color="black" />
    )
}}
 /> 
 
</Tabs>
);
}
