export class QueryMatcher {
  constructor(queries) {
    this.queries = queries;
  }

  match(elWidth) {
    const applicableQueries = Object.keys(this.queries).reduce((foundQueries, query) => {
      const condition = this.queries[query];
      const maxWidth = condition.maxWidth || condition['max-width'] || null;
      const minWidth = condition.minWidth || condition['min-width'] || null;

      if (maxWidth && elWidth <= maxWidth) {
        return foundQueries.concat([query]);
      }
      if (minWidth && elWidth >= minWidth) {
        return foundQueries.concat([query]);
      }

      return foundQueries
    }, []);

    return applicableQueries;
  }
}