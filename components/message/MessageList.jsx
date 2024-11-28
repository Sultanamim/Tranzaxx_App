import {
  AntDesign,
  Feather,
  SimpleLineIcons,
  Octicons,
} from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { deleteMessage } from "../../apiService";
import { useSession } from "../../lib/cts";

const MessageList = ({
  isImportant,
  message,
  selectAll,
  setSelectedMessage,
}) => {
  const { session } = useSession();
  const [isChecked, setChecked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);

  useEffect(() => {
    setChecked(selectAll);
    if (selectAll) {
      setSelectedMessage((prev) => {
        const currentIds = prev || [];
        if (!currentIds.includes(message.id)) {
          return [...currentIds, message.id];
        }
        return currentIds;
      });
    } else {
      setSelectedMessage((prev) => prev.filter((id) => id !== message.id));
    }
  }, [selectAll, message.id, setSelectedMessage]);

  const handleDelete = async () => {
    setDeleteClicked(false);
    try {
      const result = await deleteMessage(message.id, session);
      if (result.success) {
        Alert.alert("", result.message, [
          {
            text: "Close",
            // onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteAlert = () => {
    setDeleteClicked(true);
    if (deleteClicked) {
      Alert.alert("Delete", "Do you want to delete this message?", [
        {
          text: "Close",
          // onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Delete", onPress: () => handleDelete(), style: "default" },
      ]);
    }
  };
  const handleCheckboxChange = (value) => {
    setChecked(value);
    if (value) {
      setSelectedMessage((prev) => [...prev, message.id]);
    } else {
      setSelectedMessage((prev) => prev.filter((id) => id !== message.id));
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        router.push("./messageid");
        router.setParams({ message: JSON.stringify(message) });
      }}
      className=" flex flex-row items-center bg-[#F5F5F5] my-[7px] px-[10px] py-3 rounded-xl "
    >
      <View className=" w-[25%]   flex flex-row  items-center">
        <Checkbox
          color={isChecked ? "#00AEF0" : undefined}
          style={{ borderColor: "#000000" }}
          value={isChecked}
          onValueChange={handleCheckboxChange}
        />
        <Image
          className="w-[52px]  h-[52px] rounded-full ml-2 mr-3"
          source={require("../../assets/images/human2.png")}
          resizeMode="cover"
        />
      </View>
      <View className=" w-[75%] ">
        <View className=" flex flex-row justify-between">
          <View className="flex flex-row items-center">
            <Text className="font-poppins font-semibold text-[15px] text-[#010101] ">
              {message.subject}
            </Text>
            <View
              className="bg-[#00AEF0] px-[6px] rounded-[4px]  ml-3"
              style={{ paddingVertical: 1 }}
            >
              <Text
                className="text-[12px] text-white"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                {message?.messageDetail?.length}
              </Text>
            </View>
          </View>
          <Text className="font-poppins font-semibold text-[15px] text-[#010101] ">
            2034, 4:15 PM
          </Text>
        </View>
        {/* <Text className=" mt-1 font-poppins font-normal text-[12px] text-[#061B3B]">
          2024 Mercedes-Maybach S 680 4Matic
        </Text> */}
        <View className=" mt-1 flex flex-row justify-between ">
          <Text
            className=" font-poppins  font-normal text-[14px] text-[#434343]"
            style={{ width: 180 }}
          >
            {message?.messageDetail.length > 0 &&
              (message?.messageDetail[message?.messageDetail.length - 1].body
                .length > 30
                ? `${message?.messageDetail[
                    message?.messageDetail.length - 1
                  ].body.slice(0, 30)}...`
                : message?.messageDetail[message?.messageDetail.length - 1]
                    .body)}
          </Text>

          <View className=" flex flex-row">
            {isImportant ? (
              <Octicons name="star-fill" size={17} color="#FC8A00" />
            ) : (
              <SimpleLineIcons name="star" size={17} color="black" />
            )}

            <Feather name="mail" size={17} color="black" className="ml-3" />
            <TouchableOpacity onPress={handleDeleteAlert}>
              <AntDesign
                name="delete"
                size={17}
                color="black"
                className="ml-3"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageList;
