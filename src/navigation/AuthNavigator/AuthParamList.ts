import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthParamList = {
  LoggedOutScreen: undefined;
  SMSScreen: undefined;
  OTPScreen: undefined;
  RegisterScreen: {
    isInfluencer: boolean;
  };
  LoginScreen: undefined;
  AccountTypeScreen: undefined;
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};
