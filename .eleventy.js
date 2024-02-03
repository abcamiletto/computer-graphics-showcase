module.exports = function(eleventyConfig) {
    // Copy assets and images folders to _site
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("images");
};

