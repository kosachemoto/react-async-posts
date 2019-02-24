import { nextPostId } from './post-list';
import { fixtures } from './fixtures';

describe("post-list.nextPostId()", () => {
  fixtures.filter(e => e.enabled).forEach(e => {
    test(`test: ${e.index}`, () => {
      const calculated = nextPostId(e.props.posts);

      expect(calculated).toBe(e.expected);
    })
  });
})
