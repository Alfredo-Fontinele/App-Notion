import { colors } from "@/styles/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"

type Props = {
  title: string
}

export const Page = ({ title }: Props) => {
  return (
    <View className="w-full flex-row gap-2 items-center p-4">
      <MaterialIcons name="chevron-right" size={20} color={colors.gray[400]} />

      <MaterialIcons name="file-present" size={20} color={colors.gray[400]} />

      <Text className="text-gray-100 text-sm flex-1">{title}</Text>

      <TouchableOpacity>
        <MaterialIcons name="plus-one" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  )
}
