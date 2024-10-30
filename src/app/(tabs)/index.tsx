import { Header } from "@/components/header"
import { PageList } from "@/components/page-list"
import { RecentList } from "@/components/recent-list"
import { DATA } from "@/utils/data"
import { ScrollView, View } from "react-native"

export default function Index() {
  return (
    <View className="flex-1">
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-5"
      >
        <RecentList data={DATA.RECENTS} />
        <PageList data={DATA.PAGES} />
      </ScrollView>
    </View>
  )
}
