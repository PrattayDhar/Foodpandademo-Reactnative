import { TextInput, View} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";

export default function Homescreen() {
  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 8, borderRadius: 24, borderWidth: 1, borderColor: 'gray' }}>
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput
            style={{ flex: 1, marginLeft: 8, fontSize: 16 }}
            placeholder='Restaurants'
          />
        </View>
      </View>
    </SafeAreaView>
  )
}