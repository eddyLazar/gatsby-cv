export default ({ edges }) => {
  return edges.map(
    ({
      node: {
        frontmatter: { period, title, company },
        html,
      },
    }) => {
      return { period, title, company, html };
    }
  );
};
