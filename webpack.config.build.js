//build script for application
const webpack = require('webpack')

//copiar arquivos de um lugar para outro
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //extrai e exporta o css