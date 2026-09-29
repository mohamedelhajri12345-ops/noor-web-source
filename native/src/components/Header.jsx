import React from 'react';
import {View,Text} from 'react-native';
import {colors} from '../theme';
export default function Header({title='القرآن الكريم',subtitle}){return <View style={{flexDirection:'row-reverse',alignItems:'center',justifyContent:'space-between',paddingHorizontal:16,paddingTop:10,paddingBottom:12}}><View><Text style={{color:colors.goldLight,fontSize:18,fontWeight:'800',textAlign:'right'}}>{title}</Text>{subtitle?<Text style={{color:colors.muted,fontSize:11,textAlign:'right',marginTop:2}}>{subtitle}</Text>:null}</View><Text style={{color:colors.gold,fontSize:24}}>☾</Text></View>}
