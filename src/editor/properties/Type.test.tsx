import React from 'react'
import {render} from '@testing-library/react'
import Type from './Type'

describe('Type', () => {
  const emptyFunc = (): void => {
    //   test
  }
  test('should render button type text', () => {
    const {getByLabelText, getByText} = render(
      <Type field="compound" onClick={emptyFunc} />,
    )
    const container = getByLabelText(/compound/i)

    expect(container).toBeInTheDocument
    expect(container.getAttribute('id')).toBe('compound')
    expect(getByText('Add')).toBeInTheDocument
  })
})
