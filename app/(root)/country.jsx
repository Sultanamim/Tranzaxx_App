import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import PopupMessage from "../../components/Country/PopupMessage";
import { countriesDetails } from "../../constant/data";
import { useEffect, useState } from "react";
import { getALLCountries } from "../../apiService";
import ThumbnailImg from "../../assets/images/listing/thumbnail.png";

const Country = () => {
  const [countries, setCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getALLCountries();
        // console.log(data.result.data);
        setCountries(data?.result.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);
  return (
    <ScrollView className="px-4">
      <View className="mt-4">
        <PopupMessage />
      </View>
      <Text className="text-primaryBlk font-poppins text-[24px] font-semibold mt-[33px]">
        Countries
      </Text>
      <View className="flex-row flex-wrap -mx-1.5 gap-x-3 gap-y-2 mt-4">
        {isLoading ? (
          <ActivityIndicator size="large" color="#00AEF0" />
        ) : (
          countries?.map((country) => {
            // Find the corresponding country detail by name
            const matchedCountry = countriesDetails.find(
              (detail) => detail.name === country.name
            );

            return (
              <View
                key={country.name}
                className="w-[48%] border-[1px] border-[#EAE8E8] p-4 rounded-lg flex-row items-center gap-3"
              >
                {matchedCountry?.img ? (
                  <Image
                    source={matchedCountry.img}
                    style={{ width: 18, height: 18 }}
                  />
                ) : (
                  <Image
                    source={ThumbnailImg}
                    resizeMode="contain"
                    className="w-[18px] h-[18px]"
                    style={{ width: 18, height: 18 }}
                  />
                )}
                <Text
                  className=" text-[#010101] uppercase"
                  style={{ fontFamily: "Poppins-SemiBold", fontSize: 15 }}
                >
                  {country.name}
                </Text>
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
};

export default Country;
