import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Image, Text, TouchableOpacity, View } from "react-native"

export const Header = () => {
  return (
    <View className="w-full flex-row gap-5 items-center pt-10 px-4 pb-4 border-gray-400 border-b-[0.5px]">
      <Image
        className="h-10 w-10 rounded-full"
        src="https://github.com/Alfredo-Fontinele.png"
      />
      <View className="flex-1 ">
        <Text className="text-gray-100 font-medium text-lg">Alfredo Neto</Text>
        <Text className="text-gray-400 font-medium text-sm">
          alfredofontinele08@gmail.com
        </Text>
      </View>

      <TouchableOpacity>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  )
}
