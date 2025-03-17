// gatsby-config.js
module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-disqus`,
            options: {
                shortname: `starteknoloji-space`
            }
        },
    ]
}
import { Disqus } from 'gatsby-plugin-disqus';

const Template = () => (
    /* Page contents */

    <Disqus
        config={
            /* Replace PAGE_URL with your post's canonical URL variable */
            url: 'PAGE_URL',
            /* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
            identifier: 'PAGE_IDENTIFIER',
            /* Replace PAGE_TITLE with the title of the page */
            title: 'PAGE_TITLE',
        }
    />
);
