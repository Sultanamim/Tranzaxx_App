import { View, Text, Image } from "react-native";
import { stayTouch } from "../../constant/data";
import { TouchableOpacity } from "react-native";
import insta from "../../assets/images/follow/insta.png";
import fb from "../../assets/images/follow/fb.png";
import linkind from "../../assets/images/follow/linkind.png";
import x from "../../assets/images/follow/x.png";
import message from "../../assets/images/follow/email.png";
import { Linking } from "react-native";

export default function StayTouch({ links }) {
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

  return (
    <View className="bg-primary px-6 py-[50px] mb-10 rounded-xl">
      <Text
        className="leading-[36px] text-[30px] text-white uppercase"
        style={{ fontFamily: "Poppins-Bold" }}
      >
        STAY IN TOUCH
      </Text>
      <Text
        className="leading-[36px] text-[30px] text-white uppercase"
        style={{ fontFamily: "Poppins-Bold" }}
      >
        WITH US ANYTIME
      </Text>
      <View className="mt-10">
        {stayTouch.map((data) => (
          <View
            key={data.name}
            className="flex-row items-center gap-[10px]"
            style={{ marginVertical: 8 }}
          >
            <View
              className=""
              style={{
                backgroundColor: "#5cbeff",
                borderRadius: 50,
                paddingHorizontal: 8,
                paddingVertical: 8,
              }}
            >
              <Image source={data.icon} className="" />
            </View>
            <View className="">
              <Text className="text-white font-poppins font-bold text-[12px] uppercase">
                {data.name}
              </Text>
              <Text className="text-white text-[14px] font-poppins mt-[2px] uppercase">
                {data.title}
              </Text>
            </View>
          </View>
        ))}

        <View className="mt-[30px] flex-row gap-[14px] items-center">
          <View className="w-[34px] h-[2px] bg-white"></View>
          <Text className="uppercase text-white text-[18px] font-poppins font-medium">
            connect with us:
          </Text>
        </View>
        <View className="flex-row gap-[10px] items-center">
          {follow.map((data, index) => (
            <TouchableOpacity
              key={index}
              className="p-[14px]"
              style={{ backgroundColor: "#5cbeff", borderRadius: 5 }}
              onPress={() => handlePress(data.link)}
            >
              <Image source={data.img} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
