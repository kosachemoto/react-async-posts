export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: { 
      posts: {
        "1": { id: "1" },
        "3": { id: "3" },
      }
    },
    expected: 2
  },
  {
    index: 1,
    enabled: true,
    props: { 
      posts: {
        "2": { id: "2" },
        "3": { id: "3" },
      }
    },
    expected: 1
  },
  {
    index: 2,
    enabled: true,
    props: { 
      posts: {
        "1": { id: "1" },
        "2": { id: "2" },
        "3": { id: "3" },
      }
    },
    expected: 4
  },
  {
    index: 3,
    enabled: true,
    props: { 
      posts: {
      }
    },
    expected: 1
  }
]