/* eslint-disable react-hooks/exhaustive-deps */
import {Text} from 'react-native';
import React, {FC, useEffect} from 'react';
import {SplashContainer} from './Style';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {BOTTOM_TAB_NAVIGATION} from '../../route/type';

type SplashScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const SplashScreen: FC<SplashScreenProps> = ({navigation}) => {
  //   const navigation = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: BOTTOM_TAB_NAVIGATION,
          },
        ],
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SplashContainer color="green">
      <Text>SplashScreen</Text>
    </SplashContainer>
  );
};

export default SplashScreen;
