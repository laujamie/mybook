import { render } from '@testing-library/react';
import LoadingText from './index';

describe('LoadingText component', () => {
  it('renders properly with no props', () => {
    const { getByText } = render(<LoadingText />);
    expect(getByText(/data/)).toBeInTheDocument();
    expect(getByText(/people/)).toBeFalsy();
  });

  it('renders properly with props', () => {
    const { getByText } = render(<LoadingText loadingText="people" />);
    expect(getByText(/data/)).toBeFalsy();
    expect(getByText(/people/)).toBeInTheDocument();
  });
});
