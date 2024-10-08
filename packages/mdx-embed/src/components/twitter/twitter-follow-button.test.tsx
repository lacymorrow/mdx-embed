import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

import { TwitterFollowButton } from './';

describe('<TwitterFollowButton />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    render(<TwitterFollowButton username="PaulieScanlon" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('twitter-follow-button')).toBeDefined();
  });
});
