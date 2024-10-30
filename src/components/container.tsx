import { View } from "react-native"

export const Container = ({ children }: React.PropsWithChildren) => {
  return <View className="p-4 gap-4">{children}</View>
}
