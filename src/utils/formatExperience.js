// export default ({ edges }) => {
//   return edges.map(
//     ({
//       node: {
//         frontmatter: { period, title, company },
//         html,
//       },
//     }) => {
//       return { period, title, company, html };
//     }
//   );
// };

export default ({
  node: {
    frontmatter: { period, title, company },
    html,
  },
}) => ({ period, title, company, html });
