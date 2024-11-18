import { View, Text, Image } from "react-native";
import { homeFotterData } from "../../constant/data";
import mike from "../../assets/images/home/footer/mike.png";
import seller from "../../assets/images/home/footer/seller.png";
import location from "../../assets/images/home/footer/location.png";

export default function SellersDetails({ stats }) {
  return (
    <View className="bg-primary mt-2">
      <View
        className="py-[30px] flex items-center justify-center border-b border-b-[#34bbfa]"
        style={{ borderBottomWidth: 3, borderBottomColor: "#57c6fa" }}
      >
        <Image source={mike} />
        <View className="mt-[14px] flex items-center justify-center ">
          <Text className="text-white font-poppins font-semibold text-[44px]">
            {stats?.data.countPosts}
          </Text>
          <Text className="text-white font-poppins font-medium text-[36px]">
            Ads
          </Text>
        </View>
      </View>

      <View
        className="py-[30px] flex items-center justify-center"
        style={{ borderBottomWidth: 3, borderBottomColor: "#57c6fa" }}
      >
        <Image source={seller} />
        <View className="mt-[14px] flex items-center justify-center ">
          <Text className="text-white font-poppins font-semibold text-[44px]">
            {stats?.data.countUsers}
          </Text>
          <Text className="text-white font-poppins font-medium text-[36px]">
            Trusted Sellers
          </Text>
        </View>
      </View>

      <View
        className="py-[30px] flex items-center justify-center"
        style={{ borderBottomWidth: 3, borderBottomColor: "#34bbfa" }}
      >
        <Image source={location} />
        <View className="mt-[14px] flex items-center justify-center ">
          <Text className="text-white font-poppins font-semibold text-[44px]">
            {stats?.data.countCities}
          </Text>
          <Text className="text-white font-poppins font-medium text-[36px]">
            Locations
          </Text>
        </View>
      </View>
    </View>
  );
}
