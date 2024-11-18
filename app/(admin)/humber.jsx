import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  Octicons,
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { AppContext } from "../../store/store";
// 00AEF0 change icone color
const menuItems = [
  {
    title: "PERSONAL HOME",
    icon: (
      <View>
        <View className="flex flex-row">
          <Octicons name="square-fill" size={14} color="#767C89" />
          <Octicons
            name="square-fill"
            size={14}
            color="#767C89"
            className="ml-1"
          />
        </View>
        <View className="flex flex-row -mt-1">
          <Octicons name="square-fill" size={14} color="#767C89" />
          <Octicons
            name="square-fill"
            size={14}
            color="#767C89"
            className="ml-1"
          />
        </View>
      </View>
    ),
    pathname: "/admin-personalhome",
  },
  {
    title: "MY ADS",
    number: "(37)",
    icon: <AntDesign name="menuunfold" size={20} color="#767C89" />,
    pathname: "/my-ads",
  },
  {
    title: "FEATURED ADS",
    number: "(1)",
    icon: <FontAwesome5 name="medal" size={18} color="#767C89" />,
    pathname: "/featured-ads",
  },
  {
    title: "FAVOURITE ADS",
    number: "(0)",
    icon: <MaterialIcons name="favorite" size={20} color="#767C89" />,
    pathname: "/favourite-ads",
  },
  {
    title: "ARCHIVED ADS",
    number: "(1)",
    icon: <FontAwesome5 name="archive" size={18} color="#767C89" />,
    pathname: "/archived-ads",
  },
  {
    title: "SAVED SEARCHES",
    number: "(2)",
    icon: <Octicons name="star-fill" size={20} color="#767C89" />,
    pathname: "/savedsearch",
  },
  {
    title: "PENDING APPROVAL",
    number: "(0)",
    icon: (
      <MaterialIcons name="account-balance-wallet" size={21} color="#767C89" />
    ),
    pathname: "/pending-approval",
  },
  {
    title: "MESSENGER",
    icon: <Fontisto name="messenger" size={18} color="#767C89" />,
    pathname: "/message",
  },
  {
    title: "TRANSACTIONS",
    number: "(0)",
    icon: (
      <MaterialCommunityIcons
        name="text-box-multiple"
        size={20}
        color="#767C89"
      />
    ),
    pathname: "/transaction",
  },
];

export default function Menu({ setIsShowMenu }) {
  // bgClass: "bg-blue-100",
  // textClass: "text-blue-200",
  const [selectedPath, setSeletedPath] = useState("/admin-personalhome");

  const { setShowMenu } = useContext(AppContext);

  const handleMenuItems = (screen) => {
    router.push(screen);
    setShowMenu(false);
    setSeletedPath(screen);
    setIsShowMenu(false);
  };

  return (
    <View
      className="mx-4 my-2 bg-white"
      style={{
        zIndex: 10,
        position: "absolute",
        top: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4.65,
        elevation: 8,
        width: "95%",
      }}
    >
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleMenuItems(item.pathname)}
          className={`px-[10px] py-[10px] flex flex-row items-center ${
            selectedPath === item.pathname ? "bg-blue-100" : ""
          }`}
        >
          {item.icon}
          <Text
            className={`ml-3 font-poppins font-semibold text-lg ${
              selectedPath === item.pathname ? "text-blue-200" : ""
            }`}
          >
            {item.title} {item.number || ""}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        onPress={() => {
          router.replace("welcome");
          setShowMenu(false);
          setIsShowMenu(false);
        }}
        className=" px-[10px] py-[10px]  flex flex-row items-center"
      >
        <MaterialIcons name="logout" size={20} color="#767C89" />
        <Text className={`ml-3 font-poppins font-semibold text-lg`}>
          LOG OUT
        </Text>
      </TouchableOpacity>
    </View>
  );
}
