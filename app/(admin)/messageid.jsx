import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useSession } from "../../lib/cts";
import { getSingleThread, sendMessage, updateMessage } from "../../apiService";

export default function ChatScreen() {
  const { message } = useLocalSearchParams();
  const { userInfo, userData, session } = useSession();
  const messageItem = JSON.parse(message);
  const [messages, setMessages] = useState(null);

  const [newMessage, setNewMessage] = useState("");
  const flatListRef = useRef(null); // Ref to manage FlatList scrolling
  const [deleteMessage, setDeleteMessage] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getSingleThread(messageItem.id, session);
        setMessages(data.result.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const sendNewMessage = async () => {
    if (userInfo) {
      if (newMessage.length > 20 && messageItem.post_id) {
        const data = {
          from_name: userInfo.name,
          from_phone: "test",
          body: newMessage,
          post_id: messageItem.post_id,
          captcha_key: "",
        };
        console.log(data);
        try {
          const result = await updateMessage(messageItem.id, data, session);
          if (result.success) {
            Alert.alert("", result.message, [
              {
                text: "Close",
                style: "cancel",
              },
            ]);
            setNewMessage(""); // Clear input field

            // Fetch the updated messages
            const updatedMessages = await getSingleThread(
              messageItem.id,
              session
            );
            setMessages(updatedMessages.result.data);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        Alert.alert(
          "Error",
          "The message must be between 20 and 1000 characters.",
          [
            {
              text: "Close",
              style: "cancel",
            },
          ]
        );
      }
    }
  };

  const renderMessage = ({ item }) => (
    <TouchableOpacity
      className="mt-[15px] relative"
      onPress={() => {
        if (item.body) {
          setDeleteMessage((prev) => !prev);
        }
      }}
      style={{
        alignSelf: item.body ? "flex-end" : "flex-start",
      }}
    >
      <Text className="font-poppins text-[12px] font-normal text-[#999999]">
        Mon at 5:41 PM
      </Text>
      <View
        className="p-[10px] mt-[10px] rounded-xl"
        style={{
          backgroundColor: item.body ? "#00AEF0" : "#EBEBEB",
          maxWidth: "80%",
        }}
      >
        <Text
          className="font-poppins font-normal text-[16px]"
          style={{ color: item.body ? "#fff" : "#010101" }}
        >
          {item.body}
        </Text>
      </View>
      <View className="flex flex-row justify-end mt-2">
        {item.body && (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={14}
            color="#00AEF0"
          />
        )}
        {item.sender === "me" && !item.seen && (
          <Ionicons name="checkmark-circle-outline" size={14} color="#979797" />
        )}
      </View>
    </TouchableOpacity>
  );

  console.log(session);

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Chat Header */}
      <View
        className=" bg-[#00AEF0] flex flex-row py-3  items-center px-6"
        style={{
          borderTopWidth: 1,
          borderTopColor: "#fff",
          borderBottomWidth: 1,
          borderBottomColor: "#fff",
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={17} color="white" />
        </TouchableOpacity>
        <Text className=" font-poppins font-semibold text-[20px] text-white ml-[10px]">
          Message
        </Text>
      </View>
      <View className=" bg-[#00AEF0] py-3  items-center px-6  flex flex-row  justify-between">
        <View className="flex flex-row items-center">
          <Image
            className=" rounded-full"
            source={require("../../assets/images/human2.png")}
            resizeMode="cover"
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          />

          <Text
            className=" font-poppins font-semibold text-[20px] text-white ml-[10px]"
            style={{ width: 170 }}
          >
            {messageItem.subject}
          </Text>
        </View>
        <View className="flex flex-row">
          <TouchableOpacity
            className="p-[10px] rounded-md "
            style={{ backgroundColor: "#5a97a6" }}
          >
            <Ionicons name="call" size={17} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            className="p-[10px] ml-3 rounded-md"
            style={{ backgroundColor: "#5a97a6" }}
          >
            <Entypo name="dots-three-vertical" size={17} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Messages */}
      {messages && (
        <FlatList
          ref={flatListRef} // Reference to the FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          className="flex-1 px-4"
          contentContainerStyle={{ paddingBottom: 40 }}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          } // Auto-scroll on content size change
        />
      )}

      {deleteMessage && (
        <View className="bg-white mb-4 mx-4 rounded-xl border-[1px] border-black px-6 py-3">
          <Text
            className="font-poppins font-normal text-[14px]  text-[#010101] border-b-[1px] border-b-black"
            style={{ paddingBottom: 13 }}
          >
            Who do you want to remove this message for ?
          </Text>
          <View className="mt-4 flex flex-row justify-between items-center ">
            <Text className="font-poppins font-normal text-[14px] text-[#010101] ">
              Unsend for everyone
            </Text>
            {/* #999999 */}
            <View
              className="  py-3 px-3 rounded-full "
              style={{ backgroundColor: "#999999" }}
            >
              <MaterialIcons name="delete" size={18} color="white" />
            </View>
          </View>
          <View className="mt-4 flex flex-row justify-between items-center ">
            <Text className="font-poppins font-normal text-[14px] text-[#010101] ">
              Unsend for you
            </Text>

            <View
              className="  py-3 px-3 rounded-full "
              style={{ backgroundColor: "#999999" }}
            >
              <MaterialIcons name="delete" size={18} color="white" />
            </View>
          </View>
        </View>
      )}

      {/* Input Box */}
      <View className="bg-[#00AEF0] flex flex-row py-3 px-5">
        <TextInput
          className="flex-1 bg-white rounded-xl px-3 py-4 text-base"
          placeholder="Type here..."
          placeholderTextColor="#A1B9CF80"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity
          onPress={sendNewMessage}
          className="ml-3 bg-[#F5F5F5] rounded-lg px-4 py-2 flex flex-row justify-center items-center"
        >
          <FontAwesome name="send" size={20} color="#00AEF0" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
