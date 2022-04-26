import { createStore } from 'vuex'
import * as post from '@/api/post.js'
import types from '@/store/types.js'
import constants from '@/helpers/constants.js'

export default createStore({
  state: {
    posts: [],
    page: 1,
    pages: 1,
    sort: constants.FILTER_OPTIONS[0].sort,
    isLoading: true,
    isModalOpened: false,
    modal: null,
    selectedPost: null
  },
  mutations: {
    [types.MUTATIONS.SET_POSTS](state, payload) {
      state.posts = payload
    },
    [types.MUTATIONS.SORT](state, payload) {
      state.sort = payload
    },
    [types.MUTATIONS.SELECT_POST](state, payload) {
      state.selectedPost = payload
    },
    [types.MUTATIONS.SET_PAGE](state, payload) {
      state.page = payload
    },
    [types.MUTATIONS.SET_PAGES](state, payload) {
      state.pages = payload
    },
    [types.MUTATIONS.SET_ISLOADING](state, payload) {
      state.isLoading = payload
    },
    [types.MUTATIONS.OPEN_MODAL](state, payload) {
      state.modal = payload
      state.isModalOpened = true
    },
    [types.MUTATIONS.CLOSE_MODAL](state) {
      state.isModalOpened = false
    },
    [types.MUTATIONS.RESET_MODAL](state) {
      state.modal = null
    }
  },
  actions: {
    [types.ACTIONS.SET_POSTS]({ commit }, payload) {
      commit(types.MUTATIONS.SET_POSTS, payload)
    },

    [types.ACTIONS.SELECT_POST]({ commit }, payload) {
      commit(types.MUTATIONS.SELECT_POST, payload)
    },

    [types.ACTIONS.NEXT_PAGE]({ state, commit, dispatch }) {
      commit(types.MUTATIONS.SET_PAGE, state.page + 1)
      dispatch(types.ACTIONS.GET_DATA)
    },

    [types.ACTIONS.PREV_PAGE]({ state, commit, dispatch }) {
      commit(types.MUTATIONS.SET_PAGE, state.page - 1)
      dispatch(types.ACTIONS.GET_DATA)
    },

    [types.ACTIONS.FIRST_PAGE]({ commit, dispatch }) {
      commit(types.MUTATIONS.SET_PAGE, 1)
      dispatch(types.ACTIONS.GET_DATA)
    },

    [types.ACTIONS.LAST_PAGE]({ state, commit, dispatch }) {
      commit(types.MUTATIONS.SET_PAGE, state.pages)
      dispatch(types.ACTIONS.GET_DATA)
    },

    [types.ACTIONS.OPEN_MODAL]({ commit }, payload) {
      commit(types.MUTATIONS.OPEN_MODAL, payload)
    },

    [types.ACTIONS.SORT]({ commit, dispatch }, payload) {
      commit(types.MUTATIONS.SORT, payload)
      dispatch(types.ACTIONS.GET_DATA)
      dispatch(types.ACTIONS.FIRST_PAGE)
    },

    [types.ACTIONS.CLOSE_MODAL]({ commit }) {
      commit(types.MUTATIONS.CLOSE_MODAL)
      setTimeout(() => commit(types.MUTATIONS.RESET_MODAL), 150)
    },

    async [types.ACTIONS.GET_DATA]({ commit, state }) {
      commit(types.MUTATIONS.SET_ISLOADING, true)
      const { posts, pagination } = await post.getAll(state.page, state.sort)
      console.log(posts)
      commit(types.MUTATIONS.SET_ISLOADING, false)
      commit(types.MUTATIONS.SET_PAGES, pagination.pages)
      commit(types.MUTATIONS.SET_POSTS, posts)
    }
  },
  modules: {
  }
})
