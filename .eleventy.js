/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setIncludesDirectory('_includes');
    eleventyConfig.setOutputDirectory('dist');
};