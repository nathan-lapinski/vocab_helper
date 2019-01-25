export const VOCAB_WORDS_REQUEST = 'VOCAB_WORDS_REQUEST'
export const VOCAB_WORDS_REQUEST_SUCCESS = 'VOCAB_WORDS_REQUEST_SUCCESS'
export const VOCAB_WORDS_REQUEST_ERROR = 'VOCAB_WORDS_REQUEST_ERROR'

export const vocabWordsRequest = () => ({ type: VOCAB_WORDS_REQUEST })
export const vocabWordsRequestSuccess = ({words}) => ({ 
    type: VOCAB_WORDS_REQUEST_SUCCESS,
    payload: {
        data: words
    }
})
export const vocabWordsRequestError = () => ({ type: VOCAB_WORDS_REQUEST_ERROR })