import React, { Component } from 'react'
import { connect } from 'react-redux'
import VocabDetail from '../vocab-detail/VocabDetail'

class VocabDetailContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <VocabDetail
          vocab={this.props.selectedWord}
        ></VocabDetail>
      </div>
    )
  }
}

// TODO: Write a selector for this?
export const mapStateToProps = state => {
  return {
    selectedWord: state.selectedWord
  }
}

export default connect(mapStateToProps, null)(VocabDetailContainer)