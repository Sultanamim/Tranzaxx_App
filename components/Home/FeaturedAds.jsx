import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { featuresAdsData } from "../../constant/data";
import RenderHTML from "react-native-render-html";
import WebView from "react-native-webview";
import { videoUrlPrepend } from "../../constant/newData";
import { format } from "date-fns";
import { router } from "expo-router";

const FeaturedAds = ({ ads }) => {
  const { width } = useWindowDimensions();

  const tagsStyles = {
    p: {
      fontSize: 10,
      color: "#999",
      lineHeight: 20,
      fontFamily: "Poppins-Regular",
      textTransform: "uppercase",
    },
  };

  const systemFonts = [
    "Poppins-Regular",
    "Poppins-Medium",
    "Poppins-SemiBold",
    "Poppins-Bold",
  ];

  function formatDate(dateString) {
    return format(
      new Date(dateString),
      "MMMM do, yyyy 'AT' HH:mm"
    ).toUpperCase();
  }
  //  console.log(ads[0].videos);

  return (
    <View className="mt-[50px]">
      <View className="flex-row justify-between">
        <Text
          className="text-[28px] text-[#061B3B]
            font-semibold"
        >
          FeaturedAds
        </Text>
        <Text className="text-[16px] font-semibold text-primary font-poppins">
          See all
        </Text>
      </View>

      <View className="flex gap-3 mt-5">
        {ads.length > 0 &&
          ads.map((feature, index) => (
            <View
              key={feature.title}
              className="p-4 border-[1px] border-[#BFBFBF] rounded-[20px]"
            >
              {/* <Image
                source={feature.img}
                className="h-[195px] w-full rounded-xl"
              /> */}
              <View
                //key={index}
                style={[styles.videoContainer, { height: 200 }]}
              >
                <WebView
                  source={{
                    html: `
                <style>
                  body {
                    margin: 0;
                    padding: 0;
                    background: transparent;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    overflow: hidden;
                  }
                  iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                  }
                </style>
                <iframe src="${videoUrlPrepend}${feature.videos[0].url}" allowfullscreen></iframe>
              `,
                  }}
                  javaScriptEnabled
                  allowsFullscreenVideo
                  // onLoad={() => handleWebViewLoad(index)}
                  style={{ flex: 1 }}
                />
              </View>
              <View className="">
                <Text className="text-[#00AEF0] text-[12px] tracking-[-0.5px] font-poppins mt-[18px]">
                  {feature.category.name}
                </Text>
                <Text className="tracking-[0.5px] font-poppins text-[#010101] text-[16px] font-semibold mt-[14px]">
                  {feature.title}
                </Text>
                <View style={{ marginTop: 30 }}>
                  <RenderHTML
                    contentWidth={width}
                    source={{ html: feature.description }}
                    tagsStyles={tagsStyles}
                    systemFonts={systemFonts}
                  />
                </View>
                <View className="flex-row items-center justify-between mt-2">
                  <View className="flex-row items-center gap-[3px]">
                    <Image
                      source={require("../../assets/images/home/FeatureAds//date.png")}
                      className="w-[13px] h-[13px]"
                      style={{ marginTop: -5 }}
                    />
                    <Text className=" font-poppins text-[12px] tracking-[-.5px] h-[21px] text-[#999] capitalize">
                      {formatDate(feature.featured_end)}
                    </Text>
                  </View>

                  <View
                    className="flex-row items-center gap-[1px]"
                    style={{ marginLeft: -12 }}
                  >
                    <Entypo
                      name="location-pin"
                      size={18}
                      color="#00AEF0"
                      style={{ marginTop: -2 }}
                    />
                    <Text className=" font-poppins text-[12px] tracking-[-.5px] h-[21px] text-[#999]">
                      {feature.city.name}
                    </Text>
                  </View>
                  <View
                    className="flex-row items-center gap-[3px]"
                    style={{ marginLeft: 3 }}
                  >
                    <Entypo name="eye" size={16} color="#00AEF0" />
                    <Text className=" font-poppins text-[13px] tracking-[-.5px] h-[21px] text-[#999]">
                      {feature.visits} views
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex-row justify-between items-center mt-5 ">
                <TouchableOpacity
                  onPress={() => {
                    router.push("(root)/exceptionelle");
                    router.setParams({ id: feature.id });
                  }}
                  className="px-4 py-3 font-semibold text-[12px]
                        border-[1px] border-primary rounded-[10px] font-poppins flex-row gap-2"
                >
                  <Text className="text-uppercase text-[#010101]">
                    Learn more
                  </Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-[18px] font-semibold text-primary tracking-[-.5px]">
                  {feature.price} $
                </Text>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
};

export default FeaturedAds;

const styles = StyleSheet.create({
  videoContainer: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});
