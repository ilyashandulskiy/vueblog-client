import {lang} from '@/helpers/lang.js'

const constants = {

  MODAL_STATES: {
    CREATE_MODAL: 'CREATE_MODAL',
    COMMENT_MODAL: 'COMMENT_MODAL',
    FILTER_MODAL: 'FILTER_MODAL'
  },

  FILTER_OPTIONS: [
    {
      title: lang.FILTER.LIKED,
      sort: 'likes'
    },
    {
      title: lang.FILTER.COMMENTS,
      sort: 'comments'
    },
    {
      title: lang.FILTER.DATE,
      sort: 'timestamp'
    }
  ]

}

export default constants