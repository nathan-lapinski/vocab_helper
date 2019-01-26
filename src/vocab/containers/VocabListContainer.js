import { connect } from 'react-redux'
import VocabList from '../vocab-list'

const mapStateToProps = state => {
  return {
    vocabWords: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

const VocabListContainer = connect(
  mapStateToProps,
  () => {}
)(VocabList)

export default VocabListContainer