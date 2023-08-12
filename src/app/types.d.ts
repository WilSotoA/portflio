import { type ResumeCategory } from './const'

// Props

export interface SectionsProps {
  onUpdateLink: (value: string) => void
  activeLink: string
}

export interface AsideBarProps extends SectionsProps {}

interface ResumeItemProps extends Omit<ResumeItem, 'id'> {}

// Others
export interface ResumeItem {
  id: number
  category: ResumeCategory
  date: string
  title: string
  desc: string
}
