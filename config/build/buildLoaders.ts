import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // localIdentName: isDev
            //     ? '[path][name]__[local]--[hash:base64:5]'
            //     : '[hash:base64:8]'
            localIdentName: isDev
              ? '[local]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  // const eslintLoader = {
  //   test: /\.(ts|jsx|tsx)$/,
  //   enforce: 'pre',
  //   use: [
  //     {
  //       options: {
  //         eslintPath: require.resolve('eslint'),
  //
  //       },
  //       loader: require.resolve('eslint-loader'),
  //     },
  //   ],
  //   exclude: /node_modules/,
  // };

  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
    // eslintLoader,
  ];
}
