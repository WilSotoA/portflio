export interface SectionsProps {
  onUpdateLink: (value: string) => void
  activeLink: string
}

export interface AsideBarProps extends SectionsProps {
  menuClass: string
}
