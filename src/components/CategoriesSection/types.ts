
export type ModalStateType = {
  isOpen: boolean,
  idToRemove?: string | null
}

export type CategoryType = {
  id: string,
  title?: string,
  isIncluded?: boolean,
  isDefault?: boolean
}
