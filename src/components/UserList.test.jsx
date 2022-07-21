
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import UserList from './UserList';
jest.mock('axios');

describe('UserList', () => {
  it('should render users list', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [{ name: 'John Doe', id: 1 }],
      })
    );
    render(<UserList />);
    const listElements = await screen.findAllByRole('listitem');
    expect(listElements[0]).toBeInTheDocument();
  });
});
