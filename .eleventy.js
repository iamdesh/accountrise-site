module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static": "/" }); // images/uploads etc.

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.{md,njk}");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"]
  };
};
