import { colors } from "@/styles/colors"
import { PageProps } from "@/utils/data"
import { MaterialIcons } from "@expo/vector-icons"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { Container } from "./container"
import { Page } from "./page"

type Props = {
  data: PageProps[]
}

export const PageList = ({ data }: Props) => {
  return (
    <Container>
      <View className="flex-row justify-between items-center gap-4 pr-4">
        <Text className="text-gray-300 text-lg">Privado</Text>

        <View className="flex-row gap-3">
          <TouchableOpacity>
            <MaterialIcons
              name="more-horiz"
              size={20}
              color={colors.gray[400]}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons name="plus-one" size={20} color={colors.gray[400]} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Page title={item.title} />}
        contentContainerClassName="bg-gray-700 rounded-lg"
        scrollEnabled={false}
        ItemSeparatorComponent={() => (
          <View className="flex-1 h-[.7px] bg-gray-500 ml-12" />
        )}
      />
    </Container>
  )
}
