# Phones And Mobiles Icons for React Native

### react-native-ico-phones-and-mobiles

120 Icons

## Usage

```
import Icon from 'react-native-ico-phones-and-mobiles';


// Inside some view component
render() {
    return (
        <>
          <Icon name="4g" />
          <Icon name="4g plus" height="40" width="40" />
          <Icon name="4g" color="red" />
        </>
    );
}

```

## List of icons

- [List of Phones And Mobiles Icons](http://ico.simpleness.org/pack/phones-and-mobiles)

## Installation

#### yarn

```bash
yarn add react-native-ico-phones-and-mobiles react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-phones-and-mobiles react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of file | "4g"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
