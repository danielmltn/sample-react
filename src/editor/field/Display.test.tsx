import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import user from '@testing-library/user-event'
import Display from './Display'
import '@testing-library/jest-dom/extend-expect'

describe('Display', () => {
  const emptyFunc = (): void => {
    //   test
  }

  test('renders the display inner text', () => {
    const {getByText} = render(
      <Display
        dataPosition={1}
        listId="1"
        field="test field value"
        onClose={emptyFunc}
        onDragStart={emptyFunc}
      />,
    )
    const divDisplay = getByText(/test field value/i)
    expect(divDisplay.innerHTML).toBe(
      'test field value<button aria-label="close">×</button>',
    )
  })
})

describe('firing the remove button', () => {
  const emptyFunc = (): void => {
    //   test
  }
  test('removes the button on click of x', () => {
    const {getByLabelText, unmount} = render(
      <Display
        dataPosition={1}
        listId="1"
        field="number"
        onClose={(): boolean => unmount()}
        onDragStart={emptyFunc}
      />,
    )
    const closeButton = getByLabelText('close')
    expect(closeButton).toBeInTheDocument()
    // fireEvent.click(closeButton)
    user.click(closeButton)
    expect(closeButton).not.toBeInTheDocument()
  })
})
