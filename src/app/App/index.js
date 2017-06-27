import createClass from 'create-react-class'
import React from 'react'

import Card from '../Card'

const DEFAULT_DOMAIN = 'https://stripe.com'
const DEBOUNCE_MS = 500

export default createClass({
  getInitialState () {
    return {domain: DEFAULT_DOMAIN}
  },
  onChange (e) {
    const value = e.target.value.trim()
    clearTimeout(this.debouncedSetState)
    this.debouncedSetState = setTimeout(() => {
      if (!value || value === '') this.setState({domain: DEFAULT_DOMAIN})
      else this.setState({domain: value})
    }, DEBOUNCE_MS)
  },
  render () {
    const {domain} = this.state
    const {onChange} = this

    return (
      <main className='vh-100 dt w-100 bg-grey-50'>
        <div className='tc white ph3 ph4-l'>
          <h1 className='f2 fw6 tc pv4 grey-700 avenir'>
            react-atv-logo
          </h1>
          <div className='flex justify-center flex-column items-center'>
            <Card className='pb4' domain={domain} />

            <form className='pa4 pb4 black-80 w-30-l'>
              <div className='measure'>
                <input
                  id='name'
                  className='input-reset ba b--black-20 pa2 mb2 db w-100 br2'
                  type='text'
                  placeholder='Enter domain...'
                  onChange={onChange}
                    />
              </div>
            </form>

          </div>
        </div>
      </main>
    )
  }
})
