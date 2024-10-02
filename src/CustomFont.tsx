import React from 'react';
import {Text, View} from 'react-native';

const CustomFont = () => {
  return (
    <View>
      <Text className="text-red-500 text-3xl font-normal">
        Without CustomFont
      </Text>
      <Text className="text-red-500 text-3xl py-10 font-normal font-EduAUVICWANTDots_regular">
        With CustomFont
      </Text>
      <Text
        className="text-red-500 text-3xl py-10"
        style={{
          fontFamily: 'EduAUVICWANTDots-Regular',
        }}>
        CustomFont without tailwindcss
      </Text>
      <Text className="text-red-500 text-3xl font-bold font-EduAUVICWANTDots_bold">
        With CustomFont
      </Text>
    </View>
  );
};

export default CustomFont;
