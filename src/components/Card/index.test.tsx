import { render } from '@testing-library/react';
import Card from './';

describe('Card tests', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Card>
        <p>This is a test</p>
      </Card>
    );
    expect(getByText(/test/)).toBeInTheDocument();
  });
});
