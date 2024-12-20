import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSession } from "../../lib/cts";
import { getListPayments } from "../../apiService";

const Transaction = () => {
  const { session } = useSession();
  const [payments, setPayments] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getListPayments(session);
        // console.log(data.result.data);
        setPayments(data?.result.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ScrollView className=" bg-white ">
      <View className="my-5 mx-4">
        <Text className=" font-poppins  font-semibold text-[24px] text-[#010101] ">
          Transactions
        </Text>
      </View>

      <View className="mx-4">
        {!payments || !payments.length > 0 ? (
          <View
            className=" py-[14px] px-[10px]   mx-4  mt-4 rounded-lg"
            style={{ backgroundColor: "#737373" }}
          >
            <Text className=" font-poppins font-semibold text-[14px] text-white ">
              No Transactions found!
            </Text>
          </View>
        ) : (
          <>
            <View className="mt-3 flex flex-row pb-1 ">
              <View className=" w-[10%] h-4">
                <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
                  ID
                </Text>
              </View>
              <View className=" w-[28%] ">
                <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
                  DESCRIPTION
                </Text>
              </View>
              <View className=" w-[22%] h-4">
                <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
                  PAYMENT METHOD
                </Text>
              </View>
              <View className=" w-[10%] h-4">
                <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
                  VALUE
                </Text>
              </View>
              <View className=" w-[20%] h-4">
                <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
                  DATE
                </Text>
              </View>
              <View className=" w-[10%] h-4">
                <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
                  STATUS
                </Text>
              </View>
            </View>
            <View className="mt-3 flex flex-row pb-1 border-b-[1px] border-b-[#BFBFBF]">
              <View className=" w-[10%] h-4">
                <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
                  #1
                </Text>
              </View>
              <View className=" w-[30%] ">
                <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
                  VOITURE DE SPORT EXCEPTIONNELLE
                </Text>
              </View>
              <View className=" w-[22%] h-4">
                <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
                  PAID BY ELAVON
                </Text>
              </View>
              <View className=" w-[10%] h-4">
                <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
                  $29.99
                </Text>
              </View>
              <View className=" w-[20%] h-4">
                <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
                  10/16/2024
                </Text>
              </View>
              <View className=" w-[8%] h-4">
                <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
                  Done
                </Text>
              </View>
            </View>
          </>
        )}

        {/* <View className="mt-3 flex flex-row pb-1 border-b-[1px] border-b-[#BFBFBF]">
          <View className=" w-[10%] h-4">
            <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
              #200
            </Text>
          </View>
          <View className=" w-[30%] ">
            <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
              VOITURE DE SPORT EXCEPTIONNELLE
            </Text>
          </View>
          <View className=" w-[22%] h-4">
            <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
              PAID BY ELAVON
            </Text>
          </View>
          <View className=" w-[10%] h-4">
            <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
              $29.99
            </Text>
          </View>
          <View className=" w-[20%] h-4">
            <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
              10/16/2024
            </Text>
          </View>
          <View className=" w-[8%] h-4">
            <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
              Done
            </Text>
          </View>
        </View>

        <View className="mt-3 flex flex-row pb-1 border-b-[1px] border-b-[#BFBFBF]">
          <View className=" w-[10%] h-4">
            <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
              #3000
            </Text>
          </View>
          <View className=" w-[30%] ">
            <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
              VOITURE DE SPORT EXCEPTIONNELLE
            </Text>
          </View>
          <View className=" w-[22%] h-4">
            <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
              PAID BY ELAVON
            </Text>
          </View>
          <View className=" w-[10%] h-4">
            <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
              $29.99
            </Text>
          </View>
          <View className=" w-[20%] h-4">
            <Text className="font-poppins text-[9px]   font-normal text-[#434343]">
              10/16/2024
            </Text>
          </View>
          <View className=" w-[8%] h-4">
            <Text className="font-poppins text-[9px]   font-normal text-[#00AEF0]">
              Done
            </Text>
          </View>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Transaction;
