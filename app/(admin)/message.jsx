import { FontAwesome6, Octicons } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { ScrollView } from "react-native"
import { View, Text } from "react-native"
import MessageList from "../../components/message/MessageList"

const messagetypelist = ['inbox', 'started', 'unread', 'important']
const actionContent = ['Mark as read', 'Mark as unread', 'Mark as important', 'Mark as Not Important', 'Delete']


const Message = () => {
  const [show, setShow] = useState(false)
  const [isChecked, setChecked] = useState(false)
  const [messagetype, setMessageType] = useState(messagetypelist[0])

  const handleMessageTypeChange = (item) => {
    setMessageType(item)
  }
  return (
    <ScrollView className="bg-white" >

      <View className="flex flex-row mx-4">
        <View className=" w-[80%]    mt-4 mb-4 ">
          <TouchableOpacity
            onPress={() => setShow(prev => !prev)}
            className="border-[1px]  border-[#BFBFBF] rounded-[6px] px-[12px] py-[10px] flex flex-row justify-between items-center">
            <Text className="text-[#000000] text-[18px] font-poppins  font-medium"> Action</Text>

            <Octicons name="triangle-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className=" w-[20%]    flex flex-row justify-center items-center">
          <View className=" border-[1px] border-[#BFBFBF] p-[14px] rounded-[6px]">
            <FontAwesome6 name="arrows-rotate" size={17} color="black" />
          </View>
        </View>
      </View>

      {
        show && <View className="absolute w-full   z-50 " style={{ marginTop: 90 }}>
          <View className=" relative bg-white border-[1px] border-black rounded-xl px-5 py-5" style={{ marginHorizontal: 38 }}>
            <View className=" absolute bg-white border-[1px] border-black" style={{ width: 28, height: 25, top: -10, right: 65, transform: [{ rotate: '50deg' }], }}>
            </View>
            <View className=" absolute bg-white "
              style={{
                width: 50,
                height: 25,
                right: 49,
              }}>
            </View>
            {
              actionContent.map((item, index) => (
                <TouchableOpacity key={index} className="mt-4">
                  <Text className="font-poppins font-normal text-sm text-grey-300">{item}</Text>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>
      }


      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex flex-row my-2  mx-4">
        {
          messagetypelist.map(item => (
            <TouchableOpacity onPress={() => handleMessageTypeChange(item)} key={item} className={`px-4 py-2 rounded-[10px]  ${messagetype === item ? 'bg-[#00AEF0]' : 'border-[1px] bg-white  border-[#8F8F8F]'} `} style={{ marginRight: 16 }}>
              <Text className={` capitalize ${messagetype === item ? 'text-white' : 'text-[#8F8F8F]'}`}>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <View className="mx-4 ">

        <View className="flex flex-row justify-between items-center ">

          <Text className=" font-poppins font-semibold  text-[24px] capitalize ">{messagetype === messagetypelist[0] && 'My'} {messagetype}</Text>

          <View className=" flex flex-row">
            <Checkbox color={isChecked ? '#8F8F8F' : undefined} style={{ borderColor: '#8F8F8F' }} value={isChecked} onValueChange={setChecked} />
            <Text className=" ml-3 font-poppins font-semibold  text-[16px] text-[#8F8F8F]">Select all</Text>
          </View>
        </View>

        {/* if user click inbox show that */}
        {
          messagetype === messagetypelist[0] && Array(17).fill("").map((item, index) => (
            <MessageList key={index} />
          ))
        }

        {
          messagetype === messagetypelist[1] && <View className=" mt-2 bg-[#00AEF0] py-5 flex flex-row justify-center">
            <Text className=" font-poppins font-semibold text-[24px] text-white"> No thread started by you.</Text>
          </View>
        }

        {
          messagetype === messagetypelist[2] && Array(17).fill("").map((item, index) => (
            <MessageList key={index} />
          ))
        }

        {
          messagetype === messagetypelist[3] && Array(17).fill("").map((item, index) => (
            <MessageList key={index} isImportant={true} />
          ))
        }



      </View>

    </ScrollView>
  )
}

export default Message