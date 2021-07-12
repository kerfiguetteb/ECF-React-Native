import React from 'react';
import { View, Text } from 'react-native';

export default function BookScreen({route}) {
    const book = route.params.book.volumeInfo;
    return (
        <View>
            
            <Text>{book.title}</Text>
            <Text>{book.publisher}</Text>
            <Text>{book.description}</Text>
            <Text>{book.publishedDate}</Text>
        </View>
    )
}
