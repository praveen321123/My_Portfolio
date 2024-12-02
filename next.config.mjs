import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  }
};

export default withSentryConfig(nextConfig, {

silent: true,
org: "praveen-portfolio",
project: "javascript-nextjs",
}, {

widenClientFileUpload: true,

transpileClientSDK: true,

hideSourceMaps: true,

disableLogger: true,

automaticVercelMonitors: true,
});