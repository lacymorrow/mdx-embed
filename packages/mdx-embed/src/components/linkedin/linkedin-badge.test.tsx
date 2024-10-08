import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

import { LinkedInBadge } from '.';

describe('<LinkedInBadge />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const username = 'pauliescanlon';
    render(<LinkedInBadge username={username} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('linkedin-badge')).toBeDefined();
  });
});
