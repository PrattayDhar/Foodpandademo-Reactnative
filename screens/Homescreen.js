import { TextInput, View} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";

export default function Homescreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ paddingHorizontal: 18, paddingVertical: 7, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, borderRadius: 20, borderWidth: 1, borderColor: 'gray' }}>
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput
            style={{ flex: 1, marginLeft: 8, fontSize: 16 }}
            placeholder='Restaurants'
          />
        </View>
        <View style={{ padding: 8, borderRadius: 24, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
        </View>
      </View>
    </SafeAreaView>
  )
}