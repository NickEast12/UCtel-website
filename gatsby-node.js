const path = require('path');

export async function turnBlogCategoriesIntoPage({ graphql, actions }) {
  const template = path.resolve('./src/pages/blogs.js');
  const { data } = await graphql(`
    query {
      category: allSanityCategory {
        nodes {
          title
          id
          slug {
            current
          }
          description
        }
      }
    }
  `);
  const Category = data.category.nodes;
  Category.forEach((cat) => {
    console.log(`creating a page for ${cat.title} please wait`);
    actions.createPage({
      path: `blogs/${cat.slug.current}`,
      component: template,
      context: {
        title: cat.title,
        description: cat.description,
        categoryRegex: `/${cat.title}/i`,
      },
    });
  });
}

export async function turnBlogsIntoPages({ graphql, actions }) {
  const template = path.resolve('./src/templates/Blogs.js');
  const { data } = await graphql(`
    query {
      blogs: allSanityPost {
        nodes {
          title
          slug {
            current
          }
          categories {
            title
          }
        }
      }
    }
  `);
  const Blogs = data.blogs.nodes;
  Blogs.forEach((blog) => {
    console.log(`Creating pages for ${blog.title}`);
    actions.createPage({
      path: `/blogs/${blog.slug.current}`,
      component: template,
      context: {
        title: blog.title,
        slug: blog.slug.current,
        category: blog.categories[0].title,
      },
    });
  });
}

export async function turnCaseStuidiesIntoPage({ graphql, actions }) {
  const template = path.resolve('./src/templates/CaseStudy.js');
  const { data } = await graphql(`
    query CaseStudyQuery {
      casestudies: allSanityCasestudies {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);
  const Casestudies = data.casestudies.nodes;
  Casestudies.forEach((casestudy) => {
    console.log(`creating a page for ${casestudy.title}`);
    actions.createPage({
      path: `/case-studies/${casestudy.slug.current}`,
      component: template,
      context: {
        title: casestudy.title,
        slug: casestudy.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  //* Create page functions will go here
  await Promise.all([turnBlogCategoriesIntoPage(params)]);
  await Promise.all([turnBlogsIntoPages(params)]);
  await Promise.all([turnCaseStuidiesIntoPage(params)]);
}
