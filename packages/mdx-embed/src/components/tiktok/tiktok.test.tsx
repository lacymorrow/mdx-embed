import { render, screen } from '@testing-library/react';
import React, { act } from 'react';

import { TikTok } from './';

describe('<TikTok />', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it renders the component', () => {
    const tikTokId = '@scout2015/video/6718335390845095173';
    render(<TikTok tikTokId={tikTokId} />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect(screen.getByTestId('tiktok')).toBeDefined();
  });
});
