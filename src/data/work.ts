export interface WorkItem {
  num: string
  title: string
  tags: string[]
  img: string
  slug: string
}

export const workItems: WorkItem[] = [
  { num: '[ 01 ]', title: 'Pana+Care TeleHealth App', tags: ['Data integration', 'UI Design System', 'Marketing Strategy'], img: '/panacare.jpeg.avif', slug: 'panacare-telehealth-app' },
  { num: '[ 02 ]', title: 'Local Restaurant SQL system', tags: ['Data Integration', 'Data Visualization', 'Social Campaign'], img: '/localrestuarant.jpeg.avif', slug: 'local-restaurant-sql-system' },
  { num: '[ 03 ]', title: 'VunaChain AgriTech System', tags: ['Data integration', 'Data Visualization', 'Data Analysis'], img: '/vunachain.jpeg.avif', slug: 'vunachain-agritech-system' },
  { num: '[ 04 ]', title: 'Kenya Flying Labs', tags: ['Website Development', 'Content Marketing', 'Social Campaign'], img: '/kenyaflyinglabs.jpeg.avif', slug: 'kenya-flying-labs' },
]
