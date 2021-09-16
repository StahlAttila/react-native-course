import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons"
import Colors from "../constants/Colors"
import { Platform } from "react-native";

const CustomHeaderButton = (props) => {
    //{...props forwarding all props to the element}
    return <HeaderButton 
        {...props} 
        IconComponent={Ionicons} 
        iconSize={23} 
        color={Platform === "ios" ? Colors.primaryColor : "white"}
        />;
};

export default CustomHeaderButton;