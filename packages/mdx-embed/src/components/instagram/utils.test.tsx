import { render } from '@testing-library/react';
import React, { act } from 'react';

import { Instagram } from './';

describe('utils', () => {
  beforeEach(() => {
    (window as any).addIntersectionObserver();
  });

  test('it calls instgrm.Embeds.process', () => {
    render(<Instagram instagramId="B7ISOoHne6s" />);

    act(() => {
      (window as any).triggerGeneralObserver();
      return undefined;
    });

    expect((window as any).instgrm.Embeds.process).toBeCalledTimes(1);
  });
});
