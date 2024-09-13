import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package '@brbtcoficial/three-dots-loader' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type ThreeDotsLoaderProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ThreeDotsLoaderView';

export const ThreeDotsLoaderView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ThreeDotsLoaderProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
