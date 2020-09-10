/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');


exports.createPages = async ({graphql, actions}) =>{
    const {createPage} = actions;
    const result = await graphql(`
        query getMembers {
            members:allStrapiClen {
            nodes {
                Slug
            }
            }
        }
    `);

    result.data.members.nodes.forEach( member => {
        createPage({
            path: `/clenovia/${member.Slug}`,
            component:path.resolve(`src/templates/member-template.js`),
            context:{
               slug:member.Slug, 
            }
        })
    });
}