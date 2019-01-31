import React, { Component } from 'react'
import { connect } from 'react-redux'
import { vocabWordsRequest } from '../../state/vocab/vocabActions'
import VocabList from '../vocab-list/VocabList'

class VocabListContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(vocabWordsRequest())
  }

  render() {
    return (
      <div>
        <VocabList
          vocabWords={this.props.vocabWords}
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

export default connect(mapStateToProps)(VocabListContainer)