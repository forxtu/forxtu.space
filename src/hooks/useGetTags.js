const useGetTags = data => {
  const mapping = {};

  data.edges.forEach(({ node }) => {
    const { tags } = node.frontmatter;
    tags.forEach(name => {
      if (mapping[name]) {
        mapping[name] += 1;
      } else {
        mapping[name] = 1;
      }
    });
  });

  const tags = Array.from(Object.keys(mapping)).sort(
    (b, a) => mapping[a] - mapping[b]
  );

  return {
    tags,
    mapping
  };
};

export default useGetTags;
