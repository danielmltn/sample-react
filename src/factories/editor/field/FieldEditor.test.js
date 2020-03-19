import React from 'react';
import { render, fireEvent, getByAltText } from '@testing-library/react';
import FieldEditor from './FieldEditor';

test('renders field editor', () => {
    const { getByText, getInput } = render(<FieldEditor />);
    const divInput = getByAltText(document.body, /fill out your name/i);
    fireEvent.change(divInput, { target: { value: 'testing value here' } })
    expect(divInput).toBeInTheDocument();
    expect(divInput.value).toBe('testing value here');
});
