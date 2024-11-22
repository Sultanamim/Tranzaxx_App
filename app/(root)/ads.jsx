import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import FilterForm from "../../components/ads/filterForm";
import { adsCategories } from "../../constant/data";
import AdsCard from "../../components/ads/AdsCard";
import { getALLPosts, getSubCategoryList } from "../../apiService";
import { useEffect, useState } from "react";

const ads = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getALLPosts();
        const postsWithParentCat = await Promise.all(
          data?.result?.data.map(async (post) => {
            const subcategoryData = await getSubCategoryList(
              post.category.parent_id
            );
            return {
              ...post,
              parentCat: subcategoryData?.result?.data[0].parentClosure || "",
            };
          })
        );
        //console.log(postsWithParentCat);
        setPosts(postsWithParentCat);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView className="mt-[14px] ">
      <FilterForm />
      <View className="px-4 flex gap-5 mt-5 mb-20">
        {isLoading ? (
          <ActivityIndicator size="large" color="#00AEF0" />
        ) : (
          posts?.map((ads) => <AdsCard key={ads.id} ads={ads} />)
        )}
      </View>
    </ScrollView>
  );
};

export default ads;
