import { create } from 'zustand'
import { IComment } from '../interface/comment'

interface IUseCommentStore {
  isCommentEdit: boolean
  setCommentEdit: () => void
  setCommentClose: () => void

  dataCommentEdit: IComment
  setDataCommentEdit: (data: IComment) => void
}

export const useCommentStore = create<IUseCommentStore>((set) => ({
  isCommentEdit: false,
  setCommentEdit: () =>
    set({
      isCommentEdit: true,
    }),
  setCommentClose: () =>
    set({
      isCommentEdit: false,
    }),

  dataCommentEdit: {
    id: '',
    name: '',
    description: '',
  },
  setDataCommentEdit: (data) =>
    set({
      dataCommentEdit: data,
    }),
}))
