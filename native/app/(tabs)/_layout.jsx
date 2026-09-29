import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
const GOLD='#e8c766', MUTED='#8e9aad';
export default function TabsLayout(){return <Tabs screenOptions={{headerShown:false,tabBarActiveTintColor:GOLD,tabBarInactiveTintColor:MUTED,tabBarStyle:{backgroundColor:'#0a1422',borderTopColor:'rgba(232,199,102,0.12)',height:70,paddingTop:6,paddingBottom:10},tabBarLabelStyle:{fontSize:11,fontWeight:'700'}}}>
<Tabs.Screen name="index" options={{title:'الرئيسية',tabBarIcon:({color,size})=><Ionicons name="home-outline" color={color} size={size}/>}}/>
<Tabs.Screen name="quran" options={{title:'القرآن',tabBarIcon:({color,size})=><MaterialCommunityIcons name="book-open-page-variant-outline" color={color} size={size}/>}}/>
<Tabs.Screen name="tasbih" options={{title:'المسبحة',tabBarIcon:({color,size})=><MaterialCommunityIcons name="counter" color={color} size={size}/>}}/>
<Tabs.Screen name="games" options={{title:'الألعاب',tabBarIcon:({color,size})=><Ionicons name="game-controller-outline" color={color} size={size}/>}}/>
<Tabs.Screen name="more" options={{title:'المزيد',tabBarIcon:({color,size})=><Ionicons name="grid-outline" color={color} size={size}/>}}/>
</Tabs>}
