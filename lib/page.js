import pages from "../data/pages.json";

const pageDict = {};
const pageList = [];

const loadPageInfo = (page) => {
  page.route =
    page.route || page.parent ? `${page.parent.route}/${page.name}` : "";
  page.sub =
    page.sub &&
    page.sub.map((subPage) => {
      loadPageInfo({
        ...subPage,
        parent: {
          name: page.name,
          route: page.route,
        },
      });
      return subPage.name;
    });
  if (page.name === "index") {
    page.route = "/";
  }
  pageDict[page.name] = page;
  pageList.push(page);
};

pages.forEach(loadPageInfo);

export const getPageByName = (name) => pageDict[name];

export const getPageByRoute = (name) =>
  pageList.find((page) => page.route === name);
