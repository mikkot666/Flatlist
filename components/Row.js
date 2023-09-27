import React from "react";
import { Text } from "react-native";

export default function Row(props) {
    return (
        <Text>{props.item.lastname}, {props.item.firstname}</Text>
    )
}