import { ScrollView, View, ActivityIndicator } from "react-native";
import EngaggingVideos from "../../components/pricing/EngaggingVideos";
import PricingCard from "../../components/pricing/PricingCard";
import { useEffect, useState } from "react";
import { getALLPackages } from "../../apiService";

const Pricing = () => {
  const [packages, setPackages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getALLPackages();
        // console.log(data.result.data);
        setPackages(data?.result.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView>
      <View className="mt-[60px]">
        <EngaggingVideos />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00AEF0" />
      ) : packages ? (
        <View className="px-4 mb-10">
          <PricingCard packages={packages} />
        </View>
      ) : (
        <Text className="ml-[5px] mt-[10px] text-[14px] text-[#737373]">
          No Packages available.
        </Text>
      )}
    </ScrollView>
  );
};

export default Pricing;
