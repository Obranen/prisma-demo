import { create } from 'zustand'
// import {IProductState} from '../interface/product'

// interface IUseFilterProductStore {
//   productsFilter: IProductState[],
//   addProductInFilter: (object: IProductState) => void,
//   cleanProductFilter: () => void,
// }

// export const useFilterProductStore = create<IUseFilterProductStore>((set) => ({
//   productsFilter: [],
//   addProductInFilter: (object) => set(state => ({
//     productsFilter: [
//       ...state.productsFilter,
//       object
//     ],
//   })),
//   cleanProductFilter: () => set(state => ({
//     productsFilter: []
//   })),
// }))

interface IUseCommentStore {
  isCommentEdit: boolean
  commentEdit: () => void
  commentClear: () => void
}

export const useCommentStore = create<IUseCommentStore>((set) => ({
  isCommentEdit: false,
  commentEdit: () =>
    set({
      isCommentEdit: true,
    }),
  commentClear: () =>
    set({
      isCommentEdit: false,
    }),
}))
