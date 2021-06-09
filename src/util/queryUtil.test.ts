import { defaultQueryOptions, mergeWithDefaultOptions } from './queryUtil';

describe('mergeWithDefaultOptions tests', () => {
  it('returns default with no options', () => {
    expect(mergeWithDefaultOptions()).toEqual(defaultQueryOptions());
  });

  it('merges options correctly', () => {
    expect(mergeWithDefaultOptions({ cacheTime: 50 })).toEqual({
      ...defaultQueryOptions(),
      cacheTime: 50,
    });
  });
});
