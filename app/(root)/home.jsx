import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import HeroSection from "../../components/Home/HeroSection";
import Categories from "../../components/Home/Categories";
import FeaturedAds from "../../components/Home/FeaturedAds";
import SellersDetails from "../../components/Home/SellersDetails";
import RegisterNow from "../../components/Home/RegisterNow";
import Search from "../../components/Home/Search";
import { getALLPosts, getHomeSections } from "../../apiService";

export default function Home() {
  const [sections, setSections] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getHomeSections();
        // console.log(data.result.data);
        setSections(data?.result.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getALLPosts();
        // Filter posts where the "featured" value is "1"
        const filteredPosts = data?.result.data.filter(
          (post) => post.featured === "1"
        );
        setPosts(filteredPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <ScrollView>
      <View>
        <HeroSection />
        {!sections && !posts ? (
          <ActivityIndicator size="large" color="#00AEF0" />
        ) : (
          <View>
            <View className="px-4">
              <Search searches={sections?.getSearchForm || null} />
            </View>
            <View className="px-4">
              <Categories categories={sections?.getCategories || null} />
            </View>
            {posts && (
              <View className="px-4">
                <FeaturedAds ads={posts || []} />
              </View>
            )}
            <SellersDetails stats={sections?.getStats || null} />
            <View className="px-4">
              <RegisterNow />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
