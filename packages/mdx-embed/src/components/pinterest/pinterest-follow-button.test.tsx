import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

import { PinterestFollowButton } from './';

describe('<PinterestFollowButton />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const pinId = 'pauliescanlon80';
    render(<PinterestFollowButton username={pinId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('pinterest-follow-button')).toBeDefined();
  });
});
