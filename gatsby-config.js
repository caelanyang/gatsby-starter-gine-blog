module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/d91b510670924e6b984dc4c4a4f609b8?v=18e9b827d7c74ada8c9fcc973ce48250"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/5edcb5364ee045d4b534b48b6e618b7d?v=4e3b73fe74974b82af1ba1f63ba9c773"
            }
        }
    ],
}
