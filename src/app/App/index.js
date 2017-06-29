import React, { Component } from 'react'

import Card from '../Card'

const DEBOUNCE_MS = 500
const DEFAULT_DOMAIN = 'https://stripe.com'

export default class extends Component {
  state = { domain: DEFAULT_DOMAIN }

  onChange = e => {
    const domain = e.target.value.trim() || DEFAULT_DOMAIN
    clearTimeout(this.debouncedSetState)
    this.debouncedSetState = setTimeout(
      () => this.setState({ domain }),
      DEBOUNCE_MS
    )
  }

  render = () => (
    <main className='vh-100 dt w-100 bg-grey-50'>
      <div className='tc white ph3 ph4-l'>
        <h1 className='f2 fw6 tc pv4 grey-700 avenir'>
          react-atv-logo
        </h1>
        <div className='flex justify-center flex-column items-center'>
          <Card className='pb4' domain={this.state.domain} />

          <form className='pa4 pb4 black-80 w-30-l'>
            <div className='measure'>
              <input
                id='name'
                className='input-reset ba b--black-20 pa2 mb2 db w-100 br2'
                type='text'
                placeholder='Enter domain...'
                onChange={this.onChange}
              />
            </div>
          </form>

        </div>
      </div>
    </main>
  )
}
