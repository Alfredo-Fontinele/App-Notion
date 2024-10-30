import { colors } from "@/styles/colors"
import { RecentProps } from "@/utils/data"
import { MaterialIcons } from "@expo/vector-icons"
import { Image, Text, TouchableOpacity, View } from "react-native"

type Props = {
  item: RecentProps
}

export const Recent = ({ item }: Props) => {
  return (
    <TouchableOpacity className={`rounded-xl h-[120px] w-[134px] bg-gray-700`}>
      <Image
        className="w-full rounded-tl-xl rounded-tr-xl h-[60px] bg-zinc-700"
        src={item.cover}
      />

      <View className="h-[20px]">
        <MaterialIcons
          className="absolute top-[-20px] left-[14px]"
          name="file-present"
          size={32}
          color={colors.gray[400]}
        />
      </View>

      <Text className="text-gray-100 px-[18px]" numberOfLines={2}>
        {item.title}
      </Text>
    </TouchableOpacity>
  )
}
