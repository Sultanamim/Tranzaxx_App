import { FontAwesome6, Octicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import MessageList from "../../components/message/MessageList";
import { useSession } from "../../lib/cts";
import {
  bulkMessage,
  getFilteredThreads,
  getListThreads,
  getSingleThread,
} from "../../apiService";
import { Alert } from "react-native";

const messagetypelist = ["inbox", "started", "unread", "important"];
const actionContent = [
  { name: "Mark as read", value: "markAsRead" },
  { name: "Mark as unread", value: "markAsUnread" },
  { name: "Mark as important", value: "markAsImportant" },
  { name: "Mark as Not Important", value: "markAsNotImportant" },
  // {name: "Delete", value: ''},
];

const Message = () => {
  const { session } = useSession();
  const [show, setShow] = useState(false);
  const [messagetype, setMessageType] = useState(messagetypelist[0]);
  const [allmessages, setAllMessages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filterLoadig, setFilterLoading] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState([]);
  const [actionType, setActionType] = useState(null);

  useEffect(() => {
    if (messagetype === "inbox") {
      fetchMessages();
    }
  }, [messagetype]);

  const handleMessageTypeChange = async (item) => {
    setMessageType(item);

    if (item !== "inbox") {
      setFilterLoading(true);
      try {
        const filteredMessages = await getFilteredThreads(item, session);
        const messageWithDetail = await Promise.all(
          filteredMessages?.result?.data.map(async (msg) => {
            const messageData = await getSingleThread(msg.id, session);
            return {
              ...msg,
              messageDetail: messageData?.result?.data || [],
            };
          })
        );
        // console.log(messageWithDetail);
        setAllMessages(messageWithDetail || []); // Set the filtered messages
      } catch (error) {
        console.error("Failed to fetch filtered messages:", error);
      } finally {
        setFilterLoading(false);
      }
    }
  };

  const fetchMessages = async () => {
    try {
      const listData = await getListThreads(session);
      const messageWithDetail = await Promise.all(
        listData?.result?.data.map(async (msg) => {
          const messageData = await getSingleThread(msg.id, session);
          return {
            ...msg,
            messageDetail: messageData?.result?.data || [],
          };
        })
      );
      setAllMessages(messageWithDetail);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchMessages();
    setRefreshing(false);
  };

  const handleBulkActions = async (type) => {
    if (selectedMessage.length > 0) {
      const formattedMessages = selectedMessage.join(",");
      console.log(formattedMessages);
      console.log(type);
      try {
        const result = await bulkMessage(formattedMessages, type, session);
        if (result.success) {
          Alert.alert("", result.message, [
            {
              text: "Close",
              // onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            // {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      Alert.alert("", "Please select messages to tke action!", [
        {
          text: "Close",
          // onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        // {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    setShow(false);
    setSelectedMessage([]);
  };

  // console.log(session);

  return (
    <ScrollView
      className="bg-white"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View className="flex flex-row mx-4">
        <View className=" w-[80%]    mt-4 mb-4 ">
          <TouchableOpacity
            onPress={() => setShow((prev) => !prev)}
            className="border-[1px]  border-[#BFBFBF] rounded-[6px] px-[12px] py-[10px] flex flex-row justify-between items-center"
          >
            <Text className="text-[#000000] text-[18px] font-poppins  font-medium">
              {" "}
              Action
            </Text>

            <Octicons name="triangle-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className=" w-[20%]    flex flex-row justify-center items-center">
          <View className=" border-[1px] border-[#BFBFBF] p-[14px] rounded-[6px]">
            <FontAwesome6 name="arrows-rotate" size={17} color="black" />
          </View>
        </View>
      </View>

      {show && (
        <View className="absolute w-full   z-50 " style={{ marginTop: 90 }}>
          <View
            className=" relative bg-white border-[1px] border-black rounded-xl px-5 py-5"
            style={{ marginHorizontal: 38 }}
          >
            <View
              className=" absolute bg-white border-[1px] border-black"
              style={{
                width: 28,
                height: 25,
                top: -10,
                right: 65,
                transform: [{ rotate: "50deg" }],
              }}
            ></View>
            <View
              className=" absolute bg-white "
              style={{
                width: 50,
                height: 25,
                right: 49,
              }}
            ></View>
            {actionContent.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="mt-4"
                onPress={() => {
                  handleBulkActions(item.value);
                }}
              >
                <Text className="font-poppins font-normal text-sm text-grey-300">
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex flex-row my-2  mx-4"
      >
        {messagetypelist.map((item) => (
          <TouchableOpacity
            onPress={() => handleMessageTypeChange(item)}
            key={item}
            className={`px-4 py-2 rounded-[10px]  ${
              messagetype === item
                ? "bg-[#00AEF0]"
                : "border-[1px] bg-white  border-[#8F8F8F]"
            } `}
            style={{ marginRight: 16 }}
          >
            <Text
              className={` capitalize ${
                messagetype === item ? "text-white" : "text-[#8F8F8F]"
              }`}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="mx-4 ">
        <View className="flex flex-row justify-between items-center ">
          <Text className=" font-poppins font-semibold  text-[24px] capitalize ">
            {messagetype === messagetypelist[0] && "My"} {messagetype}
          </Text>

          <View className=" flex flex-row">
            <Checkbox
              color={selectAll ? "#8F8F8F" : undefined}
              style={{ borderColor: "#8F8F8F" }}
              value={selectAll}
              onValueChange={setSelectAll}
            />
            <Text className=" ml-3 font-poppins font-semibold  text-[16px] text-[#8F8F8F]">
              Select all
            </Text>
          </View>
        </View>

        {/* if user click inbox show that */}
        {isLoading || filterLoadig ? (
          <ActivityIndicator size="large" color="#00AEF0" />
        ) : !allmessages.length > 0 ? (
          <View className=" mt-2 bg-[#00AEF0] py-5 flex flex-row justify-center">
            <Text className=" font-poppins font-semibold text-[24px] text-white">
              {" "}
              No thread started by you.
            </Text>
          </View>
        ) : (
          allmessages.map((item, index) => (
            <MessageList
              key={index}
              message={item}
              selectAll={selectAll}
              setSelectedMessage={setSelectedMessage}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default Message;
