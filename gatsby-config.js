require('dotenv/config')
require('ts-node').register({ files: true })

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'l7b159g39wbs',
        accessToken: 'zbURc3aFIEnC0jdiVzxMk4ZEKDoHs61xO5UPDnQgzZM',
      },
    },
  ],
}
