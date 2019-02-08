import React, { Component } from 'react'
import { connect } from 'react-redux'
import { vocabWordsRequest, vocabWordsRemove } from '../../state/vocab/vocabActions'
import VocabList from '../vocab-list/VocabList'

class VocabListContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    return (
      <div>
        <VocabList
          vocabWords={this.props.vocabWords}
          onRemove={this.props.onRemove}
        ></VocabList>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    vocabWords: state
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onRemove: (id) => dispatch(vocabWordsRemove(id)),
    onMount: () => dispatch(vocabWordsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VocabListContainer)