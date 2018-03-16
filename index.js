const GraphQLLanguage = require('graphql/language');

const parse = (gql) => GraphQLLanguage.parse(gql, { noLocation: true });

const q1 = `query {
  fieldMappings(filter: {typeName: "lead", organizationCode: "au-mba"}) {
    fieldName
  }
}`;

const q1mod1 = `query {fieldMappings(
  filter: {typeName: "lead", organizationCode: "au-mba"
}) 
{
    fieldName
  }
}`;

test('Returns the same output given the same input', () => {
  const doc1 = parse(q1);
  const doc2 = parse(q1);
  expect(doc1).toEqual(doc2);
});

test('Produces identical objects given the same query but with whitespace changes', () => {
  const doc1 = parse(q1);
  const doc2 = parse(q1mod1);
  expect(doc1).toEqual(doc2);
});
