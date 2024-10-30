import { RecentProps } from "@/utils/data"
import { FlatList, Text } from "react-native"
import { Container } from "./container"
import { Recent } from "./recent"

type Props = {
  data: RecentProps[]
}

export const RecentList = ({ data }: Props) => {
  return (
    <Container>
      <Text className="text-gray-300 text-lg">Recentes</Text>
      <FlatList
        data={data}
        contentContainerClassName="gap-3"
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Recent item={item} />}
      />
    </Container>
  )
}
