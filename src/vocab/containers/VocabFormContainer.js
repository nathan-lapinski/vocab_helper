import React, { Component } from 'react'
import { connect } from 'react-redux'
import { vocabWordsCreate } from '../../state/vocab/vocabActions'
import VocabAddForm from '../vocab-add-form/VocabAddForm'

class VocabFormContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <VocabAddForm
          onSubmit={this.props.onSubmit}
        >
        </VocabAddForm>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (word) => dispatch(vocabWordsCreate(word))
  }
}

export default connect(null, mapDispatchToProps)(VocabFormContainer)