import path from 'path'
import axios from 'axios'

export default {
  plugins: [
    [
      'react-static-plugin-favicons',
      { outputDir: path.join(__dirname, 'dist'),
        inputFile: path.resolve(__dirname, 'logo.png') },
    ],
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
