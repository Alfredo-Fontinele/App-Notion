export type PageProps = {
  id: string
  title: string
}

export type RecentProps = {
  id: string
  title: string
  cover?: string
}

const PAGES: PageProps[] = [
  { id: "1", title: "React Native" },
  { id: "2", title: "Expo" },
  { id: "3", title: "Links" },
  { id: "4", title: "Projetos" },
  { id: "5", title: "Node.js" },
  { id: "6", title: "Expo Router" },
  { id: "7", title: "Youtube" },
  { id: "8", title: "Projetos" },
  { id: "9", title: "Familia" },
  { id: "10", title: "Trabalhos" },
  { id: "11", title: "Stacks" },
]

const RECENTS: RecentProps[] = [
  {
    id: "1",
    title: "React Native",
    cover:
      "https://blog.rocketseat.com.br/content/images/size/w1000/2024/04/react-native-1.png",
  },
  { id: "2", title: "Expo", cover: undefined },
  { id: "3", title: "Links", cover: undefined },
]

export const DATA = { PAGES, RECENTS }