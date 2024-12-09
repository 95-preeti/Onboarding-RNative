import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

export default function OnboardingSceen() {
  return (
    <View style={styles.container}>
      <Onboarding
              containerStyles={{paddingHorizontal:15}}
             pages={[
               {
                 backgroundColor: '#fff',
                 image: (
                    <View style={styles.lottie}>
                       <LottieView source={require('../assets/animations/boost.json')} autoPlay loop />
                    </View>
                 ),
                 title: 'Boost Productivity',
                 subtitle: 'Subscribe this channel to boost your productivity level',
               },

               {
                backgroundColor: '#fff',
                image: (
                   <View>
                       <Text>Hello world</Text>
                   </View>
                ),
                title: 'Work Seamlesly',
                subtitle: 'Get your work done seamlessly without interruption',
              },
              {
                backgroundColor: '#fff',
                image: (
                   <View>
                       <Text>Hello world</Text>
                   </View>
                ),
                title: ' Higher Goals',
                subtitle: ' By boosting your productivity we help you to achieve higher goals',
              },



             ]}
         />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
      width: 300,
      height: 400
    }
})