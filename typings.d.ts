declare module 'react-native-ico-phones-and-mobiles' {
    import { ReactNode } from 'react';

    type iconNames = '3g' |
      '3g' |
      '4g' |
      '4g' |
      '4g plus' |
      '4g' |
      '5g' |
      '5g' |
      'back camera' |
      'qr code' |
      'bluetooth' |
      'camera' |
      'smartphone' |
      'face recognition' |
      'face recognition' |
      'deny' |
      'face recognition' |
      'face recognition' |
      'cancel' |
      'fingerprint' |
      'forbidden' |
      'fingerprint' |
      'fingerprint' |
      'fingerprint' |
      'fullscreen' |
      'signal' |
      'smartphone' |
      'smartphone' |
      'back camera' |
      'landscape mode' |
      'landscape mode' |
      'lte' |
      'lte' |
      'qr code' |
      'bluetooth' |
      'bluetooth' |
      'bluetooth' |
      'broken smartphone' |
      'mobile calibration' |
      'mobile cloud' |
      'connect' |
      'connect' |
      'connect' |
      'connectivity' |
      'cracked smartphone' |
      'smartphone' |
      'smartphone' |
      'no smartphones' |
      'keyboard' |
      'smartphone' |
      'ring' |
      'rotate' |
      'rotate' |
      'smartphone' |
      'devices' |
      'sync' |
      'sync' |
      'transfer' |
      'transfer' |
      'transfer' |
      'transfer' |
      'vibrate' |
      'music player' |
      'no signal' |
      'low signal' |
      'eye scanner' |
      'eye scanner' |
      'denied' |
      'eye scanner' |
      'eye scanner' |
      'smartphone' |
      'smartphone' |
      'signal' |
      'smartphone' |
      'qr code' |
      'bluetooth' |
      'bluetooth' |
      'bluetooth' |
      'broken smartphone' |
      'mobile calibration' |
      'mobile cloud' |
      'connect' |
      'connect' |
      'connect' |
      'connectivity' |
      'cracked smartphone' |
      'smartphone' |
      'smartphone' |
      'no smartphones' |
      'keyboard' |
      'smartphone' |
      'ring' |
      'rotate' |
      'rotate' |
      'smartphone' |
      'devices' |
      'sync' |
      'sync' |
      'transfer' |
      'transfer' |
      'transfer' |
      'transfer' |
      'connectivity' |
      'vibrate' |
      'bluetooth' |
      'bluetooth' |
      'bluetooth' |
      'connection' |
      'connection' |
      'connection' |
      'connection' |
      'connection' |
      'connection' |
      'back camera' |
      'back camera' |
      'back camera' |
      'signal' |
      'back camera' |
      'no wifi' |
      'wifi';

    interface IconProps {
      name: iconNames;
      color: string;
      size: number;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

