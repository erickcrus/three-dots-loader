# @erickcrus/three-dots-loader

A lightweight react-native three-dots-loader

## Installation

```sh
npm install @erickcrus/three-dots-loader
```

## Usage

```js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Loader from '@erickcrus/three-dots-loader';

return () => {
    const [ loading, setLoading ] = useState(false);

    const onPress = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1250);
    }

    return <View style={{ flex:1 }}>
        <View style={{ flex:1 }}>
            <Text>Press button to test</Text>
        </View>
        <TouchableOpacity style={{
            flex:0,
            backgroundColor: '#00b9fc',
            paddingVertical:10,
            width:'82%',
            alignSelf: 'center',
            borderRadius: 10
        }} onPress={onPress}>
            {loading ? <Loader size={8} color='#FFF' /> : <Text style={{color:'#FFF'}}>Test</Text>}
        </TouchableOpacity>
    </View>;
}
```

## Properties
|Prop               |Type       |Default    |Description                |
|-------------------|:---------:|-----------|---------------------------|
|size               |number     |required   |Size of dots               |
|animationDuration  |number     |`600`      |Animation duration in ms   |
|color              |string     |`#00b9fc`  |Dots color                 |
|spacing            |number     |`3`        |Dots horizontal margin     |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
