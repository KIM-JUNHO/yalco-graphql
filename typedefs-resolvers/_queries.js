const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    equipments: [Equipment]
    equipmentAdvs: [EquipmentAdv]
    supplies: [Supply]
    givens: [Given]
    softwares: [Software]
    software: Software
  }
`;

module.exports = typeDefs;
