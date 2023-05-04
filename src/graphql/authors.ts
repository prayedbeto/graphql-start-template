
const authors = [];

export const typeDefsAuthors = `
  type Author {
    id: ID!
    name: String!
  }

  type Query {
    authors: [Author]
  }

  type Mutation {
    createAuthor(name: String!): ID
  }
`;

export const resolversAuthors = {
  Query: {
    authors: async () => {
      return authors;
    },
  },
  Mutation: {
    async createAuthor(parent, args) {
      const { name } = args;

      const author = {
        id: 1,
        name: name
      };
      
      authors.push(author);

      return author.id;
    },
  }
}

