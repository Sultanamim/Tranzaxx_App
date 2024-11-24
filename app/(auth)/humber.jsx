import { View, Text, ScrollView } from "react-native";
import { aboutUsData, contact, screens } from "../../constant/data";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/store";
import { getSocialLinks } from "../../apiService";
import insta from "../../assets/images/follow/insta.png";
import fb from "../../assets/images/follow/fb.png";
import linkind from "../../assets/images/follow/linkind.png";
import x from "../../assets/images/follow/x.png";
import message from "../../assets/images/follow/email.png";
import { Linking } from "react-native";

const Menu = ({ setIsShowMenu }) => {
  const { setShowMenu } = useContext(AppContext);
  const [links, setLinks] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getSocialLinks();
        // console.log(data.result.data);
        setLinks(data?.result);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const follow = [
    {
      img: insta,
      link: links ? links.instagram_url : "",
    },
    {
      img: fb,
      link: links ? links.facebook_page_url : "",
    },
    {
      img: linkind,
      link: links ? links.linkedin_url : "",
    },
    {
      img: x,
      link: links ? links.pinterest_url : "",
    },
    {
      img: message,
      link: links ? links.twitter_url : "",
    },
  ];

  const handlePress = async (link) => {
    const supported = await Linking.canOpenURL(link);

    if (supported) {
      // Open the URL
      await Linking.openURL(link);
    } else {
      Alert.alert(`Don't know how to open this URL: ${link}`);
    }
  };

  const handleOnPress = (screen) => {
    router.push(screen.link);
    setShowMenu(false);
    setIsShowMenu(false);
  };

  return (
    <ScrollView>
      <View className="bg-[#00AEF0] px-10 py-5">
        <View className="flex gap-[10px]">
          {screens.map((screen, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => handleOnPress(screen)}>
                <Text
                  className="text-white text-[16px] uppercase"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  {screen.page}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View className="flex-row items-center mt-5">
          <TouchableOpacity
            className="flex-row items-center gap-[10px] bg-[#010101] px-[18px] py-[10px] rounded-[4px]"
            onPress={() => {
              router.push("(root)/add-listing");
              setShowMenu(false);
              setIsShowMenu(false);
            }}
          >
            <View className="bg-white w-5 h-5 rounded-full flex-row justify-center items-center">
              <Image source={require("../../assets/images/plus.png")} />
            </View>
            <Text
              className="text-white text-[14px] uppercase "
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              ADD LISTING{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center mt-5">
          <TouchableOpacity className="flex-row items-center gap-[10px] border-[1px] border-white px-[18px] py-[10px] rounded-[4px]">
            <Image
              source={require("../../assets/images/selectArrow (2).png")}
              className="w-5 h-5"
            />
            <Text
              className="text-white text-[14px] uppercase "
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              EN
            </Text>
            <Image
              source={require("../../assets/images/selectArrow (1).png")}
              className="w-5 h-5"
            />
          </TouchableOpacity>
        </View>
        <View className="h-[1px] w-full bg-white mt-5"></View>
        <View className="mt-5">
          <Text
            className="text-[14px] text-white"
            style={{ fontFamily: "Poppins-Bold" }}
          >
            About us
          </Text>
          <View className="mt-[10px] flex gap-1">
            {aboutUsData.map((data, index) => (
              <View key={index}>
                <TouchableOpacity onPress={() => handleOnPress(data)}>
                  <Text
                    className="text-white text-[14px]"
                    style={{ fontFamily: "Poppins-Regular" }}
                  >
                    {data.page}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <View className="mt-[10px]">
          <Text
            className="text-[14px] text-white"
            style={{ fontFamily: "Poppins-Bold" }}
          >
            Contact & Sitemap{" "}
          </Text>
          <View className="mt-[10px] flex gap-1">
            {contact.map((data, index) => (
              <View key={index}>
                <TouchableOpacity onPress={() => handleOnPress(data)}>
                  <Text
                    className="text-white text-[14px]"
                    style={{ fontFamily: "Poppins-Regular" }}
                  >
                    {data.page}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <View className="mt-[10px]">
          <Text
            className="text-[14px] text-white"
            style={{ fontFamily: "Poppins-SemiBold" }}
          >
            Follow us on{" "}
          </Text>
          <View className="mt-[10px] flex-row gap-[10px]">
            {follow.map((data, index) => (
              <TouchableOpacity
                key={index}
                className="w-[38px] h-[38px] rounded-full border-[1px] border-white"
                onPress={() => handlePress(data.link)}
              >
                <View className="flex-row flex-1 items-center justify-center">
                  <Image source={data.img} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Menu;
