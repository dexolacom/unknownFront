/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: 'export',
  // images: {
  //   unoptimized: true
  // },
  // assetPrefix: '/f',
  webpack(config) {
    // SVGR
    {
      // Grab the existing rule that handles SVG imports
      const fileLoaderRule = config.module.rules.find(rule =>
        rule.test?.test?.('.svg'),
      );

      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: /url/ }, // exclude if *.svg?url
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        overrides: {
                          removeViewBox: false,
                        },
                      },
                    },
                    {
                      name: 'prefixIds',
                      active: true,
                    },
                    {
                      name: 'removeDimensions',
                      active: true,
                    },
                    {
                      name: 'removeViewBox',
                      active: false,
                    },
                  ],
                  removeViewBox: false,
                  removeDimensions: true,
                  typescript: true,
                  ref: true,
                },
              },
            },
          ],
        },
      );

      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },

  // SASS
  sassOptions: {
    prependData: `
    // BREAKPOINTS
    $breakpoint-sm: ${process.env.NEXT_PUBLIC_BREAKPOINT_SM}px;
    $breakpoint-md: ${process.env.NEXT_PUBLIC_BREAKPOINT_MD}px;
    $breakpoint-lg: ${process.env.NEXT_PUBLIC_BREAKPOINT_LG}px;
    $breakpoint-xl: ${process.env.NEXT_PUBLIC_BREAKPOINT_XL}px;
    $breakpoint-xxl: ${process.env.NEXT_PUBLIC_BREAKPOINT_XXL}px;

    // COLORS
    $color-1: ${process.env.NEXT_PUBLIC_COLOR_1};
    $color-2: ${process.env.NEXT_PUBLIC_COLOR_2};
    $color-3: ${process.env.NEXT_PUBLIC_COLOR_3};
    $color-4: ${process.env.NEXT_PUBLIC_COLOR_4};
    $color-5: ${process.env.NEXT_PUBLIC_COLOR_5};
    $color-6: ${process.env.NEXT_PUBLIC_COLOR_6};
    $color-7: ${process.env.NEXT_PUBLIC_COLOR_7};
    $color-8: ${process.env.NEXT_PUBLIC_COLOR_8};
    $color-9: ${process.env.NEXT_PUBLIC_COLOR_9};
    $color-10: ${process.env.NEXT_PUBLIC_COLOR_10};
    @import "@/styles/variables.scss";
    @import "@/styles/mixins.scss";
    `,
  },
  // Images
  // ...other config
};

module.exports = nextConfig;
